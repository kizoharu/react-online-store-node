import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = observer(() => {
  const {user} = useContext(Context)
  // console.log(user);

  return (
    <Routes>
      {user.isAuth === true && authRoutes.map(({path, element}) => 
        <Route key={path} path={path} element={element}/>
      )}
      {publicRoutes.map(({path, element}) => 
        <Route key={path} path={path} element={element}/>
      )}
      <Route path='*' element={<Navigate to='/' replace/>}/>
    </Routes>
  );
});

export default AppRouter;

