// load express fpr put backend
const express = require('express')
const mongoose = require('mongoose')
//allows us to control the app;s Croos Origin Resource Sharing
const cors = require('cors')
const courseRoutes = require('./routes/courseRoutes');


const app = express();
//we create an app variable that stores results of the express function that initializes our express application and allow to access different methods that will make backend creation easy

mongoose.connect('mongodb+srv://admin:admin123@sandbox.vbdb4cc.mongodb.net/an22_sample_database?retryWrites=true&w=majority' ,{
		useNewURLParser: true,
		useUnifiedTopology: true
	});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

//allows us to access our backend application
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// define the /courses string to be included for all courses routes defined in the 'course' route file
app.use('/courses', courseRoutes);

app.listen(process.env.PORT || 4000, () =>{
	console.log(`Server Running on Localhost: ${ process.env.PORT || 4000}`);
})


// mongodb+srv://admin:admin123@sandbox.vbdb4cc.mongodb.net/an22_sample_database?retryWrites=true&w=majority