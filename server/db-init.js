const mongoose = require('mongoose')
const conxnURL = "mongodb+srv://everyone:FRyh8vzequgjWcND@cluster0.lzvhe.mongodb.net/lms-development?retryWrites=true&w=majority"
 //URL for connection database using mongoose
//Let's connect database using mongoose.
mongoose.connect(conxnURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true 
},  (err, result) => {
    if(err){
        console.log("ERROR in DB connection")
    }
    else{
        console.log("DB connection successful")
    }
}) 
