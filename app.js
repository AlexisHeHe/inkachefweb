let express = require("express");
let app = express();
const mongoose = require('mongoose');
const {NewSchema} = require('./modal');

mongoose.connect('mongodb+srv://gameryeet09:alexismm@nodeweb.vda3s0q.mongodb.net/nodeweb?retryWrites=true&w=majority')
.then(result => app.listen(3000)).catch(err => console.error(err));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//Get Requests

app.get("/", (req, res) => {
  res.render("HomePage");
})

app.get("/es", (req, res) => {
  res.render("HomePageES");
})

app.get("/menu", (req, res) => {
  res.render("Menu");
})

app.get("/contact", (req, res) => {
  res.render("Contact");
})

app.get("/contactes", (req, res) => {
  res.render("ContactES");
})

app.get("/menues", (req, res) => {
  res.render("MenuES");
})

//Post Requests

app.post("/feedbackenglish", async (req, res) => {
  let feedback = await NewSchema(req.body);
  feedback.save().then(result => res.redirect("/contact")).catch(err => console.error(err));
})

//Error Page
app.use((req, res) => {
  res.status(404).render('404');
})