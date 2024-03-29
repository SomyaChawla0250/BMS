
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const path = require('path');


const homerouter = require("./routes/home");
const books_inventory = require("./routes/book_admin");

const login_page = require("./routes/login_signup");
const profile_page = require("./routes/profile");
const userissuerequestpage = require("./routes/user_issuerequest");
const userreturnrequestpage = require("./routes/user_returnrequest");
const browse = require("./routes/browse");
const adminlogin = require("./routes/admin_login");
const acceptreturn = require("./routes/accept_issue");
const acceptissue = require("./routes/accept_return");
const addadmin = require("./routes/add_admin");
const viewadmin = require("./routes/view_admin");
app.set("view engine", "ejs");
app.set("views", "./views");





app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(homerouter);
app.use(books_inventory);
app.use(login_page);
app.use(profile_page);
app.use(userissuerequestpage);
app.use(userreturnrequestpage);
app.use(browse);
app.use(adminlogin);
app.use(acceptissue);
app.use(acceptreturn);
app.use(addadmin);
app.use(viewadmin);
app.use(express.static(path.join(__dirname, '/public')));






app.listen(3000, (error) => {
  if (!error) {
    console.log("server running successful");
  }
  else {
    console.log("error", error)
  }

});