const mongoose=require('mongoose')

const recipesSchema= new mongoose.Schema(
    {
        Title:String,
        Igredients:String,
        Instructions:String,
        Image_Name:String,
        like: {
            type: Boolean,
            default: false  // Set default value to false
          }
    }
)

const recipesModel=mongoose.model("recipes" , recipesSchema )
module.exports=recipesModel
