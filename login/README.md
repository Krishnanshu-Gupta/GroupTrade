Login button on line 301: `<button type="submit" onclick="login()">Login</button>`
- links to login() function in the script at the bottom after onclick (line 394) but this link to the function doesn't work or do anything and the firebase api call doesnt go through as a result. Just need to find a way to make sure the onclick listener links to the script, current "login()" thing doesnt work for some reason.
- The function has a .then() call after executing the firebase api call, after which we can make it redirect to another html page (line 403)

Same issue for signup button, line #'s listed below:

Signup button on line 331: `<button type="submit" onclick="createAccount()" class="signup">Sign Up</button>`
- links to createAccount() function in the script at the bottom after onclick (line 368) but it doesn't trigger or do anything
- The function has a .then() call after executing the firebase api call, after which we can make it redirect to another html page (line 376)
