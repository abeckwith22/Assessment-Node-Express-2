/** User related routes. */

const User = require('../models/user');
const express = require('express');
const router = new express.Router();
const ExpressError = require('../helpers/expressError');
const { authUser, requireLogin, requireAdmin } = require('../middleware/auth');

/** GET / - [x] CHECKED
 *
 * Get list of users. Only logged-in users should be able to use this.
 *
 * It should return only *basic* info:
 *    {users: [{username, first_name, last_name}, ...]}
 *
 */

router.get('/', authUser, requireLogin, async function(req, res, next) {
  try {
    let users = await User.getAll();
    // FIXES BUG #2
    let users_json = users.map(o => {
      return {username:o.username, first_name:o.first_name, last_name: o.last_name};
    });
    return res.json({ users: users_json });
  } catch (err) {
    return next(err);
  }
}); // end

/** GET /[username] - [x] CHECKED
 *
 * Get details on a user. Only logged-in users should be able to use this.
 *
 * It should return:
 *     {user: {username, first_name, last_name, phone, email}}
 *
 * If user cannot be found, return a 404 err.
 *
 */

router.get('/:username', authUser, requireLogin, async function(req,res,next) {
  try {
    let user = await User.get(req.params.username);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /[username] - [x] CHECKED
 *
 * Update user. Only the user themselves or any admin user can use this.
 *
 * It should accept:
 *  {first_name, last_name, phone, email}
 *
 * It should return:
 *  {user: all-data-about-user}
 *
 * It user cannot be found, return a 404 err. If they try to change
 * other fields (including non-existent ones), an error should be raised.
 *
 */

router.patch('/:username', authUser, requireLogin, async function(req,res,next) {
  try {
    if (!req.curr_admin && req.curr_username !== req.params.username) {
      throw new ExpressError('Only that user or admin can edit a user.', 401);
    }

    // BUG #5 we should only be allowed to change (first_name, last_name, phone, email). Shouldn't be able to change username, password)
    // FIXES BUG #5
    // get fields to change; remove token so we don't try to change it
    let data = req.body;
    delete data._token;
    let obj = { // restricts obj to just (first_name, last_name, phone, email) if user inputs not-allowed data, it won't be included. 
      first_name:data.first_name,
      last_name:data.last_name,
      phone:data.phone,
      email:data.email
    };
    Object.keys(obj).forEach( key =>{ // If user doesn't input allowed data, will be undefined and ommited from the obj
      if (obj[key] === undefined) {
        delete obj[key];
      }
    });

    let fields = { ...obj };
    let user = await User.update(req.params.username, fields);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
}); // end

/** DELETE /[username] - [x] CHECKED
 *
 * Delete a user. Only an admin user should be able to use this.
 *
 * It should return:
 *   {message: "deleted"}
 *
 * If user cannot be found, return a 404 err.
 */

router.delete('/:username', authUser, requireAdmin, async function(req,res,next) {
  try {
    User.delete(req.params.username);
    return res.json({ message: 'deleted' });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
