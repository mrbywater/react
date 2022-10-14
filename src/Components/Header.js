import React from 'react';
import './Header.css';
import './Sprite.css';

const links = [
{
  img: 'bg-logo1',
  title: 'OLX',
  path: '/Olx'
},{
  img: 'bg-logo2',
  title: 'BESPLATKA',
  path: '/Besplatka' 
},{
  img: 'bg-logo3',
  title: 'DOMRIA',
  path: '/Domria' 
},
]

const Header = ({handleCurrentLink}) => {

  const handlePress = (title) => (event) =>{
    event.preventDefault()
    handleCurrentLink(title.toLowerCase())
  }
  
  return (
  <div className="header">  
    <div className="logo">
      <a className="header-link" href="/">
        <div className="bg-10"></div>
      </a>   
    </div> 
    {
      links.map(link => (
        <div key={link.path} className="header-cont"> 
            <div className="header-button">         
                <a className="header-link" href={link.path} onClick={handlePress(link.title)}>        
                  <div className={link.img}></div>
                  <span>{link.title}</span>        
                </a>  
             </div>
        </div>        
      ))
    }   
  </div>  
  )
}

export { Header }

