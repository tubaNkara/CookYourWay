
import { useLoaderData } from 'react-router-dom'
import yaglama from '../assets/yaglama.png';
import { BiAlarm } from "react-icons/bi";
import { PiHeartDuotone } from "react-icons/pi";


export default function RecipeItems() {
    const allRecipes= useLoaderData();
    console.log(allRecipes)
  return (
    <>
     <div className="card-container"> {
                       
     allRecipes?.map((item, index)=>{
        return(
            <div key={index} className='card'>
               <img src={yaglama} width="120px" height="100px" />
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
