import React, { useState } from 'react';

export const Category = ({page, city, title, onClick, style}) => {

 	return (		
		<div className="button-cont">
			<div className={`main-button ${style}`} onClick={onClick}  >				
				<div className={page}></div>
				<div>{city}</div>
				<div>{title}</div>								
			</div>
		</div>	
	)
}

