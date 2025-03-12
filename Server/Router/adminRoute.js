import { Router } from "express";
import { item } from "../Models/sample.js";

const adminRoute = Router();

adminRoute.post('/addItem',async (req,res) => {
    try {
        const {ItemName,Category,Quantity,Price} = req.body
        const existingItem = await item.findOne({itemName:ItemName})
        if (existingItem) {
            res.status(400).json({msg:"This item already exist"})
        } else {
            const newItem = new item({
                itemName:ItemName,
                category:Category,
                quantity:Quantity,
                price:Price
            });
            await newItem.save();
            res.status(201).json({msg:"The item successfully added ",data:newItem});    
        }
    } catch (error) {
        console.log('The Error: ',error)
        res.status(500).json({msg:"Internal Server Error"})
    }
});

adminRoute.get('/getItem',async (req,res) => {
    try {
        const itemCat = req.query.ItemCategory
        const allItem = await item.findOne({category:itemCat})
        //const categoryItem = allItem.category=Category 
        if (!allItem) {
            res.status(404).json({msg:"No such category found"})
        } else {
            res.status(200).json({allItem})
        }
    } catch (error) {
        console.log('The Error: ',error)
        res.status(500).json({msg:"Internal Server Error"});
    }
});

adminRoute.get('/getItemall',async (req,res) => {
    try {
        const allItem = await item.find()
        if (!allItem) {
            res.status(404).json({msg:"No such category found"})
        } else {
            res.status(200).json({ allItem: allItem || [] })
        }
    } catch (error) {
        console.log('The Error: ',error)
        res.status(500).json({msg:"Internal Server Error"});
    }
});

adminRoute.patch('/updateItem',async (req,res) => {
    try {
        const {ItemName,Quantity,Price} = req.body
        const result = await item.findOne({itemName:ItemName})
        if (result) {
            result.itemName=ItemName
            result.quantity=Quantity,
            result.price=Price
            await result.save()
            await item.updateOne({itemName:ItemName})
            res.status(200).json({msg:"The item successfully updated"})
        } else {
            res.status(404).json({msg:"No such items found"})
        }
    } catch (error) {
        console.log('The Error: ',error)
        res.status(500).json({msg:"Internal Server Error"}); 
    }
});

adminRoute.delete('/deleteItem',async (req,res) => {
    try {
        const {ItemName} = req.body
        const result = await item.findOne({itemName:ItemName});
        if (!result) {
            res.status(404).json({msg:"No such items found"})
        } else {
           await item.findOneAndDelete({itemName:ItemName}) 
           res.status(200).json({msg:"The item is deleted successfully"})
        }

    } catch (error) {
        console.log('The Error: ',error)
        res.status(500).json({msg:"Internal Server Error"});
    }    
});

export {adminRoute}