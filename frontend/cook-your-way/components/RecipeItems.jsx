
import { useLoaderData } from 'react-router-dom'
import { BiAlarm } from "react-icons/bi";
import { PiHeartDuotone } from "react-icons/pi";
import png from '../assets/default.png'; 
import { LiaEdit } from "react-icons/lia";


export default function RecipeItems() {
    const allRecipes= useLoaderData();
    console.log(allRecipes)
  return (
    <>
     <div className="card-container"> {
                       
     allRecipes?.map((item, index)=>{
        return(
            <div key={index} className='card'>
               <img src={item.coverImage? `http://localhost:5000/images/${item.coverImage}`:png} width="120px" height="100px" />
                <div className="card-body">
                    <div className="title">{item.title}</div>
                    <div className="icons">
                        <div className="timer"><BiAlarm /></div>
                        <PiHeartDuotone />
                        </div>
                </div>

            </div>
        )
    })
}

     </div>
    </>
  )
}
