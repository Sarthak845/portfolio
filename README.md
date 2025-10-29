portfolio

Getting started
---------------

Run the dev server and open the app in your browser:

For Command Prompt (recommended on Windows to avoid PowerShell execution policy issues):

```powershell
cd path\to\portfolio
npm install
cmd /c npm run dev
```

For PowerShell (if you prefer PowerShell and get an execution policy error):

```powershell
# Run PowerShell as Administrator once and allow remote signed scripts
Set-ExecutionPolicy RemoteSigned

# then in your project folder
npm install
npm run dev
```

Dev server URL
--------------

This project configures Vite to run on port 5173. After starting the dev server you should see:

http://localhost:5173/

If the port is already in use Vite will select a different port and print the Local URL in the terminal.
