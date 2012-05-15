cfo-twopass
===========

cfO Closure Preso - Two Pass Compilation Test with jQuery

This demonstrates "two pass compilation", so coined by myself!  Who knows if it's a real thing or not, but here's the plan:

**1. Compile our application in Google Closure "Advanced Mode"**

We've put out Application code in the global namespace.
This marks to Google Closure that it should persist through the advanced cut-throat compilation process.
This gives us the benefit of a small package while keeping our application intact.

**2. Compile our second pass in Google Closure "Whitespace Mode**

Google Closure "Advanced Mode" is really not super friendly towards jQuery in my experience.
We'd like to use our compiled application like a library for our larger "Main" application.
So step #1 is finished - lets wrap this code library in with our Main.js script plus our jQuery dependency


**Voila! Two pass Compilation**

