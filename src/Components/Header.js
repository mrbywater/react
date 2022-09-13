import React from 'react';
import './Header.css';
import './Sprite.css';


const links = [
{
  img: 'bg-logo1',
  title: 'OLX',
  path: '/OLX'
},{
  img: 'bg-logo2',
  title: 'BESPLATKA',
  path: '/BESPLATKA' 
},{
  img: 'bg-logo3',
  title: 'DOMRIA',
  path: '/DOMRIA' 
},
]

const Header = () => (
  <div class="header">
    <div class="logo">
        <div class="bg-10"></div>
    </div> 
    {
      links.map(link => (
        <div class="header-cont"> 
            <div class="header-button">         
                <a class="header-link" href={link.path} >        
                  <div class={link.img}></div>
                  <span>{link.title}</span>        
                </a>  
             </div>
        </div>        
      ))
    }
  </div>
)

export { Header }