import React, { useContext } from 'react';
import { Context } from '..';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import "../styles/navbar.scss"
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
  }

  return (
    <Navbar className="navBar" bg="dark" variant="dark">
      <Container>
        <NavLink className="navLink me-auto" to={SHOP_ROUTE}>BuyDevice</NavLink>
        {user.isAuth 
          ?
          <Nav className="navEl">
            <Button variant={'outline-light'} onClick={()=> navigate(ADMIN_ROUTE)} className='me-2'>Admin panel</Button>
            <Button variant={'outline-light'} onClick={()=> logOut()}>Logout</Button>
            {/* <Link to='/about'>About</Link>
            <Nav.Link href="#home">Home</Nav.Link> */}
          </Nav>
          :
          <Nav className="navEl">
            <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Authtorisation</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;