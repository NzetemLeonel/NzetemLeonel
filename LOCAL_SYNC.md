# How to get this code onto your PC 💻

Since we are working together in this online environment, you need to "Sync" or download this code to your local machine to run it in your VS Code.

### Option 1: Download as ZIP (Easiest)
1.  On the GitHub page of this project, click the green **"<> Code"** button.
2.  Select **"Download ZIP"**.
3.  Extract the ZIP file on your computer.
4.  Open that folder in **VS Code**.

### Option 2: Using Git (Professional way)
If you have Git installed, open your terminal (Command Prompt or PowerShell) and type:
```bash
git clone https://github.com/NzetemLeonel/talkmeetdokta.git
```
*(Note: Replace the link with your actual repository link)*

---

## After you have the files on your PC:

1.  Open **VS Code**.
2.  Open the folder where you saved the files.
3.  Open the terminal inside VS Code (``Ctrl + ` ``).
4.  Run these commands in order:
    ```bash
    npm install
    npx prisma generate
    npm run dev
    ```

Now, every time I make a change for you, you can see how I did it and try to do the same on your PC!
