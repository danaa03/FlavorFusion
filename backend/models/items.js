const mongoose=require('mongoose')

const itemsSchema= new mongoose.Schema(
    {
        name:String,
        score: Number,
    }
)

const itemsModel=mongoose.model("items" , itemsSchema )
module.exports=itemsModel
