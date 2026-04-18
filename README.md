# Milestone 2: Where in the Whoniverse?

👩🏻‍💻 View an example of this section [here](https://github.com/kera-cudmore/Bully-Book-Club#bully-book-club-website)

Welcome to Where in the Whoniverse? 
This is an interactive front-end project using HTML, CSS and Javascript developed as part of the Code Institute Level 5 Diploma in Web Application Development.

The purpose of this website is to provide an interactive, location guessing game based on the BBC Series Doctor Who. The website will challenge users to identify iconic filming locations across the Earth powered by real world map data. 

Add an image of the finished site here. I like to use [amiresponsive](https://ui.dev/amiresponsive) to get an image of my site on all device sizes, and amiresponsive allows you to click links on the page and scroll, so each device can show a different element of your site.

Add a link to the live site here, for Milestone 1 this will be the GitHub Pages Link from when you deployed the site.

If you want to add optional [shields.io](https://shields.io) badges to your README, I like to add them to this section.

---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)
  * [Solved Bugs](#solved-bugs)
  * [Known Bugs](#known-bugs)


* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

👩🏻‍💻 View an example of a completed user experience section [here](https://github.com/kera-cudmore/Bully-Book-Club#user-experience-ux)

### User Stories

#### First Time Visitor goals
* As a First Time Visitor, I want to see a clear 'How to Play' guide when the page loads so that I can understand the game mechanics before starting my first round.

* As a First Time Visitor, I want to be able to easily identify the guess map and the 'Submit' button so that I can play the game without confusion.

* As a First Time Visitor accessing the site on my phone, I want the interface to stack vertically so that all the interactive elements remain accessible and nothing is obscured.

* As a First Time Visitor, I want to see a summary of my distance from the target and a calculated score after each guess. 

#### Returning Visitor goals
* As a Returning Visitor, I want a 'Play again' button that resets the game stateand picks a new random location.

* As a Returning Visitor, I want the game to remember my "Best Guess" (closest distance) from previous sessions so that I have a personal record to beat.

* As a Returning Visitor, I want the game to remember my "Theme" settings so that the app feels personalised to me every time I return.

## Design

👩🏻‍💻 View an example of a completed design section [here](https://github.com/kera-cudmore/earth-day-hackathon-2022#Design)

### Colour Scheme

Add all information about your colour scheme for your site here. You can explain why you choose the colours you did?

I like to include a palette of the colour scheme here, my favourite site for creating a colour palette is [coolors](https://coolors.co/), but there are lots of other sites that also do the same thing, like [ColorSpace](https://mycolor.space/?hex=%23F5F5F5&sub=1), [Muzli Colors](https://colors.muz.li/), [Adobe Colour Wheel](https://color.adobe.com/create/color-wheel) and [Canva](https://www.canva.com/colors/color-palette-generator/) to name a few.

### Typography

If you've imported fonts to use in your project, add some information about them here. You can include information like:

Why did you choose the font you have?
Is this an accessibly friendly font?
What weights have you included?

I also like to include an image of the fonts chosen as a reference.

[Google Fonts](https://fonts.google.com/) is a popular choice for importing fonts to use in your project, as it doesn't require you to download the fonts to use them.

### Imagery

Use this section to explain what sort of imagery you plan to use through your site.

### Wireframes
Wireframes were created using [Canva](https://www.canva.com)

#### ON PAGE LOAD

#### Desktop
<figure>
    <img src="assets/images/indexdesktop.png" width='800'
         alt="Desktop wireframe on page load">
    <figcaption>This shows how the app will load on desktop with two clear buttons "Start Game" and "How to Play"</figcaption>
</figure>



#### Mobile
<figure>
    <img src="assets/images/indexmobile.png" width='300'
         alt="Mobile wireframe on page load">
    <figcaption>This shows how the app will load on mobile using vertical stacking with two clear buttons "Start Game" and "How to Play"</figcaption>
</figure>


#### PLAYING THE GAME

#### Desktop
<figure>
    <img src="assets/images/gamedesktop.png" width='800'
         alt="Mobile wireframe on page load">
    <figcaption>This shows how the app will appear in 'play' mode, with the map on the left and all buttons/scoring on the right"</figcaption>
</figure>

#### Mobile
<figure>
    <img src="assets/images/gamemobile.png" width='300'
         alt="Mobile wireframe on page load">
    <figcaption>This shows how the app will appear in 'play' mode" keeping the map on the top of the stack and keeping buttons 'thumb friendly' for users on mobile.</figcaption>
</figure>


#### RESULTS DISPLAY
#### Desktop
<figure>
    <img src="assets/images/resultsdesktop.png" width='800'
         alt="Mobile wireframe on page load">
    <figcaption>This shows how the app will appear in 'results' mode, keeping consistent, with the map on the left and all buttons/scoring on the right"</figcaption>
</figure>

#### Mobile
<figure>
    <img src="assets/images/resultsmobile.png" width='300'
         alt="Mobile wireframe on page load">
    <figcaption>This shows how the app will appear in 'results' mode" keeping the map on the top of the stack and keeping buttons 'thumb friendly' for users on mobile.</figcaption>
</figure>



## Features

👩🏻‍💻 View an example of a completed user experience section [here](https://github.com/kera-cudmore/TheQuizArms#Features)

This section can be used to explain what pages your site is made up of.

### General features on each page

If there is a feature that appears on all pages of your site, include it here. Examples of what to include would the the navigation, a footer and a favicon.

I then like to add a screenshot of each page of the site here, i use [amiresponsive](https://ui.dev/amiresponsive) which allows me to grab an image of the site as it would be displayed on mobile, tablet and desktop, this helps to show the responsiveness of the site.

### Future Implementations

What features would you like to implement in the future on your site? Would you like to add more pages, or create login functionality? Add these plans here.

### Accessibility

Be an amazing developer and get used to thinking about accessibility in all of your projects!

This is the place to make a note of anything you have done with accessibility in mind. Some examples include:

Have you used icons and added aria-labels to enable screen readers to understand these?
Have you ensured your site meets the minimum contrast requirements?
Have you chosen fonts that are dyslexia/accessible friendly?

Code Institute have an amazing channel for all things accessibility (a11y-accessibility) I would highly recommend joining this channel as it contains a wealth of information about accessibility and what we can do as developers to be more inclusive.

## Technologies Used

👩🏻‍💻 View an example of a completed Technologies Used section [here](https://github.com/kera-cudmore/Bully-Book-Club#Technologies-Used)

### Languages Used

Make a note here of all the languages used in creating your project. For the first project this will most likely just be HTML & CSS.

### Frameworks, Libraries & Programs Used

Add any frameworks, libraries or programs used while creating your project.

Make sure to include things like git, GitHub, the program used to make your wireframes, any programs used to compress your images, did you use a CSS framework like Bootstrap? If so add it here (add the version used).

A great tip for this section is to include them as you use them, that way you won't forget what you ended up using when you get to the end of your project.

* [Canva](https://www.canva.com/online-whiteboard/wireframes/) - Used to create wireframes.

* [Git](https://git-scm.com/) - For version control.

* [Github](https://github.com/) - To save and store the files for the website.

* [VS Code](https://code.visualstudio.com/) - IDE used to create the site.

* [Google Fonts](https://fonts.google.com/) - Google fonts were used to import the 'Orbitron' and the 'Roboto' font into the project.

* [To WebP](https://towebp.io/) - Used to convert images to WebP format.

## Deployment & Local Development

👩🏻‍💻 View an example of a completed Deployment & Local Development section [here](https://github.com/kera-cudmore/TheQuizArms#Deployment)

### Deployment

Include instructions here on how to deploy your project. For your first project you will most likely be using GitHub Pages.

### Local Development

The local development section gives instructions on how someone else could make a copy of your project to play with on their local machine. This section will get more complex in the later projects, and can be a great reference to yourself if you forget how to do this.

#### How to Fork

Place instructions on how to fork your project here.

#### How to Clone

Place instructions on how to clone your project here.

## Testing
Please refer to [TESTING.md](TESTING.md) file for all testing carried out.

### Solved Bugs

| No | Feature | Issue | Fix |
| :--- | :--- | :--- | :--- |




## Credits

👩🏻‍💻 View an example of a completed Credits section [here](https://github.com/kera-cudmore/BookWorm#Credits)

The Credits section is where you can credit all the people and sources you used throughout your project.

### Code Used

If you have used some code in your project that you didn't write, this is the place to make note of it. Credit the author of the code and if possible a link to where you found the code. You could also add in a brief description of what the code does, or what you are using it for here.

### Content

Who wrote the content for the website? Was it yourself - or have you made the site for someone and they specified what the site was to say? This is the best place to put this information.

###  Media

If you have used any media on your site (images, audio, video etc) you can credit them here. I like to link back to the source where I found the media, and include where on the site the image is used.
  
###  Acknowledgments

If someone helped you out during your project, you can acknowledge them here! For example someone may have taken the time to help you on slack with a problem. Pop a little thank you here with a note of what they helped you with (I like to try and link back to their GitHub or Linked In account too). This is also a great place to thank your mentor and tutor support if you used them.