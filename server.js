const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config')

const app = express();

//express middleware//
app.use(express.json());

//db config//
const db = config.get('mongoURI');

//connect to mongo//
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


//anything that goes to route refers to items variable
app.use('/api/items', require('./routes/API/Items'))
//user routes
//Registration
app.use('/api/users', require('./routes/API/users'))
//login
app.use('/api/auth', require('./routes/API/auth'))

app.use('/api/auth/user', require('./routes/API/login'))


//server static assets(aka build folder) if in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
      });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))

