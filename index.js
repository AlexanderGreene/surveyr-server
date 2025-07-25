const express = require('express');
const mongoose = require('mongoose');
const { mongodbUri } = require('./config/keys');

require('./services/passport');
require('./routes/authRoutes')(app);

mongoose.connect(mongodbUri);

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
