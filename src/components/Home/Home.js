import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
   const { user } = useContext(AuthContext);
   return (
      <div>
         <h1>This is home js: {user?.email}</h1>
      </div>
   );
};

export default Home;