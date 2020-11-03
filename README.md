# WebComponent-Angular-9
Sample WebComponent/CustomElement for Angular components using Angular Elements

# Start
* Clone the repository
* Run `npm install` to get the dependencies
* Source code is part of `src` folder.
* The project uses OMDN API to fetch posters. Please get an API key from [OMDB](http://www.omdbapi.com/).
* Update the API key in [`src/app/poster-widget/poster-widget.component.ts`](./src/app/poster-widget/poster-widget.component.ts)

# Preview
* Run `npm run serve` to generate the local url for preview

# Build
* Run `npm run build` to build the angular elements outpur.
* Post build, output files will be generated in the `dist/WebComponentAngular9` folder.
* Use the generated files in the below your HTML to consume.
    * polyfills-*.js
    * vendor-*.js
    * runtime-*.js
    * styles-*.js
    * main-*.js

