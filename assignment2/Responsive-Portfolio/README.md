Responsiveness Assignment


Overview

In this assignment, you'll create two different portfolios. The first will be building
your portfolio layout using the Bootstrap CSS Framework. The second will be enhancing
the portfolio you made last week with a mobile-responsive layout.


Before You Begin


If you opted to do the wireframe (easier) assignment for last homework or if you struggled with the portfolio design, ask a member of the instructional staff to provide you with the solution files. This will provide a starting point for the current assignment. 
You've learned a ton of material: HTML, CSS, GitHub, GitHub Pages, and Bootstrap. If you feel like you're falling behind, there's no need to panic. You'll have weeks to digest and master this material.
We're diving into JavaScript next week, and HTML/CSS will start receiving less focus. Still, you'll find that a basic knowledge of HTML/CSS will help you understand JavaScript, especially when we use it to manipulate web pages.



Submission on BCS


Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!



Instructions


Create two new GitHub repositories and name them Bootstrap-Portfolio and Responsive-Portfolio.
Clone these repositories to your computer.



Assignment One Instructions (Bootstrap)


Inside your Bootstrap-Portfolio repo, create index.html, portfolio.html and contact.html.
Using Bootstrap, recreate your portfolio site with the following items:



A navbar

A responsive layout (remember the grid, rows and columns are your friends)


eg. On xs and sm screens, content should take up the entire screen. On md and larger screens, you should have some margins on the left and right side of the screen. Check out various sites on your mobile device versus your computer to see this in action!


Responsive images


BONUS
   Using Bootstrap, make a sticky footer and use sub-rows and sub-columns on your portfolio site (Hint: Check out the Bootstrap documentation)


Your Bootstrap solution should minimize use of media queries.
Deploy your new Bootstrap-powered portfolio to GitHub Pages.



Assignment Two Instructions - (No Bootstrap)


Copy the contents of Basic-Portfolio (your first homework solution) and paste the mentioned files into Responsive-Portfolio.
Note: Be sure not to include any dot files (e.g. .git, .gitignore) from the Basic-Portfolio repo.
If you chose the Wireframe exercise for your first homework assignment, talk to a TA, who will provide you with a template for your portfolio.
Inside your Responsive-Portfolio folder, find your styles.css file. You will write your media queries at the bottom of styles.css.
Use three @media screen tags, each with one of these max-widths: 980px, 768px and 640px.



You use 980px because you never want any of the content to be cut off. Since the desktop layout is about 960px wide, you want the media queries to kick in before your content gets cut off.
768px is about the width of a tablet and 640px is about the width of a phone in landscape.



Make the layout match the following screenshots:



index.html: 980px, 768px, 640px
portfolio.html: 980px, 768px, 640px
contact.html: 980px, 768px, 640px



Make the position of the header static (the default positioning) when the screen is 640px wide. The header design takes up a lot of room; you don't want it to stick to the top of a small screen and leave no room for the rest of your site.
Be sure to include the viewport tag in all your HTML files, otherwise your media-queries won't function as expected on mobile devices. (Hint: You won't need to use exact pixels for anything other than the container)
Protip: Use the Chrome extensions Window Resizer and Browser Width to see the browser dimensions in Chrome.
Deploy your new portfolio (now with media queries!) to GitHub Pages.



Submitting Your Work on BootCampSpot



Submit the GitHub links to your portfolio repositories on GitHub.
Submit the link to your (GitHub Pages) deployed site in the same input field.



BONUS


Incorporate CSS animations in your portfolio. More info here.



Reminder: Submission on BCS


Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!





Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.




One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

Good Luck!