import React, { useState, useEffect, getData} from 'react';
import './Main.css';
import './Sprite.css';
import { Category } from "./Category";;

const links1 = [
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

const Main = () =>{

const [links, setLinks] = useState()
const [isLoading, setIsLoading]	= useState(true)

  const getData = () =>{
  setIsLoading(true) 
  	fetch('http://134.122.76.60/api/v1/ping?catOnly')
   	 .then(res => res.json())
   	 .then(data => {  
   	  const links = JSON.parse(data)	
    	setLinks(links)
    	console.log(links)
    	setIsLoading(false)
    })
  }

	 useEffect( () => {
	 	getData()
	 }, [])	
	
  return (
  	<div class="main">
		{links1.map(link =>(
		<div class="button-cont">
			<div class="main-button">
	  			<div class={link.img}></div>
	  			<span>{!isLoading ? Object.keys(links).map(key =>(<Category key={key} title={key} arr={links[key]} />)) : <div>Loading...</div>}</span>	  			
	  		</div>
	  	</div>
	  ))}
	</div>				  
	)
}

export { Main }

// <div class="button-cont">
//         <div class="main-button">
//           {links1.map(link => 
//           	<div class={link.img}></div>)}  
// 					{!isLoading ? Object.keys(links).map(key =>(<Category key={key} title={key} arr={links[key]} />)) : <div>Loading...</div>}
// 				</div>			
// 		</div>
