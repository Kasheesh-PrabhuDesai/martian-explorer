# IDEA BEHIND THE REACT APP

The goal of the app is to display the mars photos clicked by curiosity rover depending on the earth date
chosen by the user on the home page.

# FRONTEND FRAMEWORK AND LANGUAGE USED FOR CODEBASE

React + Typescript

# CODE STRUCTURE

Modular react folder structure has been used. The structure is as follows

1. /src/components - Holds all reusable react components organized as per the function the component renders on the screen. For ex PhotoCarousel renders carousel of mars photos

2. /src/pages - Holds all the pages for the react router component to route to

3. /src/services - Holds the async api call to fetch photos from NASA open api.

4. ./src/secrets - Holds the secret NASA API KEY

5. ./src/utils - Holds the utils functions

# IMPORTANT DECISIONS TAKEN IN DUE COURSE OF THE APP

1. The earth date is the only input the user requires to search for photos. Reason behind this is that on certain days photos do not exist for all the different type of cameras available.

2. On initial load earth date is the date on which you visit the app. But subsequently, on selection of earth date, it is stored in the local storage. The reason behind this is to make the user aware of the date last chosen when the user clicks on search again button.
