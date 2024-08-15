#### BUGS

- [x] BUG #1 `GET /auth/login`: there were not two await keywords causing the program to effectively skip authentication and verification and return a token.

- [x] BUG #2 `GET /users/`: Getting a list of users should only return basic info ie. `[ users: { username, first_name, last_name }, ... ]`, it didn't in the route.

- [x] BUG #3 `GET /[username]`: Problem when user wasn't found would return an empty object, fixed by placing a throw statement to the Express error in `./models/user.js:get() statement`.

- [x] BUG #4 `PATCH /[username]`: if user was logged user but wasn't an admin, the function would throw an error. Fixed by removing `requireAdmin` as it will already throw an error if req.curr_admin is false. All the user has to be is authorized and logged in.

- [x]  BUG #5 `PATCH /[username]`: if user passed in data that was not authorized two places would fail, `router.patch('/:username')` and `./models/users.js:User:update()`. First needed to filter data from user to only match allowed fields, if another field was added by the user, then it would be ommited and then passed to `update()` function in user.js model where finally we had to check if obj was empty signaling that user input no data or invalid/not-allowed data.

- [ ] BUG #6: N/A