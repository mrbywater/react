import React, { useState, useEffect} from 'react';
import './Main.css';
import './Sprite.css';
import { Category } from "./Category";

// const links = [
// {
//   img: 'bg-1',
//   title: 'Luffy',  
// },{
//   img: 'bg-2',
//   title: 'Zoro',  
// },{
//   img: 'bg-3',
//   title: 'Usop', 
// },
// {
//   img: 'bg-4',
//   title: 'Nami',  
// },{
//   img: 'bg-5',
//   title: 'Sanji',  
// },{
//   img: 'bg-6',
//   title: 'Chopper',   
// },
// {
//   img: 'bg-7',
//   title: 'Robin',  
// },{
//   img: 'bg-8',
//   title: 'Frenky',  
// },{
//   img: 'bg-9',
//   title: 'Brook',  
// },
// ]

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
    	setIsLoading(false)
    	console.log(links)
    })   	 
  }

	useEffect( () => {
	 	getData()
	 }, [])	

	return (
  	<div className="main">
			{!isLoading ? Object.keys(links).map(key => (	
	  							<Category key={key} title={key} />  	
	  							)
				) : <div>Loading...</div>
			}
	</div>				  
	)
}

export { Main }
