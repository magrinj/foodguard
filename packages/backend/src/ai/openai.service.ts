import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { RecipeDifficulty } from '../recipes/dto/create-recipe.input';

export interface GeneratedRecipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: RecipeDifficulty;
  suggestedTags: string[];
  suggestedAllergens: string[];
  suggestedDietaryTags: string[];
}

@Injectable()
export class OpenAIService {
  private readonly openai: OpenAI;
  private readonly logger = new Logger(OpenAIService.name);

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }
    this.openai = new OpenAI({ apiKey });
  }

  async generateRecipe(feedback?: string): Promise<GeneratedRecipe> {
    try {
      const prompt = this.buildPrompt(feedback);
      
      const response = await this.openai.chat.completions.create({
        model: 'o4-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a professional chef specializing in gluten-free cooking. Create detailed, delicious recipes that are safe for people with celiac disease or gluten sensitivity.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error('No content generated from OpenAI');
      }

      return this.parseRecipeResponse(content);
    } catch (error) {
      this.logger.warn(`OpenAI API error: ${error.message}. Falling back to local recipe generator.`);
      return this.generateFallbackRecipe(feedback);
    }
  }

  private generateFallbackRecipe(feedback?: string): GeneratedRecipe {
    // A collection of predefined gluten-free recipes
    const fallbackRecipes = [
      {
        title: "Quinoa Buddha Bowl",
        description: "A nutritious and colorful bowl packed with protein-rich quinoa, roasted vegetables, and a zesty lemon dressing.",
        ingredients: [
          "1 cup quinoa",
          "2 cups vegetable broth",
          "1 sweet potato, cubed",
          "1 cup chickpeas, cooked",
          "1 avocado, sliced",
          "2 cups mixed greens",
          "1 lemon, juiced",
          "2 tbsp olive oil",
          "1 tsp cumin",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Cook quinoa in vegetable broth according to package instructions",
          "Roast sweet potato cubes with olive oil and cumin at 400°F for 25 minutes",
          "Prepare the dressing by mixing lemon juice, olive oil, salt, and pepper",
          "Assemble the bowl with quinoa, roasted sweet potato, chickpeas, avocado, and greens",
          "Drizzle with the lemon dressing and serve"
        ],
        prepTime: 15,
        cookTime: 30,
        servings: 2,
        difficulty: RecipeDifficulty.EASY,
        suggestedTags: ["healthy", "vegetarian", "bowl", "lunch"],
        suggestedAllergens: [],
        suggestedDietaryTags: ["vegetarian", "vegan", "dairy-free"]
      },
      {
        title: "Mediterranean Grilled Chicken",
        description: "Tender chicken breast marinated in Mediterranean herbs and served with a fresh Greek salad.",
        ingredients: [
          "2 chicken breasts",
          "2 tbsp olive oil",
          "1 lemon, juiced",
          "2 cloves garlic, minced",
          "1 tsp oregano",
          "1 tsp thyme",
          "2 cups mixed salad greens",
          "1 cucumber, diced",
          "1 tomato, diced",
          "1/4 red onion, sliced",
          "1/4 cup olives",
          "2 tbsp feta cheese (optional)",
          "Salt and pepper to taste"
        ],
        instructions: [
          "Marinate chicken in olive oil, lemon juice, garlic, herbs, salt, and pepper for 30 minutes",
          "Grill chicken for 6-8 minutes per side until cooked through",
          "Prepare the Greek salad by combining greens, cucumber, tomato, onion, and olives",
          "Slice the grilled chicken and serve over the salad",
          "Top with feta cheese if desired"
        ],
        prepTime: 20,
        cookTime: 20,
        servings: 2,
        difficulty: RecipeDifficulty.EASY,
        suggestedTags: ["mediterranean", "grilled", "chicken", "salad"],
        suggestedAllergens: [],
        suggestedDietaryTags: ["gluten-free", "dairy-free"]
      }
    ];

    // Select a random recipe from the fallback collection
    const randomIndex = Math.floor(Math.random() * fallbackRecipes.length);
    return fallbackRecipes[randomIndex];
  }

  /**
   * Generate an AI response to a comment on an AI-generated recipe
   * @param commentContent The content of the user's comment
   * @returns A response message from the AI
   */
  async generateRecipeResponse(commentContent: string): Promise<string> {
    try {
      const prompt = `You are an AI chef who created a gluten-free recipe. A user has left the following comment on your recipe:

"${commentContent}"

Please respond to this comment in a friendly, professional manner. Acknowledge their feedback and explain how you'll take it into consideration for future recipe improvements. Keep your response concise (2-3 sentences) and conversational.`;
      
      const response = await this.openai.chat.completions.create({
        model: 'o4-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a professional AI chef specializing in gluten-free cooking, responding to user feedback on your recipes.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error('No content generated from OpenAI');
      }

      return content;
    } catch (error) {
      this.logger.error(`Error generating recipe response: ${error.message}`, error.stack);
      return "Thank you for your feedback! I'll take your suggestions into consideration for future recipe improvements.";
    }
  }

  private buildPrompt(feedback?: string): string {
    let prompt = 'Create a gluten-free recipe with the following details:\n';
    prompt += '- A creative and delicious title\n';
    prompt += '- A brief description of the dish\n';
    prompt += '- A list of ingredients with measurements\n';
    prompt += '- Step-by-step cooking instructions\n';
    prompt += '- Preparation time in minutes\n';
    prompt += '- Cooking time in minutes\n';
    prompt += '- Number of servings\n';
    prompt += '- Difficulty level (EASY, MEDIUM, or HARD)\n';
    prompt += '- Suggested tags for categorizing the recipe\n';
    prompt += '- Any allergens to be aware of (besides gluten)\n';
    prompt += '- Dietary tags (e.g., vegetarian, vegan, dairy-free)\n\n';
    
    if (feedback) {
      prompt += `Please consider the following feedback from users when creating the recipe:\n${feedback}\n\n`;
    }
    
    prompt += 'Format the response as a JSON object with the following structure:\n';
    prompt += '{\n';
    prompt += '  "title": "Recipe Title",\n';
    prompt += '  "description": "Recipe description",\n';
    prompt += '  "ingredients": ["ingredient 1", "ingredient 2", ...],\n';
    prompt += '  "instructions": ["step 1", "step 2", ...],\n';
    prompt += '  "prepTime": 15,\n';
    prompt += '  "cookTime": 30,\n';
    prompt += '  "servings": 4,\n';
    prompt += '  "difficulty": "MEDIUM",\n';
    prompt += '  "suggestedTags": ["tag1", "tag2", ...],\n';
    prompt += '  "suggestedAllergens": ["allergen1", "allergen2", ...],\n';
    prompt += '  "suggestedDietaryTags": ["dietaryTag1", "dietaryTag2", ...]\n';
    prompt += '}';
    
    return prompt;
  }

  private parseRecipeResponse(content: string): GeneratedRecipe {
    try {
      // Extract JSON from the response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in the response');
      }
      
      const jsonStr = jsonMatch[0];
      const recipe = JSON.parse(jsonStr);
      
      // Validate and convert the recipe
      return {
        title: recipe.title,
        description: recipe.description,
        ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients : [],
        instructions: Array.isArray(recipe.instructions) ? recipe.instructions : [],
        prepTime: parseInt(recipe.prepTime, 10) || 15,
        cookTime: parseInt(recipe.cookTime, 10) || 30,
        servings: parseInt(recipe.servings, 10) || 4,
        difficulty: this.validateDifficulty(recipe.difficulty),
        suggestedTags: Array.isArray(recipe.suggestedTags) ? recipe.suggestedTags : [],
        suggestedAllergens: Array.isArray(recipe.suggestedAllergens) ? recipe.suggestedAllergens : [],
        suggestedDietaryTags: Array.isArray(recipe.suggestedDietaryTags) ? recipe.suggestedDietaryTags : [],
      };
    } catch (error) {
      this.logger.error(`Error parsing recipe response: ${error.message}`, error.stack);
      throw new Error(`Failed to parse recipe: ${error.message}`);
    }
  }

  private validateDifficulty(difficulty: string): RecipeDifficulty {
    const validDifficulties = Object.values(RecipeDifficulty);
    if (validDifficulties.includes(difficulty as RecipeDifficulty)) {
      return difficulty as RecipeDifficulty;
    }
    return RecipeDifficulty.MEDIUM; // Default to MEDIUM if invalid
  }
} 