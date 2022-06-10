import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '..';
import { login, registration } from '../http/userAPI';
import "../styles/auth.scss"
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // console.log(location);
  const click = async () => {
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        // eslint-disable-next-line no-unused-vars
        data = await registration(email, password)
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
    
  }

  return (
    <Container className='authContainer d-flex justify-content-center align-items-center '>
      <Card className='cardStyle p-5'>
        <h2 className='m-auto'>{isLogin ? 'Authtorisation' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Enter your email...'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='Enter your password...'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'          
          />
          <div className='rowStyle'>
            {isLogin
              ?
              <div>
                Do you have acc? <NavLink to={REGISTRATION_ROUTE}>Sing up</NavLink>
              </div>
              :
              <div>
                Do you sing up? <NavLink to={LOGIN_ROUTE}>Sing in</NavLink>
              </div>
            }
            <Button  variant={'outline-success'} onClick={click}>
              {isLogin ? 'Sing in' : 'Sing up'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;