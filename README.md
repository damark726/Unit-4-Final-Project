# Project Overview
Unit-4-Final-Project: mangAnime (Fyi, it is the words "manga" and "anime" put together as one word. And also another fyi for those who don't know, "manga" is basically just japanese comics, and "anime" basically just japanese cartoons. But the cartoons aren't just for children. There are anime made specifically for all types of audiences.)

## Project Description

My project is going to be refactoring my unit 2 AnimeTracker app. My unit 2 project was an app that helps you track anime you have watched and how many episodes you have watched. I used the Kitsu API, which allowed me to access the titles, synopses, total episodes, and a huge amount of other data for thousands of anime series out there. The user of my app would be able to enter a search query and get back results based on their search. They could then add specific shows to their favorites list, which will be added to a database, for easier reference. And lastly, they will also be able to either edit the details of the anime or even delete it outright. That was my unit 2 project. For this final project, I want to go bigger and actually make a site that I could make public and real people could actually use. I want to do everything I did in unit 2, but added some stuff. Right off the bat, the first main thing I am going to add is manga series. For unit 2, I only had anime shows, no manga. So this time around, I want to have both anime and manga, making the site way more robust and have a lot more content. Another difference is that I want to use React.js for the font-end this time. I want to add a bunch of different routes with react-router-dom to make the site more easy to navigate and more intuitive. I also have gotten much, much better with CSS and discovered some cool new tricks with CSS grid and flexbox since unit 2, so I want to style my app way more than I did in unit 2. My unit 2 project did have a searchbar, but the results were only limited to 10 (or 20, I can't remember) results. This time around I definitely want to add pagination because is almost a necessity for any realy website today. My unit 2 project did not have a "show" page for when you clicked a speific show, so for this project I also want to definitely have that because that is also necessary to have. Lastly, the one HUGE thing I need and the thing I suspect to give me the most trouble will be user authentication. I really need to have user auth if I plan to make a website for the public to use. Each user should be able to add thier favorite anime and manga series and keep track of the episodes/chapters they're on, their status (i.e. completed, plan to watch, currently watching, etc.), and also they're overall rating of the show.

Here is a link to a website (https://myanimelist.net/) that is similar to what I am trying to create.

## MVP 

* Have all 4 basic CRUD actions working (get/read, post/create, put/update, destroy/delete).
* Have user auth so each specific user who registers will be able to have their own favoerites list.
* Successfully make calls to the Kitsu.io API for data on all things manga/anime.
* Have all my files and folders organized and structured in a MVC pattern.
* Successfully deploy to heroku.

## POST MVP

* Style my app very extensively.
* Use multiple animations.
* Have it be responsive.

## Wireframes

[01](http://res.cloudinary.com/damark726/image/upload/v1519927400/20180301_125837_owtoix.jpg)

[02](http://res.cloudinary.com/damark726/image/upload/v1519927400/20180301_125820_mirrne.jpg)

[03](http://res.cloudinary.com/damark726/image/upload/v1519927400/20180301_125804_kxpdui.jpg)

## Functional Components 
| Component | Priority | Estimated Time | Time Invetsted |
| --- | :---: |  :---: | :---: |
| Successful API calls | H | 1hrs| 1hrs |
| Styling | L | 12hrs| 10hrs |
| Back-end set-up (not including user auth) | H | 8hrs| 10hrs |
| Getting data to render on screen using React | H | 8hrs| 6hrs |
| Successful management of sate/props and correctly using React Router for my routes | H | 12hrs| 16hrs |
| User Auth | M | 12hrs| 32hrs |
| **Total** | **--** | **53hrs** | **75hrs** |

## Technologies Used

* React.js for front-end/views and CSS grid and flexbox for styling.
* Node.js and express.js for the back-end.
* PostgresQL for database.
* Kitsu.io API
* Nodemon, axios, bcryptjs, body-parser, cookie-parser, dotenv, express, express-session, method-override, morgan, passport, passport-loacl, react, react-dom, react-router-dom, react-scripts, and pg-promise were also the dependencies used.

## Change Log

In my head, I originally had an idea for how I wanted to style my site and what information I wanted to display.  However user auth took a whole 3 days to finish, so I did not have enough time to implement all that I wanted to do for my styling and for the information I pulled from my api. That was the biggest disappointment I had for this project. 

## Issues and Resolutions

**ERROR**: Page rendering just a blank object, e.g. {}, or an object with errors inside of it.                                
**RESOLUTION**: Console logging in many places to decipher step by step what is happening.

**ERROR**: Syntax error at or near "WHERE".                                
**RESOLUTION**: Syntax error. Had a comma before the "WHERE".

**ERROR**: React not able to read null or undefined data.
**RESOLUTION**: Constantly console logging "this" or "this.state" to see exactly what is happening at all points during my site.

**ERROR**: I was able to register and login, however once I click on a different link, the user automatically logs out. This error was what took me 3 days to fiugre out an fix. The first picture below was my problem, the second picture is the solution. Apparetnly I spent 3 whole days fixing a problem that only took re-arranging one line to solve. The first line in the first picture needed to be below the other two, as shown in the second picture.

<img width="797" alt="screen shot 2018-03-01 at 1 09 27 pm" src="https://git.generalassemb.ly/storage/user/8797/files/5d472848-1d52-11e8-9173-66c0c67bcb63">

<img width="790" alt="screen shot 2018-03-01 at 1 09 11 pm" src="https://git.generalassemb.ly/storage/user/8797/files/4d6e4398-1d52-11e8-90b8-218795ae96bc">
