# Understanding the Project Structure 📂

As a learner, the most confusing part is often "Where does this piece of code go?". Here is a map of our project:

## 📁 Root Directory
- **`package.json`**: The manifest of your project. It lists all the libraries we are using and the "scripts" (like `npm run dev`) we use to run the app.
- **`tsconfig.json`**: Configuration for **TypeScript**. It tells the code how to check for errors.
- **`.env`**: (You created this) Stores "secrets" like your database password. **Never share this file!**

## 📁 `src/` (The Source Code)
This is where 99% of your work happens.

### 📁 `src/app/` (The Router)
Next.js uses "File-based Routing". This means every folder inside `app` becomes a URL on your website.
- **`layout.tsx`**: This is the "shell" of your website. Anything you put here (like a Navbar) will show up on **every** page.
- **`page.tsx`**: This is the Home page (`/`).
- **`globals.css`**: Where we store our global styles and Tailwind configurations.

## 📁 `prisma/` (The Database)
- **`schema.prisma`**: This is the **Blueprint** of your database. When you want to add a new "table" (like `Appointments` or `Prescriptions`), you define it here.
- **`prisma.config.ts`**: Tells Prisma where to find your database.

## 📁 `public/`
Used for static files like images (your logo) or fonts.

---

## 🚀 Key Concept: "Components"
As we build the Patient and Doctor portals, we will create a `src/components/` folder.
- A **Component** is a small, reusable piece of UI (like a Button, a Header, or a Form).
- We build big pages by combining these small components.

Ready to start coding? Check out the next guide!
