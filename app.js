

// Imports

const express = require('express')
const mongoose = require("mongoose");
// import "./db/index.js";

const app = express()
const port = 5000



// Static Files
app.use(express.static('public'));

// Example for other olders
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
// app.get('', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html')
    
// })


// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'This is EJS'})
})

// app.get('/find-job', (req, res) => {
//     res.render('find-job', { text: 'This is EJS for about page You can do it mrym'})
// })

app.get('/find-job', (req, res) => {
  res.render('post-job')
})

app.get('/api-fetch', (req, res) => {
  res.render('post-job')
})


app.get('/home page', (req, res) => {
    res.render('home page')
})
// , { text: 'Hey' }
// app.get('/about', (req, res) => {
//    res.sendFile(__dirname + '/views/about.html')
// })

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

// listening for mongoose events
mongoose.connection.on("connected", () => {
  console.log("Mongo has connected succesfully!!");
});
mongoose.connection.on("reconnected", () => {
  console.log("Mongo has reconnected");
});
mongoose.connection.on("error", (error) => {
  console.log("Mongo connection has an error", error);
  mongoose.disconnect();
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongo connection is disconnected");
});




// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))