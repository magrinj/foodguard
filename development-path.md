# FoodGuard Development Path

A comprehensive, actionable checklist for building FoodGuard, split into logical phases. Checkboxes will be marked as each part is completed.

---

## 1. 🏁 Project Initialization
- [x] Initialize Yarn 4 Monorepo with Workspaces
- [x] Set up strict TypeScript config (root + packages)
- [x] Configure ESLint + Prettier (shared config)
- [x] Set up absolute imports (`@/src/...`)
- [x] Create shared packages: `@foodguard/types`, `@foodguard/utils`
- [x] Add .yarnrc.yml for environment enforcement
- [x] Initialize Git repository and .gitignore

---

## 2. 🛠️ Backend (NestJS + GraphQL + Prisma)
- [x] Scaffold NestJS app with GraphQL (code-first)
- [x] Set up Prisma with PostgreSQL
- [x] Define core data models (User, Recipe, Place, Comment, Vote, Tag, etc.)
- [x] Implement authentication (JWT, refresh tokens, anonymous mode)
- [x] Integrate Amazon S3/Minio for media storage
- [ ] Implement GraphQL resolvers for:
  - [x] Recipes (CRUD, search, AI generation, voting, comments)
  - [x] Places (CRUD, search, reviews, moderation)
  - [ ] Users (profile, preferences, saved items)
  - [ ] Tags, dietary filters, allergen filters
- [ ] WebSocket subscriptions (comments, feedback)
- [ ] Community moderation endpoints (flag, verify, update info)
- [ ] Health check endpoints
- [ ] Unit tests for all services/resolvers (Jest + Supertest)
- [ ] Lint/type check scripts

---

## 3. 📱 Mobile App (Expo + React Native)
- [ ] Initialize Expo app with TypeScript
- [ ] Set up expo-router for navigation
- [ ] Configure Apollo Client (GraphQL)
- [ ] Integrate GraphQL Codegen for typed hooks
- [ ] Implement onboarding slideshow
- [ ] Bottom tab navigation:
  - [ ] Explore (AI/trending recipes)
  - [ ] Map (GF places nearby)
  - [ ] Scan (ingredient input for AI recipe)
  - [ ] Community (feed, comments)
  - [ ] Account (login, preferences, saved)
- [ ] Recipe features:
  - [ ] Add/view recipes (user + AI)
  - [ ] Upload images, set tags, difficulty, nutrition
  - [ ] Comments, ratings, voting
  - [ ] Filter/search (ingredients, category, allergens, etc.)
  - [ ] Save favorites
- [ ] Map features:
  - [ ] Interactive map (restaurants, groceries, etc.)
  - [ ] Filters (type, rating, distance, kitchen type)
  - [ ] Place details (score, address, reviews, images)
  - [ ] Community moderation (flag/update info)
- [ ] Offline mode (recipes, maps)
- [ ] Local caching
- [ ] Real-time updates (comments, feedback)

---

## 4. 🤖 AI & Personalization
- [x] Integrate AI for recipe generation (OpenAI/custom model)
- [ ] Context-aware prompts (allergen history, likes/dislikes)
- [ ] Feedback loop (votes, comments, tag interactions)
- [x] Daily AI Recipe of the Day
- [ ] Sentiment analysis on comments
- [ ] Adaptive suggestions

---

## 5. 🧱 Shared Packages
- [ ] `@foodguard/types` (shared types/interfaces)
- [ ] `@foodguard/utils` (shared utilities)
- [ ] Shared GraphQL fragments/types

---

## 6. 🚀 Deployment & Infrastructure (AWS + CDK)
- [ ] Set up AWS CDK (TypeScript)
- [ ] Define infrastructure (RDS, ECS/EC2, S3, CloudFront, Secrets Manager)
- [ ] Configure CI/CD (GitHub Actions)
- [ ] Lint, test, build, deploy steps
- [ ] Preview environments
- [ ] Health check scripts

---

## 7. 🧪 Testing & Quality Assurance
- [ ] Enforce TDD (unit tests before code)
- [ ] Ensure test coverage for all services/resolvers
- [ ] Linting and formatting checks
- [ ] Type checking (strict)
- [ ] End-to-end tests (mobile + backend)
- [ ] Security checks (auth, data validation)

---

## 8. 💡 Future Enhancements (Optional)
- [ ] Barcode scanner for packaged products
- [ ] Nutrition & macro tracking
- [ ] Social graph (follow users, timelines)
- [ ] Offline caching for map locations
- [ ] ChatGPT-based meal planning co-pilot
- [ ] Local notifications (new recipes/reviews) 