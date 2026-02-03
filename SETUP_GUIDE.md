# TalkMeetDokta: Local Setup Guide 🚀

Welcome! This guide is designed to help you set up the **TalkMeetDokta** platform on your own computer, step-by-step. Since you're learning, we'll explain why we're doing each step.

## 1. Prerequisites (The Tools You Need)

Before we start, you need to install these three tools:

1.  **Node.js**: This is the "engine" that runs our code.
    - [Download it here](https://nodejs.org/). Choose the **LTS** version.
2.  **VS Code**: This is the "editor" where you will write your code.
    - [Download it here](https://code.visualstudio.com/).
3.  **Docker Desktop** (Easiest way to run a Database): We need a database to store our users and appointments.
    - [Download it here](https://www.docker.com/products/docker-desktop/).

---

## 2. Setting Up the Project

Once you have the tools, follow these steps:

### Step 1: Open the Project in VS Code
- Open VS Code.
- Go to `File > Open Folder` and select the `talkmeetdokta` folder.

### Step 2: Install Dependencies
Open the terminal in VS Code (Press ``Ctrl + ` `` or go to `Terminal > New Terminal`) and type:
```bash
npm install
```
*Why? This downloads all the "libraries" (like Next.js and Tailwind) that our project needs.*

### Step 3: Set Up the Database
Create a file named `.env` in the root of your project and add this line:
```env
DATABASE_URL="postgresql://jules:password@localhost:5432/talkmeetdokta?schema=public"
```
*Note: We will help you configure a real database as we progress.*

### Step 4: Generate the Prisma Client
In your terminal, run:
```bash
npx prisma generate
```
*Why? This allows your code to "talk" to the database using the models we defined (Patient, Doctor, Admin).*

---

## 3. Running the Project

Now, let's start the application! In your terminal, run:
```bash
npm run dev
```

- Open your web browser and go to: `http://localhost:3000`
- You should see the welcome page!

---

## 4. Troubleshooting

- **npm command not found**: Make sure you installed Node.js correctly.
- **Port 3000 already in use**: This means another app is running. You can stop it or restart your PC.

Next up, check out the `PROJECT_STRUCTURE.md` file to understand how the code is organized!
