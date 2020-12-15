import React, { useState, useContext } from 'react'
import {slide as Menu} from 'react-burger-menu'

const MyContext = React.createContext();

const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)
  
  return (
    <MyContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

const Button = () => {
  const ctx = useContext(MyContext)
  return (
    
    <div className="bars lg-hide" onClick={ctx.toggleMenu}>
        <div/>
        <div/>
        <div/>
    </div>
  )
}

const Navigation = () => {
  const ctx = useContext(MyContext)
  return (
    <Menu 
    left
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
    >
          <a id="home" className="mobile-menu-item" href="/" style={{backgroundImage: `url('/images/menu/suit_image.png')`}}>
           <h2 className="mb-0">Takım Elbise</h2>   
       </a>
       <a id="home" className="mobile-menu-item" href="/" style={{backgroundImage: `url('/images/menu/suit_image.png')`}}>
           <h2 className="mb-0">Ceket</h2>   
       </a>
   
       <a id="home" className="mobile-menu-item" href="/" style={{backgroundImage: `url('/images/menu/suit_image.png')`}}>
           <h2 className="mb-0">Kravat</h2>   
       </a>
       <a id="home" className="mobile-menu-item" href="/" style={{backgroundImage: `url('/images/menu/suit_image.png')`}}>
           <h2 className="mb-0">Damatlık</h2>   
       </a>
       <a id="home" className="mobile-menu-item" href="/" style={{backgroundImage: `url('/images/menu/suit_image.png')`}}>
           <h2 className="mb-0">Damatlık</h2>   
       </a>
       <a id="home" className="mobile-menu-item" href="/" style={{backgroundImage: `url('/images/menu/suit_image.png')`}}>
           <h2 className="mb-0">Smokin</h2>   
       </a>
       <a id="home" className="mobile-menu-item" href="/" style={{backgroundImage: `url('/images/menu/suit_image.png')`}}>
           <h2 className="mb-0">Gömlek</h2>   
       </a>
       <a id="home" className="mobile-menu-item" href="/" style={{backgroundImage: `url('/images/menu/suit_image.png')`}}>
           <h2 className="mb-0">Koleksiyon</h2>   
       </a>
       <div className="user-auth my-4">
           <a href="#">Üye ol</a> 
           <span className="mx-2">|</span>
           <a href="#">Giriş Yap</a> 
           <span className="mx-2">|</span>
           <a href="#">Beğendiklerim</a> 

       </div>
    </Menu>
  )
}


const topMenu = () => {
    return (
        <MyProvider className="hide-lg">
          <div>
            <Button />
            <Navigation />
          </div>
        </MyProvider>
      )
}

export default topMenu
