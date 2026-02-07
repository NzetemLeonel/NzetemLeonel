# How Routing Works in Next.js 🛣️

One of the coolest features of Next.js is **Folder-based Routing**. You don't need a complex configuration file to create new pages; you just use folders!

### The Rule
Every folder you create inside `src/app/` that has a file named `page.tsx` inside it becomes a URL on your website.

### Example from our Project:

1.  **Home Page**:
    - Location: `src/app/page.tsx`
    - URL: `http://localhost:3000/`

2.  **Patient Dashboard**:
    - Location: `src/app/patient/page.tsx`
    - URL: `http://localhost:3000/patient`

3.  **Doctor Dashboard**:
    - Location: `src/app/doctor/page.tsx`
    - URL: `http://localhost:3000/doctor`

4.  **Admin Dashboard**:
    - Location: `src/app/admin/page.tsx`
    - URL: `http://localhost:3000/admin`

### Why is this good?
- **Organization**: It keeps your code very tidy. Everything related to the "Patient" part of the app is now in the `src/app/patient` folder.
- **Simplicity**: You can see exactly what pages your website has just by looking at the folder list!

---

### 🧠 Quiz for You!
If you wanted to create a page for **"Settings"** that you can see at `http://localhost:3000/settings`, what folder and file would you create?

*(Answer: Create a folder named `settings` inside `src/app/` and put a `page.tsx` inside it!)*
