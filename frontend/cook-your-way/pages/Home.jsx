import React from 'react';
import yaglama from '../assets/yaglama.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecipeItems from '../components/RecipeItems';


export default function Home() {
    return(
<>
<Navbar/>
<section className='home'>
<div className='left'>
    <h1>
        Food Recipe
    </h1>
    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quibusdam autem quaerat molestiae necessitatibus pariatur temporibus suscipit modi, odit aliquid, obcaecati aliquam,t. Eum, maiores eos!</h5>
    <button>Share your recipe</button>
 </div>
 <div className="right">
    <img src={yaglama}width="450px" height="300px"></img>
 </div>
</section>
<div className="bg">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#a2d9ff" fillOpacity="1" d="M0,64L30,101.3C60,139,120,213,180,213.3C240,213,300,139,360,122.7C420,107,480,149,540,154.7C600,160,660,128,720,138.7C780,149,840,203,900,192C960,181,1020,107,1080,117.3C1140,128,1200,224,1260,234.7C1320,245,1380,171,1410,133.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
</div>
<div className="recipe">
    <RecipeItems/>
</div>
</>


    )
}

