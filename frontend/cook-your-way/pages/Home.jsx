import React from 'react';
import yaglama from '../assets/yaglama.png';
import Navbar from '../components/Navbar';
import RecipeItems from '../components/RecipeItems';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import InputForm from '../components/InputForm';
import { useState } from 'react';


export default function Home() {
  const navigate=useNavigate()
  const [isOpen, setIsOpen] =useState(false)

    const addRecipe = () => {
        let token = localStorage.getItem("token")
        if (token)
            navigate("/addRecipe")
        else {
            setIsOpen(true)
        }
    }

    return(
<>
<Navbar/>
<section className='home'>
<div className='left'> 
  
    <h1>
        Food Recipe
    </h1>
    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quibusdam autem quaerat molestiae necessitatibus pariatur temporibus suscipit modi, odit aliquid, obcaecati aliquam,t. Eum, maiores eos!</h5>
     
     <button onClick={()=>{navigate("/addRecipe")}}>Share your recipe</button>
    
   </div>
  
 <div className="right">
    <img src={yaglama} width="450px" height="300px" ></img>
 </div>
</section>
<div className="bg">

  <svg
    id="visual"
    viewBox="0 0 900 450"
    width="900"
    height="450"
    
  >
    <rect x="0" y="0"  fill="#e1eff6"></rect>
    <path d="M0 332L60 339L120 288L180 303L240 336L300 320L360 324L420 303L480 297L540 333L600 330L660 299L720 325L780 302L840 288L900 308L900 451L840 451L780 451L720 451L660 451L600 451L540 451L480 451L420 451L360 451L300 451L240 451L180 451L120 451L60 451L0 451Z" fill="#97d2fb" style={{ transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}></path>
    <path d="M0 347L60 344L120 329L180 315L240 312L300 328L360 321L420 341L480 346L540 354L600 354L660 343L720 314L780 306L840 323L900 348L900 451L840 451L780 451L720 451L660 451L600 451L540 451L480 451L420 451L360 451L300 451L240 451L180 451L120 451L60 451L0 451Z" fill="#75e2f0" style={{ transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}></path>
    <path d="M0 370L60 358L120 329L180 333L240 375L300 329L360 339L420 364L480 335L540 375L600 349L660 375L720 333L780 372L840 335L900 346L900 451L840 451L780 451L720 451L660 451L600 451L540 451L480 451L420 451L360 451L300 451L240 451L180 451L120 451L60 451L0 451Z" fill="#88ebcc" style={{ transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}></path>
    <path d="M0 348L60 372L120 391L180 383L240 381L300 373L360 389L420 349L480 386L540 349L600 368L660 390L720 369L780 383L840 363L900 355L900 451L840 451L780 451L720 451L660 451L600 451L540 451L480 451L420 451L360 451L300 451L240 451L180 451L120 451L60 451L0 451Z" fill="#9decba" style={{ transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}></path>
    <path d="M0 370L60 383L120 369L180 368L240 384L300 391L360 380L420 369L480 383L540 394L600 374L660 396L720 396L780 395L840 387L900 386L900 451L840 451L780 451L720 451L660 451L600 451L540 451L480 451L420 451L360 451L300 451L240 451L180 451L120 451L60 451L0 451Z" fill="#88ebcc" style={{ transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}></path>
    <path d="M0 394L60 404L120 397L180 416L240 394L300 417L360 395L420 413L480 398L540 418L600 424L660 416L720 424L780 423L840 421L900 424L900 451L840 451L780 451L720 451L660 451L600 451L540 451L480 451L420 451L360 451L300 451L240 451L180 451L120 451L60 451L0 451Z" fill="#75e2f0" style={{ transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}></path>
    <path d="M0 415L60 433L120 427L180 428L240 418L300 432L360 423L420 412L480 425L540 424L600 430L660 424L720 414L780 430L840 428L900 429L900 451L840 451L780 451L720 451L660 451L600 451L540 451L480 451L420 451L360 451L300 451L240 451L180 451L120 451L60 451L0 451Z" fill="#97d2fb" style={{ transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}></path>
  </svg>

</div>
  {(isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}
<div className="recipe">
    <RecipeItems/>
</div>
</>


    )
}

