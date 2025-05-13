"use strict"
const Recipes = require("../models/recipe")
const { get } = require("../routes/recipe")

const getRecipes=async(req, res) => {
    const recipes=await Recipes.find()
    return res.json(recipes)
}

const getRecipe=async(req, res) => {
    const recipe=await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addRecipe=async(req, res) => {
    const{ title, ingredients, instructions, time } = req.body
    if(!title ||!ingredients || !instructions)
    {
        res.json({message:"Please fill all the fields"})
    }

    const newRecipe= await Recipes.create({
        title,
        ingredients,
        instructions,
        time,
    })

    return res.json(newRecipe)
}

const editRecipe=async(req, res) => {
    const{ title, ingredients, instructions, time } = req.body
   let recipe=await Recipes.findById(req.params.id)
   try{if(recipe){
    await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:"true"})
    res.json({title, ingredients, instructions, time})  
}
   
   }

   catch(err){
    return res.status(404).json({message:"Recipe not found"})
   }
}

const deleteRecipe=(req, res) => {
    
}




module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}
