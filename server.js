const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/API/Items')
const app = express();

//bodyparser middleware//
app.use(bodyParser.json());

//db config//
const db = require('./config/db').mongoURI;

//connect to mongo//
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


//anything that goes to route refers to items variable
app.use('/api/items', items)

//server static assets(aka build folder) if in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
      });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))

