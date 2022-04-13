import {Schema,model} from 'mongoose';

const scheam  = new Schema({ 
    exchange_id:{
        type: String,
        uppercase:true
    },
    url:{
        type: String,
      
    }
},{timestamps:true});


export default model('icons',scheam)