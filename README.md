# Interactive rating component solution

## Table of contents

- [Overview](#overview)
   - [Screenshot](#screenshot)
   - [Installation](#installation)
   - [Built with](#built-with)
   - [What I learned](#what-i-learned)
   - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### Screenshot

![](./screenshots/interactive-rating-component-desktop.png)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anamaydev/interactive-rating-component.git
   cd interactive-rating-component
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   
### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- Tailwind CSS V4
- React - JS library


### What I learned

1. Custom variables and usages
    - In Tailwind CSS V4 we have to use `@theme` in the index.css file
        ```css
        --color-grey-900: hsla(213, 19%, 18%, 1); 
        --font-xl: 1.75rem;     /* 28px */
        --spacing-200: 1rem;    /* 16px */
        ```
    - if the color already exists, then it will replace it with custom one
      ```jsx
      <button className="bg-grey-900"> Grey button<button/>
      ```
    - font syntax
      ```jsx
      <button className="text-(length:--font-xl)"> Grey button<button/>
      ```
    - padding
      ```jsx
      <button className="p-(--spacing-200)"> Grey button<button/>
      ```
    - gap
      ```jsx
      <div className="flex gap-(--spacing-200)">
         {ratingElement}
      </div>
      ```

2. Close modal upon clicking background
   ```jsx
    const backgroundRef = useRef(null);
      
    function closeModal(e){
      {/* e.target --> element which triggered the event */}
      {/* e.currentTarget --> element where the event is linked to */}
      if(e.target === backgroundRef.current){
        setOpenRatingModal(false);
    }
   
    <div ref={backgroundRef} onClick={closeModal}></div>
   }
   ```

3. deployment using gh-pages
    - Step 1: install `gh-pages`
       ```bash
       npm install --save-dev gh-pages
       ```
    - Step 2: add to vite.config.js
      ```js
      import { defineConfig } from 'vite';
      import react from '@vitejs/plugin-react';
 
      export default defineConfig({
         base: '/my-repo-name/', // 👈 replace with GitHub repo name
         plugins: [react()], 
      });
      ```
    - Step 3: in package.json paste this in scripts
      ```json
      "script":{
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
      }
      ```

### Useful resources

- [Add Custom Colors in Tailwind CSS v4](https://www.youtube.com/watch?v=gfYJvTBu_sk) - This tutorial helped me understand how to create custom color in Tailwind CSS V4.

## Author

- @anamaydev - [https://github.com/anamaydev](https://github.com/anamaydev)