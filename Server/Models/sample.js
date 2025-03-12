import { Schema } from "mongoose";
import { model } from "mongoose";

const itemSchema = new Schema({
    itemName:{type:String,required:true,unique:true},
    category:{type:String,required:true},
    quantity:{type:Number,required:true},
    price:{type:Number,required:true}
});
const item = model('itemDetail',itemSchema);

export {item}