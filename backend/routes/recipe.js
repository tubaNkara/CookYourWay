"use strict";
const express= require('express');
const router=express.Router()
const {getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}=require('../controller/recipe')

router.get('/',getRecipes)
router.get('/:id',getRecipe)
router.post('/',addRecipe)
router.put('/:id',editRecipe)
router.delete('/:id',deleteRecipe)


module.exports=router