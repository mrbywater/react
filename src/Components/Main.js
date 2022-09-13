import React from 'react';
import './Main.css';
import './Sprite.css';

const links = [
{
  img: 'bg-1',
  title: 'Luffy',  
},{
  img: 'bg-2',
  title: 'Zoro',  
},{
  img: 'bg-3',
  title: 'Usop', 
},
{
  img: 'bg-4',
  title: 'Nami',  
},{
  img: 'bg-5',
  title: 'Sanji',  
},{
  img: 'bg-6',
  title: 'Chopper',   
},
{
  img: 'bg-7',
  title: 'Robin',  
},{
  img: 'bg-8',
  title: 'Frenky',  
},{
  img: 'bg-9',
  title: 'Brook',  
},
{
  img: 'bg-1',
  title: 'Luffy',  
},{
  img: 'bg-2',
  title: 'Zoro',  
},{
  img: 'bg-3',
  title: 'Usop', 
},
{
  img: 'bg-4',
  title: 'Nami',  
},{
  img: 'bg-5',
  title: 'Sanji',  
},{
  img: 'bg-6',
  title: 'Chopper',   
},
{
  img: 'bg-7',
  title: 'Robin',  
},{
  img: 'bg-8',
  title: 'Frenky',  
},{
  img: 'bg-9',
  title: 'Brook',  
},
]

const Main = () =>(
	<div class="main">
	{links.map(link =>(
		<div class="button-cont">
			<div class="main-button">
	  			<div class={link.img}></div>
	  			<span>{link.title}</span>	  			
	  		</div>
	  	</div>
	  ))}
	</div>  					

) 

export { Main }