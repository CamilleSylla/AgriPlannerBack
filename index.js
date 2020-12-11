const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

app.use(cors())
app.use(express.json());
dotenv.config();

//middleware


//import routes
const parc = require('./routes/private/manageParc')
const legu = require('./routes/private/manageLegume')
const cult = require('./routes/private/manageCult')

//db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log('connected to db');
})


//route middleware
app.use('/api/', parc)
app.use('/api/', legu)
app.use('/api/', cult)


app.listen(process.env.PORT || 5000, () => console.log('server is running'));