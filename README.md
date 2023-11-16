# Overview

This web app is a very simple pair maker. You can enter a bunch of names and it will give you everyone back except they are paired up in groups of 2.

I made this project in an attempt to laern the react library for javascript. I made the scaffoloding using the create react app build tool and then I played with it untill I was able to produce the result which is this very simple pair generator.

React ended up being more difficult than I originally anticipated so this web app needs a lot more work but this is my mnp (Minimal Viable Product) or the simplest version of my app that I am comfortable sharing with others.

{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](https://youtu.be/ZGt_nab4TXg)

# Web Pages

When you first load into the web app you will notice a clunky text box that you can enter a name into and a button you can click to submit the name. When you do this the name appears in a list below. You may repeat this process over and over to generate a list of lots of names. At the bottom you can click a button to turn the names into pairs of names.

When you click this button it takes you to the second veiw of the page which displays all of the names in a similar list to the original except it shows two names linked together the names wrapped in quotes and the linking text "is with" between the names.

# Development Environment

I started the project by runnning __create react app__ from npx which built the scafolding for my app.

Then I used the __run react__ script that create react app made for me to run my app in my local server.

## Libraries
This web app was mainly built using __javascript__ and the __react library__.

There is a simple __html__ file that the react populates with __jsx__ or (html in javascript).

Lastly I styled the app using some simple __css__ which you will find next to there coresponding js files.

# Useful Websites

* [React Documentation](https://react.dev/)
* [React Tutorial on youtube](https://www.youtube.com/watch?v=xhjqVW1ETZ8&t=3933s)

# Future Work

* Style the page better (Bigger buttons, more organized lists, enhanced header and footer)

* Imporved functionality (Make the button submit on enter key press, when a name is submited it will keep you focused on the input)

* Implement multiple pages using react router