# The Healthful Pantry!

## Table Of Contents

-   [General Info](#general-info)
-   [Set Up](#set-up)
-   [Technologies Used](#technologies-used)
-   [User Stories](#user-stories)
-   [Process Work](#process-work)
-   [Status](#status)

## General Info

The Healthful Pantry is a fullstack MERN app that strives to provide users with food allergies, intolerances and restrictive diets a single place to find recipes that fit their nutritional needs.
[Visit the live app here.](https://thehealthfulpantry.herokuapp.com/)

## Set Up

1. Fork and Clone this respository to your local machine
2. Install dependencies and set up your database.
3. Open the directory in your text editor of choice to view.
4. Set up a backend database similar to [our backend](https://github.com/ga-avery/healthful-kitchen-backend) or clone that server to run both repos locally.

## Technologies Used

-   React
-   Material-UI
-   Bootstrap
-   Express
-   Axios

## User Stories

1. As a user, I want to search recipes based on my specific nutritional needs to alleviate stress that comes with my specific medical condition(s).
2. As a user I want to see a breakdown of any recipes that meet my medical requirements to confirm my dialy nutritional needs are being met.
3. As a user I want to be able to generate a shopping list from selected recipes to compare what I have at home to what I need.

![Search Page Screenshot](/src/img/search-screenshot.png)

## Process Work

1. Plan out necessary components and determined data needs for the project.
2. Create wireframes for each page and set up routing.
3. Set up user authentication for restricted routes.
4. Build forms that feed into axios calls to the backend server with data needed for third-party API calls.
5. Style pages with return data.
6. Test integration with the backend

### Wireframes

#### Landing Page Wireframe

![Landing Page Screenshot](/src/img/landingpg-screenshot.png)

#### Details Page Wireframe

![Details Page Screenshot](/src/img/detailspg-screenshot.png)

## Known Issues

Due to the vast amounts if data received by the Spoonacular API, the backend handles all calls to the API and sends the return data to the frontend for rendering without saving any data unless expressly requested by the user. This required certain variables be set at the root level to then be passed up and down the app as required.

An example of this can be seen in App.jsx where the variable allRecipes and its mutator setAllRecipes() are defined and their state set to an empty array before being passed down to the Search.jsx component.

## Status

In Progress 👩🏽‍💻
