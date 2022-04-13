
import mongoose from 'mongoose';

//Set up default mongoose connection;

let connect = () =>{
     var mongoUrl = "mongodb+srv://sachin:URnb17mqFrVFqnT2@cluster0.fsuun.mongodb.net/coinapi?retryWrites=true&w=majority";
     mongoose.connect(mongoUrl);
     mongoose.connection.on('connected', function () {
        console.log("Mongoose default connection is open to ");
    });
    mongoose.connection.on('error', function (err) {
        console.log("Mongoose default connection has occured " + err + " error");
    });
        mongoose.connection.on('disconnected', function () {
        console.log("Mongoose default connection is disconnected");
    });
    
}

export  {
    connect
}

// Router.get('kjdkj',middleware)


//ng run build 
//angular ke ander hm express ko install krke ham 
// aws pr kiya h git se  light shell