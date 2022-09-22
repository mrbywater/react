import React, { useState, useEffect} from 'react';
import { Category } from "./Category";

export const BesplatkaPage= () => {

const [linksOlx, setLinks] = useState()
const [isLoading, setIsLoading]	= useState(true)

  const getData = () =>{
  setIsLoading(true) 
  	fetch('http://134.122.76.60/api/v1/ping?catOnly')
   	 .then(res => res.json())
   	 .then(data => {  
   	  const links = JSON.parse(data)
   	  const linksOlx = Object.keys(links).filter(www => www.includes("besplatka"))
   	  console.log(linksOlx)
    	setLinks(linksOlx)    	
    	setIsLoading(false)
    	
    })   	 
  }

	useEffect( () => {
	 	getData()
	 }, [])	

	return (
  	<div className="main">
			{!isLoading ? linksOlx.map(key => (	
	  							<Category key={key} title={key} />  	
	  							)
				) : <div>Loading...</div>
			}
	</div>				  
	)
}