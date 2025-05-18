# New things I learned
1. Custom colors and fonts
    - In Tailwind CSS V4 we have to use `@theme` in the index.css file
        ```css
          --color-grey-900: hsla(213, 19%, 18%, 1); 
          --font-xl: 1.75rem;     /* 28px */
        ```
    - if the color already exists, then it will replace it with custom one
      ```jsx
        <button className="bg-grey-900"> Grey button<button/>
      ```
    - font syntax
      ```jsx
        <button className="text-(length:--font-xl)"> Grey button<button/>
      ```
      