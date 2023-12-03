# FEDassignment1
FED assignment 1
Loh Sze Kye S10257172B 
# Supercell website revamp

With a total revenue of approximately 1.87 billion USD and a reported
666.31 million USD for its Earnings Before Interest, Taxes, Depreciation, and Amortization (EBITDA) in the year 2022 (Supercell Annual Revenue 2022 | Statista, 2023). However in the recent years, Supercell has been losing players and has been dropping in popularity around the world. Agreed that Supercell's games have good early, mid and late retention cycles but there are other factors such as the community and listening to the community also play a role in the retention of players. For example, in the latest Clash Royale update titled "The update for losers". The community got mad because most felt that the update did not benefit them but rather, made the game even more pay to win which means that players needed to pay even more money in order to get stronger and better units so as to defeat opponents in-game (Orange Juice Gaming, 2023). Other observed potential problems could be that new players are matched against veteran players due to a possible shortage of new players. As such new players may quit the game due to what they believe is unfair matchmaking. At about 13 years old, there is much potential in the company and its games, but greater international recognition and more players are needed to take the company to greater heights. To do so, I believe that giving the website a refreshing new look is one of the best ways to achieve the comapny's goal. 

 
## Design Process
 
 - To attract more players; currently Supercell is more popular amongst younger audiences because of their more popular games but could overshadowed by other more popular games due to external factors such as local news and peer pressure. Some examples are Valorant ( Cue, 2023 ) and Mobile Legends Bang Bang ( Cue, 2023 a). Additionally, the maker must also be made known to the other age groups so that people know that Supercell is not only known for one good game but many.

 - Current website design lacks information about what
each game is about, static website design as well as the lack of a vibrancy of colours makes it unattractive.

- As a an existing player/ newcomer, I would like to have the option to log in to my account to get access to features such as player support.

- As an existing player, I would like to be able to show that the maker of the games that I play has modern user interfaces and look attractive so as to convince my friends to join me in the games that I play by showing them that the maker keeps up with the times. 

- As a fresh graduate looking for career opportunities, I would like to know whether Supercell has any open positions and in which countries are these positions in. 

- As a student conducting research about the company, I would like to know more about the company by looking through their website. 


- Link to all wireframes (both implemented and unimplemented; there is no wireframe for the log in page): https://www.figma.com/file/z3MgBGIYO3AhtqMhQwLNgD/Supercell?type=design&node-id=0%3A1&mode=design&t=VKYcRT8xsiYZJXkt-1

- Alternatively, you can find the wireframes in the wireframes folder. 

## Features
 
### Existing Features
- Game slideshow - allows users to scroll through the image slideshow to look at the games and read a brief summary of the game.
- To the surface button at the bottom of every webpage excluding the sign in page so that the user can easily scroll to the top.\
- Hamburger menu - A neater containment of the things in the header for smartphones.
- Chatbot - Allows users to chat with it to find out more about the comppany. But due to a lack of AI it does not work. 
- Log In page - Allows the user to log in to access features such as player support,  the Supercell Store, and other features. 


### Features Left to Implement/ Additional features to be implemented in the future
- Revamp each game's webpage and include a section where viewers can see what in-game characters look like, and maybe collaborate with Google Play Games to create a demo environment for viewers to have try out the game. (Google Play Games is on PC, mobile and tablet, hence the choice of possible collaboration). 
- Changing the language of the text on the website.
- A section of the website to feature community artworks.
- A working AI for the chatbot.
- A staff portal for employees also through the sign in page by determining the ID input. 
- A webpage within the website to highlight content creators. (Mobile Legends Bang Bang's websitehas something like this in place.)


## Technologies Used

- [[Adobe_Photoshop](https://www.adobe.com/sg/products/photoshop.html)
    - Photoshop was used to format the images used in the website that was created.
    - The patterned image used as the background of the hero section of games.html was also created using multiple images put together using Photoshop.
    How the patterned image was created:
    In the photoshop file, DP_Assg1_Png_Loh Sze Kye, I went to File -> Automate -> Contact Sheet II… and then I selected the folder, Images used for contact sheet. For the document section, the unit selected is inches, width: 12, height: 8, resolution: 300 pixels/ inch, colour profile: sRGB IEC61966-2.1, unchecked flatten all layers, mode: RGB colour, bit depth: 8-bit. For the thumbnails section, place: across first, columns: 8, rows: 8, unchecked use auto-spacing, vertical spacing: 0 inches, horizontal spacing: 0 inches, rotate for best fit was also unchecked. The use filename as caption section was also unchecked. Photoshop then loaded all 64 images in the folder into the contact sheet following the specifications set. In the contact sheet, I mixed up some of the image’s positions to make it more even in a way, and made their sizes look more even. The contact sheet was then saved, and I then went to Edit -> Define Pattern and then saved the contact sheet as a pattern, under the name pattern.psd. In a new Photoshop file, Contact-Sheet-001, I clicked on the create new fill or adjustment layer, third button to the left of the trash bin button. Then selected Pattern and then selected the pattern that I created. The angle selected is 30 degrees and the scale was 69%, link with layer was also checked. ]
- [[Figma](https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1260051685177518068)
    - Figma was used to create the wireframes.]
- [[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - The backbone of the website's structure.]
- [[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - CSS was used to provide styling to the html elements of the website created.]
- [[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - JavaScript was used to script the features of the website.]
- [[Visual Studio Code](https://code.visualstudio.com/)
    - Visual Studio Code was the selected source code editior used to code the website.]



## Testing

- Log in page
    - Go to the "Log In page" by clicking on the ID icon in the top right hand corner.
    - ID can only be made of alphanumeric characters.
    - Password must be more than 8 characters long and must ony contain alphanumeric characters.
    - Both Supercell ID (username) and password are required. 
    - Submitting invalid passwords or IDs will result in an alert by the page. A valid submission by right should take the user to the home page. (Bug: unresolved, log in page will just reload instead of taking user to the home page upon a successful log in. )

- Brief summary about each game 
    - Go to the Games page
    - Use the arrow keys or navigation buttons to navigate between the games.
    - Navigation should be seamless regardless of direction chosen.
    - Google Play Store and Appstore links should directly take user to the respective pages on the Google Play Store and Appstore.

- Current website works best on laptop screens that are fully maximised and screen sizes which are less than 576px which is a smartphone in landscape mode. 

- Another interesting bug: an uncaught type error is shown in the console whenever I run the html files, it is about the javascript used in games.html
The error; Uncaught TypeError TypeError: Cannot read properties of undefined (reading 'style')
    at imgShow (c:\FED\git\FEDassignment1\assignment.js:45:26)
    at <anonymous> (c:\FED\git\FEDassignment1\assignment.js:17:1)

- The external CSS file has been passed through the official (JigSaw) validator and reported no issues.

- All html files have been passed through the W3C validator with no fatal issues however with a lot of warnings about certain sections which lack headings and errors with the filenames having a space in the href and src attributes and the width attribute having a percentage sign in the img tags. 


## Credits

### Content
- The content for index.html was from Supercell's home page.
- The content for games.html was from Supercell's for media and games page as well as the various artists on Pinterest. 
- The content for support.html were screengrabs from videos on Supercell's official YouTube channel.
- The content for about us.html was from Supercell's about us page and ikka's long texts.
- The content for our offices.html was from Supercell's careers page and the various pages under it.
- The content for sign in.html was from Supercell's supercell ID page.

### Media
- The photos used in this site were obtained from (APA 7th Edition)
    - Ilkka’s Long Texts × Supercell. (n.d.). Supercell. Retrieved May 19, 2023, from https://supercell.com/en/ilkkas-long-texts/ 
    - For Media × Supercell. (n.d.). Supercell. Retrieved May 19, 2023, from https://supercell.com/en/for-media/
    - Supercell. (n.d.). Supercell. Retrieved May 19, 2023, from https://supercell.com/en/ 
    - Pinterest. (n.d.). Pinterest. https://www.pinterest.com/
    - Supercell ID × Supercell. (n.d.). Supercell. https://supercell.com/en/supercell-id/
    - Clash Mini reaches Beta & more Clash News. (n.d.). Supercell. https://supercell.com/en/news/clash-mini-reaches-beta-more-clash-news/7563/
    - Joining Supercell × Supercell. (n.d.). Supercell. https://supercell.com/en/careers/joining-supercell/
    - About Us × Supercell. (n.d.). Supercell. https://supercell.com/en/about-us/
    - Hay day. (n.d.). Supercell. https://supercell.com/en/games/hayday/
    - Clash of Clans. (n.d.). Supercell. https://supercell.com/en/games/clashofclans/
    - Boom Beach. (n.d.). Supercell. https://supercell.com/en/games/boombeach/
    - Clash Royale. (n.d.). Supercell. https://supercell.com/en/games/clashroyale/
    - Careers × Supercell. (n.d.). Supercell. https://supercell.com/en/careers/
    - Brawl Stars. (n.d.). Supercell. https://supercell.com/en/games/brawlstars/
    - Our offices × Supercell. (n.d.). Supercell. https://supercell.com/en/careers/our-offices/
    - 


### Acknowledgements

- While this project was based of a real life gaming company which I really like, I would like to thank my lecturer Mr Brian Toh Eng Kiat for teaching me on how to program in HTML, CSS, and JavaScript, w3schools for portions which were slightly more advanced in my opinion. Next, I would also like to thank my design principle lecturer Ms Christina Mok and friends Muhammad Hafiezul Haq, Pang Jun Hao, Jeffrey Lee and Crystal Ng for their opinions on how I could make my website look more appealing as well as the various suggestions they offered with regards to the features that are good to have. This has been one wild ride and thank you for everything.
