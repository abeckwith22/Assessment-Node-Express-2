### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
A JWT is a JSON Web Token is used to verify the source of an request with data that a server would be programmed to need such as login information.

- What is the signature portion of the JWT?  What does it do?
The signature portion of the JWT confirms the authenticity of the web token.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, if a JWT is intercepted, it's written in base64 and can be decoded that way, the token was not made to be secure, but to see if the token was sent from an allowed source.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
You can implement authetication with a JWT through a form that takes in your username and password that's fed through a hash and then compared with that hash in the servers database, you can make sure that the form you're sending is authorized to do so with a JWT.

- Compare and contrast unit, integration and end-to-end tests.
Integration testing is a step up from unit tests testing and observing how different components of the program work together, and end-to-end tests will test the entire app like a user would by using their app.
At the end of the day these are both tests.

- What is a mock? What are some things you would mock?
A mock is a type of unit test where you would isolate the method/function from it's dependecies so that the constraints of said function are not reliant on other peoples dependencies or third-party API's and can test for unexpected behavior that could arise when you use the actual dependencies. You would want to implement a mock say in a function that has side effects such as charging a credit card. These side effects shouldn't actually affect someone's bank account, but you would use a mock bank account to test for unwanted behavior.

- What is continuous integration?
Continuous integration is *as the name implies* a way of keeping tests updated to the source code so that you aren't testing outdated code and giving false positive/negative results. 

- What is an environment variable and what are they used for?
An environment variable is a flag that a user on their machine would set so it would change the way the program is running on that users machine. For example if you were to be running an Wayland server on your machine, you can have a more responsive browsing experience with Firefox by setting `MOZ_ENABLE_WAYLAND=1` using `export`.

- What is TDD? What are some benefits and drawbacks?
Testing-Driven Development (TDD) is a style of writing code where you write the tests before you write code helping to ensure that code is always tested and confirmed to be working properly. TDD ensures for quality products that work throughout development, downsides to TDD is writing a lot more code for tests.

- What is the value of using JSONSchema for validation?
The value of using JSONSchema for validation is mainly consistency, so that data from one codebase will work with another following a designated format.

- What are some ways to decide which code to test?
Finding end cases, if you guessing a positive number, a user shouldn't be able to input a string, negative integer, float, etc.

- What does `RETURNING` do in SQL? When would you use it?
SQL clause `RETURNING` is used in updating, deleting, inserting, to return keys from the modified rows. You would use it for example when trying to show a user who has updated their username that their username has changed successfully.

- What are some differences between Web Sockets and HTTP?
The differences between web sockets and http is the way that they interact with the user. Web sockets typically allow for a handshake to occur between the client and server allowing for real-time updates without having the user to refresh their webpage or wait for polling to update. HTTP is a web protocol where a user asks for a website from a server and the http responds with data (such as a website, css, js, etc.) from their server.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I personally prefer Flask to Express, not to say that one does their job worse than the other, every project that I've done in Flask I can do in express, I've just had more experience with Flask applications. I also find that it makes workflow easier when I don't have to tell where I write JavaScript code for the website and JavaScript code for backend.
