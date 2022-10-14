import React, { useState, useEffect} from 'react';
import { Header } from '../Components/Header.js';
import { Footer } from '../Components/Footer.js';
import { Category } from "../Components/Category";
import '../Components/Main.css';

const realtyTypes ={
	appartaments: "Квартиры",
	houses: "Дома",
	flats:"Комнаты"
}

const logos ={
	olx: "bg-logo1",
	besplatka: "bg-logo2",
	domria:"bg-logo3"
}

const cities ={
	odessa: "Одесса",	
	kryzhanovka: "Крыжановка",
	leski: "Лески",
	fontanka: "Фонтанка",
	vapnyarka: "Вапнярка",
	gvardeyskoe: "Гвардейск",
	'novaya-dofinovka': "Новая Дофиновка",
	krasnoselka: "Красноселка",
	pervomayskoe: "Первомайск",
	sverdlovo: "Свердлово",
	kominternovo: "Коминтерново",
	aleksandrovka: "Александровка",
	korsuntsy:"Корсунцы",
}

export const Hoc = () => {
	const [links, setLinks] = useState()
	const [isLoading, setIsLoading]	= useState(true)
	const [current, setCurrent]	= useState('olx')
	const [oldLinks, setOldLinks] = useState()
	const [data, setData] = useState()
	
  		const getData = () => {
  		setIsLoading(true) 
  		fetch('http://134.122.76.60/api/v1/ping?catOnly')
   		.then(res => res.json())
   	 		.then(data => {  
   	 			const links = JSON.parse(data)  	  		
    			setLinks(Object.keys(links))
    			setData(links)    	
    			setIsLoading(false)      			
   			})   	 
  		}

		useEffect( () => {
	 		getData()
	 	}, [])		

	 	const test = (categoryItem, page, city) => {
	 		if (!categoryItem){
	 			setLinks(oldLinks)
	 			return 
	 		}
	 		console.log('categoryItem', categoryItem, page, city)	 		
	 		setOldLinks(links)
	 		const newLinks = categoryItem.map(({title}) => `${page}_${city}_${title}_categoryItem`)
	 		setLinks(newLinks)

	 	} 	

	return (
		<div>
			<Header handleCurrentLink={setCurrent}/> 	
			<div className="main"> 
				{
					!isLoading ? links.map(key =>{
						const [page, city, realtyType, isCategoryItem] = key.split("_")
						const title = isCategoryItem ? realtyType : realtyTypes[realtyType]
						const cityTitle = isCategoryItem ? "" : cities[city]
						const pageLogo = isCategoryItem ? "" : logos[page]
						const style = isCategoryItem ? "fontStyles" : '' 						
						 
						const onClick = () => (
							test(data[key], page, city)
						)

						return ( 
							key.includes(current) ? <Category key={key} page={pageLogo} city={cityTitle} title={title} onClick={onClick} style={style}/> : null 								
					  	)
					}
					) : <div>Loading...</div>
				}
			</div>			
			<Footer />       
		</div>
	)
}

