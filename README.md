# Web Application - Text Editor (PWA)

## Description & User Story

This repository houses the code utilized in the creation of a text editor web app that runs in the user's browser. The initial code is sourced from [https://github.com/coding-boot-camp/cautious-meme](https://github.com/coding-boot-camp/cautious-meme) & was updated to reflect the following user story & acceptance criteria:

- **User Story:**
  - AS A developer
  - I WANT to create notes or code snippets with or without an internet connection
  - SO THAT I can reliably retrieve them for later use

- **Acceptance Criteria:**
  - GIVEN a text editor web application
  - WHEN I open my application in my editor
    - THEN I should see a client server folder structure
  - WHEN I run `npm run start` from the root directory
    - THEN my application should start up the backend and serve the client
  - WHEN I run the text editor application from my terminal
    - THEN my JavaScript files have been bundled using webpack
  - WHEN I run my webpack plugins
    - THEN I have a generated HTML file, service worker, and a manifest file
  - WHEN I use next-gen JavaScript in my application
    - THEN the text editor still functions in the browser without errors
  - WHEN I open the text editor
    - THEN IndexedDB has immediately created a database storage
  - WHEN I enter content and subsequently click off of the DOM window
    - THEN the content in the text editor has been saved with IndexedDB
  - WHEN I reopen the text editor after closing it
    - THEN the content in the text editor has been retrieved from our IndexedDB
  - WHEN I click on the Install button
    - THEN I download my web application as an icon on my desktop
  - WHEN I load my web application
    - THEN I should have a registered service worker using workbox
  - WHEN I register a service worker
    - THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
  - WHEN I deploy to Render
    - THEN I should have proper build scripts for a webpack application

This application is fully functional within the user's browser and offers the option of being downloaded as a desktop application for offline use. Simply clone this project and run 'npm run start' within a root-level integrated terminal and begin using the text editor!

Live Deployment: https://pwatexteditor-1.onrender.com/Links to an external site.






![Screenshot 2024-03-24 at 10 18 09 PM](https://github.com/nrasch86/PWATextEditor/assets/145396887/a51aedba-a78d-424f-ae62-d27bb0454f69)
