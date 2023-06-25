=============== Start ===========================

1. Add Material UI

   yarn add @mui/material @emotion/react @emotion/styled
   yarn add @mui/icons-material

2. Add Router Dom
   yarn add react-router-dom

3. Add Simple bar dependency
   yarn add react-pro-sidebar

4. For form handling
   yarn add react-hook-form

5. Add Extra helper dependency
   yarn add lodash dayjs

<!-- ==================================================================== -->

For deployment on github

1. Add Dev-Dependency
   npm install gh-pages --save-dev

2. Open the package.json file in a text editor and add this line

   "homepage": "https://{username}.github.io/{repo-name}"

3. Add deployment scripts to the package.json file
   "build": "npm run build",
   "deploy": "gh-pages -d build",

4. Configure GitHub Pages
   4.1 Navigate Settings -> Code and automation -> Pages
   4.2 Configure the "Build and deployment" settings like this:
   Source: Deploy from a branch
   Branch:
   Branch: main
   Folder: /(root)
   Click on the "Save" button

5. yarn build and yarn deploy

<!-- ==================================================================== -->
