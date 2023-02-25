# My-First-Repo

With this being the first project, I trying to take my time to ensure I actually understand the process of
each little addition. There is a temptation to simply copy great swaths of code. But that would just lead me knowehere.

Before starting work on the projects, there was some work to be done in getting acquainted with Visual Code, Git and GitHub. I figured I should make sure these three processes were working well before going any further.

Linking Github with Git and Visual Code took some time. But this was essential in order to ensure that my code and my "commits" could document everything as I made progress through my projects.

Upon downloading some helpful extentions for Visual Code, I found a particularly useful one.
It was called 'Project Manager' and allows you to add multiple folders into one place in VISUAL CODE. This meant that I could then jump between projects at the click of a button, but they still remained seperate entities.

I began very simply by focusing only on the HTML document page first. Adding, my basic heading and paragraphs. I then downloaded some desired images and managed to link and display them also.

Now that I had some basic content, it was time to move on to some stylings using CSS.
The biggest challenge I found was learning how to link the CSS page successfully to my HTML page. This issue persisted for days before I realized on the first coding meetup on January 31st that I was simply missing a ".

Wed 8th Feb:
Today I tried to learn and then implement <div> tags in a useful way.
One of the biggest breakthroughs today was learning how to create a class for each <div>. This has allowed me not only to organize my webpage. But also style specific aspects of the page and sections in bulk. Before today I was slightly confused about this aspect and this opened up more possibilites.

In addition, I added some a function list that will include the names of useful meditation apps and websites.
I also taught learnt how to turn an image I have on page into a link. This makes my page far more seemless and a lot more interactive for the user.

Thursday 9th Feb:

Today I focused upon learning and using <article> and <section> tags, to help better organise my hobby page.
I also added the <nav> tag to what will soon become the nav bar at the top of the page.
I need to learn how to format the webpage to give it some style but also because I want the page to have a logical design language that includes side-by-side columns for each of my three aspects of meditation.
I implemented what I had learnt yesterday by using the <div>=class tag to create classes for each of my article sections so that they can then
easily be styled and adjusted in CSS.
Finally (this took me FOREVER to figure out) I got my downloaded background image to display as the backdrop for me page.
I had multiple attempts at trying to make this work. I ran into problems such as the link to the local image not working, all the way to the div tag not responding. What worked in the end was to create a <div= class> for the image in HTML, and then link the image in CSS with the within BODY. Somehow that seemed to work. Tomorrow I will more thoroughly look into exactly why the "body." assignment in CSS was neccessary.

Friday 10th Feb:
Today I am looking to establish my column layout for my hobby page. I have one quite inefficient way of doing it and am currently in the
process of seeing how I can write more efficient code. For example, one that utlises the <Div> in a much simpler way.
I have found on W3's website an example so I am going to try and make amendments next to see how it works out.

Saturday 11th Feb:
Today wa all about organizing my columns so that they are correctly placed equally in the middle of the page. In order to do this I ended up using a div that encompassed both columns and added "display flex" and increased the overall width of the two.
I also removed some cumbersome code that was overcomplicating the styling css page.

Monday 13 Feb:
Today I decided to add the live date to the top of my hobby page. First I used HTML to create an OUTPUT and a DATE. The OUTPUT would display todays date. While the DATE would be where I would target my JS to display the current day as in day month year.
After creating DIV classes (One container and one for OUTPUT and one for DATE), I then moved on to CSS to style a box and for the placement of the time itself. I created a box and a border. I also made sure to allign the text so that it was centred within the box.
Next was to start on the JS side of things. I had not had an success last time I attempted to link my JS to my html. So I spent a long time today trying to figure out the issue. I had already tried the usual tips like moving the link ref in the HTML to somewhere WITHIN the <body>. But still no luck. To cut a long and boring story short, I realized that (simialr to my issue with linking the CSS file), the script.js link required a full stop at the start of it.
I knew that JS was working by looking at my command console and trying a basic command like get date. Now that it was working it was time to make the time appear. I did that by using getelementID to link to my HTML elements. Then I used innerHTML to get date and time. I also had to tell java to switch the day from 0 being Sunday, to 6 being saturday. So that it knew what day to display and how to display it.
Finally I adjusted my boxes and added some nicer fonts.
The final things to do are to add more clicable links to three other apps I wish to recommend on the page and then finish the styling.
I will do this tomorrow.

14th Feb - 22nd Feb:
Over this past week I have spent time trying to imrprove and change the initial layout of my page. The first thing I wanted to do was to have a bold title page with the slighly gradiented background. The title of my hobby page was to appear in large, bold white text. The first thing I had to do was to make a div called "title box" which would include my image. I would then alter the dimensions of this in CSS. This would go just below my clock at the top of the page. In order to dim the image so that text would be visible on top, I used 'liner-gradient' code in CSS. This allows you to add two colours as a soft gradient. This is quite commonly used on modern websites and UI headers.
Issues: I have had some issues trying to fully complete this change. I am finding it difficult to properly control the header text and cause it do what I would like to do. There has been a lot of failed attempts that I later had to delete. This has resulted in a lot of work but not much visible progress and change in my hobby page.
The other challenging aspect is that my hobby page is quite cluttered with my very early-handed approaches to coding the page. On the one hand, this is great because the Hobby Page houses a lot of what I have learnt, meaning the next projects can be better implemented from the very start. But difficult because going back and changing entire aspects can undo and create even bigger set-backs.
I have also added a proper Nav bar that is far superior to my first attempt. I placed this to the center top of my title part of the page. It is more minimal and will link to specific parts of my hobby page that you can also find by scrolling down.
I also fixed my flex boxes that seemed to be stretching out farther from my actual page, rather than being neatly contained within the webpage.
I used background-image "center", which seemed to fix my issue with the background image being tiled too.

23rd Febuary:
Today was HUGE breakthrough in terms of progress. I FINALLY figured out how to target my title text without interfering with other assets. This meant a lot of cleaning up and re-organzing some of my code in both HTML and CSS.
I removed some of the CSS border styling for my sub-heading and that seemed enable the changes I was trying to make to work. I initially had my sub-heading as a "H4" and thought it better to change it to <p> under my <h1> heading. But actually this change made thing more complicated as I didn't want my sub-heading to share the same attributes as my all of my other <p> code. So I actually changed this back to <h4> and added the any font alterations using that in CSS.
In addition I edited the Nav bar text to make it slightly more legible as it was too small.
My next step is to link the nav bar so that when you click it, it takes you down the page to the specified place.
I have started working on my LIST that comes at the bottom of my hobby page. Here is where I have included all of my recommended apps that one
can use to start meditating. I changed the background image to one more appropriate and pleasing to the eye.
This features the title of each app and my own brief description of each one. I intent to add links to each of the litle titles.
In additionm, I have decided to keep my nav bar at the bottom and use this for clickable icons.

Tomorrow TO DO: ADD gradient in LIST BACKGROUND IMAGE.
Edit Text in LIST and add LINKS.
Add Pictures to apps that are clickable.

24th Febuary: I experimented with adding the same gradient I had to the title background, to my column boxes. But this also means that I will have to alter the text colour to make it legible.

25th: This morning I started to systematically add links to each of the bottom nav bar tiles so that when you click on them they take you straight to the app website. For this I used the <a href> element. In addition, I wanted to affect some of my h4 titles differently instead of them all being the same colour. For this I made a div class= for the specific titles I wanted to style white.
