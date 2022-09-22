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
  <div className="header">  
    <div className="logo">
        <div className="bg-10"></div>
    </div> 
    {
      links.map(link => (
        <div key={link.path} className="header-cont"> 
            <div className="header-button">         
                <a className="header-link" href={link.path} >        
                  <div className={link.img}></div>
                  <span>{link.title}</span>        
                </a>  
             </div>
        </div>        
      ))
    }   
  </div>  
)

export { Header }

// </Route>
//           <Route path="/BESPLATKA">
//             <besplatkaPage />
//           </Route>
//           <Route path="/">
//             <domriaPage />
//           </Route>