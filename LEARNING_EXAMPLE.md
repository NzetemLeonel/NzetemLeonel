# Learning Example: Adding your first page 🛠️

Let's practice by adding a new page to our website called "About TalkMeetDokta".

### Step 1: Create the Folder
In Next.js, to create a new page at `/about`, we need a folder named `about` inside `src/app/`.

### Step 2: Create the `page.tsx`
Inside that new `about` folder, create a file named `page.tsx`.

### Step 3: Write the Code
Copy and paste this code into `src/app/about/page.tsx`:

```tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600">About TalkMeetDokta</h1>
      <p className="mt-4 text-gray-700">
        Our mission is to bring healthcare to every corner of Cameroon.
      </p>

      <Link href="/" className="mt-6 inline-block text-blue-500 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
```

### What did we just do?
1.  **`export default function...`**: This tells Next.js "This is the main part of this page".
2.  **Tailwind Classes**:
    - `p-8`: Adds "padding" (space) around the content.
    - `text-3xl`: Makes the text large.
    - `font-bold`: Makes the text bold.
    - `text-blue-600`: Sets the color to a specific shade of blue.
3.  **`<Link>` Component**: This allows users to move between pages without the whole browser reloading. It makes the app feel very fast.

### Check your work
If your server is running (`npm run dev`), go to `http://localhost:3000/about`. You should see your new page!

---

### Challenge for You! 🌟
Try changing the `text-blue-600` to `text-green-600` and see what happens to the title!
