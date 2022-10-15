# worktimers

## BIG THING:
### This cannot be run on Chrome, and should rather be run on Firefox
Chrome has (rightly) disabled media autoplay (which is why youtube videos you open in  a new tab don't start until you click on the tab they opened in)
Firefox also has this in a different way, and importantly, it can be overridden. There's a button up by the URL bar that will appear, so you can enable popups (the program creates new tabs with instructions at the intervals) and media (the program makes a sound at each of the intervals)
The idea is that you hear the sound, you open the browser, you do the thing, you close the browser, back to work until the next sound
I've found it nice in a different workspace/desktop if your OS has that option (I have tried this on Ubuntu)
## If you want to modify it (you probably will)--
You can fill out the things.html file with your to do list if you want
Also fill out the extra stuff you want to have in messages, on the various html files, and if you rename them, fix that in the things.js file
Fill out the things.js file to fit your timing and page preferences

## Quick start, just use homepage.html and modify the todo list, and just change the other files as you want so they display the right messages

## Note:
All the times you're gonna see in the js files are in milliseconds, so 1000 = 1 sec, 60,000 = 1 min
You're going to want to add a different audio file because I guarantee you'll get pissed off at this sound
Note that the default time is 10 minutes for each reminder, but at 30 minutes, a 15 minute timer starts on a new page for a break. This doesn't stop the other timer thouggh, so 10 minutes through the break, you'll get the next reminder.