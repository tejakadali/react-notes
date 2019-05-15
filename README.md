Used React,Redux and Webpack.
Running in Webpack development server.

Quick start
1) Make sure that you have Node.js v11.10.0 and npm v6.8.0 or above installed for better development compactability.
2) Clone this repo using git clone https://github.com/kstejas/ReactReduxLogin.git <YOUR_PROJECT_NAME>
3) Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.
4) Run 'npm install' in order to install dependencies.
5) At this point you can run 'npm run dev' to see the example redux login app at http://0.0.0.0:8009/login

npm install => npm run dev

After npm run dev
1) Try user credentials 
username :hruday@gmail.com password :hruday123 (which is hardcoded in fake backend)
2) Frontend validation:  Test for Email and password(length should be greater than 8 characters) validation
3) Backend validation:  type wrong email or password and check it.
4) Test Search filter using by name.
5) Test Logout.

Note: Created fake backend response using Promises that gives data after 1 second delay
(got to src/_api/api.js and replace promise value with fetch or axios for HTTP requests)
# ReactNotes
