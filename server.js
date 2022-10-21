const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(require('./routes'));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/snapi', {
    useUnifiedTopology: true,
    trueuseFindAndModify: false,
    useNewUrlParser: true
});

// mongo being executed
mongoose.set('debug', true);


app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));