#### Part 1: Conceptual
- [x] Answer the following questions inside the ***conceptual.md*** file

#### Part 2: Timeword.js
Solve the following problem in JavaScript

- [x] Turn a string of 24h time into words.

you can trust that you'll be given a valid *string* (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

- [x] **Write tests for these cases** and make sure your code passes these.

- [x] Also, do this **without the aid of any external packages**. The goal here is to have you think about how you'd solve the problem, not have you show us how good you are at finding third-party libraries.

| Input | Expected Output |
| ----- | --------------- |
| 00:00 | midnight |
| 00:12 | twelve twelve am |
| 01:00 | one o’clock am |
| 06:01 | six oh one am |
| 06:10 | six ten am |
| 06:18 | six eighteen am |
| 06:30 | six thirty am |
| 10:34 | ten thirty four am |
| 12:00 | noon |
| 12:09 | twelve oh nine pm |
| 23:23 | eleven twenty three pm | 

#### Part 3: Buggy App
- [x] Get the App Running
```sh
cd blankly
npm install
npm run seed
npm test
npm start
```

##### Goals for part 3
We've put in six bugs. Use the docstrings provided in the routes as guides for what to test. Find the bugs, report in ***bugs.md*** a short description of the bug and where it is, so we know where to look, and a comment that says `FIXES BUG #n` that shows a fix for the bug.

Good luck!
