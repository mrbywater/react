import React from 'react';

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

export const Category = (props) => {
	const [page, city, realtyType] = props.title.split("_")
 	console.log([page, city, realtyType])
	return (
		<div className="button-cont">
			<div className="main-button">				
				<div className={logos[page]}></div>
				<div>{cities[city]}</div>
				<div>{realtyTypes[realtyType]}</div>				
			</div>
		</div>	
	)
}

