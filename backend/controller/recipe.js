const Recipes=require("../models/recipe")
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const filename = Date.now() + '-' + file.fieldname
      cb(null, filename)
    }
  })
  
  const upload = multer({ storage: storage })

const getRecipes=async(req,res)=>{
    const recipes=await Recipes.find()
    return res.json(recipes)
}

const getRecipe=async(req,res)=>{
    const recipe=await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addRecipe=async(req,res)=>{
try{
    console.log("User from token:", req.user);
    console.log("Body:", req.body);
    console.log("File:", req.file);

    const{ title, ingredients, instructions,time} = req.body;

    if (!title || !ingredients || !instructions){
        return res.status(400).json({message: "Required fields cant't be  empty"});
    }
    const imageName = req.file? req.file.filename : null;

    const newRecipe = await Recipes.create({
        title,
        ingredients,
        instructions,
        time,
        coverImage:imageName,
        createdBy:req.user?.id || null,
    });

    return res.status(201).json(newRecipe);

} catch (error){
    console.log("Add recipe error:", error);
    return res.status(500).json({
        message:"Server Error",
        error:error.message,
    });
}  
};

const editRecipe=async(req,res)=>{
    const {title,ingredients,instructions,time}=req.body 
    let recipe=await Recipes.findById(req.params.id)

    try{
        if(recipe){
            let coverImage=req.file?.filename ? req.file?.filename : recipe.coverImage
            await Recipes.findByIdAndUpdate(req.params.id,{...req.body,coverImage},{new:true})
            res.json({title,ingredients,instructions,time})
        }
    }
    catch(err){
        return res.status(404).json({message:err})
    }
    
}
const deleteRecipe=async(req,res)=>{
    try{
        await Recipes.deleteOne({_id:req.params.id})
        res.json({status:"ok"})
    }
    catch(err){
        return res.status(400).json({message:"error"})
    }
}

module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload}