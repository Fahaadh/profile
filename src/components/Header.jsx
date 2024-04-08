import React, { useEffect, useState } from 'react'
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';


function Header() {
  const [openNavText, setOpenNavText] = useState(false);

  const[theme,setTheme]=useState("dark-theme")

  const toogleTheme =()=>{
    if(theme=="light-theme"){
      setTheme("dark-theme")
    }
    else{
      setTheme("light-theme")
    }
  }
  useEffect(()=>{
    document.body.className =theme;
  },[theme])
  return (
    <div>

     <div id='sticky-header'>

     <MDBNavbar expand='lg' light bgColor='none' id='head' >
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><h3><i className="fa-solid fa-user"></i></h3></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavText(!openNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink  href='#Home'>
                <h4>Home</h4>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#About'><h4>About</h4></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#Skills'> <h4>Skills</h4></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#Works'><h4>Works</h4></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#Contact'><h4>Contact</h4></MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <span className='navbar-text'> <button onClick={()=>toogleTheme()} className='btn btn-light'> <i className="fa-solid fa-bolt-lightning"></i></button> </span>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
   
    
     </div>
        
    </div>
  )
}

export default Header