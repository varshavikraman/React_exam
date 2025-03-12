import express , {json} from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import { adminRoute } from "./Router/adminRoute.js";

dotenv.config();

const app = express();


app.use(json());
app.use('/',adminRoute)

mongoose.connect('mongodb://localhost:27017/InventoryManagement').then(()=>{
    console.log('mongodb is connected successfully with InventoryManagement ');
    
})
.catch((error)=>{
    console.error('mongodb failed to connect')
})

app.listen(process.env.PORT,function(){
    console.log(`Server is listening at ${process.env.PORT}`)
})
