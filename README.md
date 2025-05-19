# New things I learned
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