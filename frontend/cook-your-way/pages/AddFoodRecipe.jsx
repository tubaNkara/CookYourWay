import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({})
    const navigate = useNavigate()
    const onHandleChange = (e) => {
        console.log(recipeData);
        let {name,value,files} = e.target;
        if(name=== "ingredients"){
            value=value.split(",");
        }else if (name==="file"){
            value=files[0];
        }
         setRecipeData(prev => ({...prev, [name]: value}))
    }


    const onHandleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", recipeData.title);
        formData.append("time", recipeData.time);
        formData.append("ingredients", recipeData.ingredients);
        formData.append("instructions", recipeData.instructions);
        formData.append("file", recipeData.file);

       try{
         await axios.post("http://localhost:5000/recipe", formData,{
            headers:{
                'Content-Type':'multipart/form-data',
                'authorization':'bearer '+localStorage.getItem("token")
            }
        });
        navigate("/");
       }  catch(err){
        console.log("Add recipe error:", err.response?.data || err.message);
       
    }
    };
    return (
        <>
            <div className='container'>
                <form className='form' onSubmit={onHandleSubmit}>
                    <div className='form-control'>
                        <label>Title</label>
                        <input type="text" className='input' name="title" onChange={onHandleChange}></input>
                    </div>
                    <div className='form-control'>
                        <label>Time</label>
                        <input type="text" className='input' name="time" onChange={onHandleChange}></input>
                    </div>
                    <div className='form-control'>
                        <label>Ingredients</label>
                        <textarea type="text" className='input-textarea' name="ingredients" rows="5" onChange={onHandleChange}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Instructions</label>
                        <textarea type="text" className='input-textarea' name="instructions" rows="5" onChange={onHandleChange}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Recipe Image</label>
                        <input type="file" className='input' name="file" onChange={onHandleChange}></input>
                    </div>
                    <button type="submit">Add Recipe</button>
                </form>
            </div>
        </>
    )
}