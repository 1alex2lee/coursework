# Computing 2 Submission Proforma

**CID:** 01703888

For each section, write a maximum of 200 words. 

## Brief
I am writing a website for a music school, to aid its transition to online learning.
On this website, there will be videos to watch and a comment section for users.
Users must log in to view the videos.

## Coding
This project will be mostly coded in functional programming style. Not all functions will be pure, and some will be asynchronous.
A static root provides the client side code and webpages, while server side code is run with Node.

## UX/UI
The UI is a like a generic website. A navigation bar sits at the top, and a navigation bar at the side allows the user to choose a video.
The video is the main part of the page. A comment section sits below it, and below that, is a textbox allowing the user to post a comment.
Accessibility was kept in mind when designing this website.

## Data
The comments are stored in one SQL database. A table exists for each video. In each table, there are columns for:
-User who posted the comment; -Comment written by the user.
After a user logs in, the login status and username is stored in the sessionStorage.

## Debugging
I used console.log extensively to figure out what function executes first and the value of each object at certain points.
I also used the accessibility, network and element tools in Firefox to debug some problems.
I wrote 2 property-based tests with Mocha, but I had trouble getting them working.

## Best Practice
All my code is well-commented, all functions and variables have suitable names, and my code follows a conventional style.
