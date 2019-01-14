These are all the folders I have done in order to try and complete the interview challenges.

"PrimeNumberGenerator" contains the java code I used in order to create a program that would generate all the prime numbers between two user entered number values
ex: 7900 and 7920 would output the numbers 7901, 7907, and 7919 as they classify as prime numbers


"interview_server" and "membersUI" are both used for the same problem. "interview_server" contains the Javascript code used to create the URLs where the ReactJS code can connect to, 'fetch' the data, and convert it to JSON in order to output it. And "membersUI" contains the ReactJS code to make everything function and viewable to users.

To view and use the "interview_server" and "membersUI" code I would advise that first turn on your xampp or whatver other server you use and in the "interview_server" go to the "index.js" file and change the database connection so that it connects to the database you need. Then in your command prompt "cd" to wherever you placed the "interview_server" file, "cd" into the file, then enter the command "nodemon index.js" this will activate the file in order to collect the data from the database. Then in a new command prompt "cd" to the "membersUI" file and enter the command "npm start" this will activate the ReactJS file.
