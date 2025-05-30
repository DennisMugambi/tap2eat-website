# How to Deploy Tap2Eat Website to GitHub Pages

This guide will walk you through deploying your Tap2Eat website to GitHub Pages step by step.

## Part 1: Prepare Your Files

### Download Your Project
1. In Replit, go to the file explorer (left sidebar)
2. Click the three dots menu next to "Files"
3. Select "Download as ZIP" 
4. Save the ZIP file to your computer
5. Extract the ZIP file to a folder

### Clean Up for Static Deployment
Before uploading, you only need these folders and files:
- `client/` folder (contains your website)
- `attached_assets/` folder (contains your logo)
- `.github/` folder (contains deployment settings)
- `package.json`
- `vite.config.ts`
- `tailwind.config.ts`
- `tsconfig.json`
- `postcss.config.js`
- `components.json`

You can delete these (they're only needed for full-stack development):
- `server/` folder
- `shared/` folder
- `drizzle.config.ts`

## Part 2: Create GitHub Repository

### 1. Create GitHub Account
- Go to [github.com](https://github.com)
- Click "Sign up" if you don't have an account
- Follow the registration process

### 2. Create New Repository
- Click the "+" icon in top right corner
- Select "New repository"
- Repository name: `tap2eat-website`
- Description: "Tap2Eat school meal program website"
- Make it **Public**
- Check "Add a README file"
- Click "Create repository"

## Part 3: Upload Your Files

### Method 1: Web Upload (Easiest)
1. In your new repository, click "uploading an existing file"
2. Drag and drop all your project files
3. Wait for upload to complete
4. Scroll down and write commit message: "Add Tap2Eat website files"
5. Click "Commit changes"

### Method 2: GitHub Desktop (Alternative)
1. Download GitHub Desktop from [desktop.github.com](https://desktop.github.com)
2. Clone your repository
3. Copy your files into the cloned folder
4. Commit and push changes

## Part 4: Enable GitHub Pages

1. In your repository, click "Settings" tab
2. Scroll down to "Pages" in left sidebar
3. Under "Source", select "GitHub Actions"
4. GitHub will automatically detect the workflow file and start deployment

## Part 5: Update Build Configuration

You'll need to modify one file for GitHub Pages to work correctly:

### Update package.json
Add this script to your package.json file:
```json
"build-static": "vite build --base=/tap2eat-website/"
```

### Update GitHub Action
In `.github/workflows/deploy.yml`, change the build command to:
```yaml
- name: Build project
  run: npm run build-static
```

## Part 6: Access Your Website

After deployment completes (usually 2-5 minutes):
- Your website will be live at: `https://yourusername.github.io/tap2eat-website/`
- Replace "yourusername" with your actual GitHub username

## Troubleshooting

### If images don't load:
- Make sure the `attached_assets` folder is uploaded
- Check that image paths are correct

### If deployment fails:
- Check the "Actions" tab in your repository
- Look for error messages in the build log
- Ensure all required files are uploaded

### If styling is broken:
- Make sure `tailwind.config.ts` and `postcss.config.js` are uploaded
- Check that the base path is set correctly

## Making Updates

To update your website:
1. Make changes to your files locally
2. Upload the changed files to GitHub
3. GitHub Actions will automatically rebuild and deploy

## Custom Domain (Optional)

To use your own domain:
1. In repository Settings → Pages
2. Add your custom domain
3. Configure DNS settings with your domain provider

---

Need help? The website includes contact information for Tap2Eat support.