
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routers/Routers';


function App() {



  return (
    <div className='mx-auto w-[1440px]'>
      <RouterProvider
        router={router}
      >

      </RouterProvider>
    </div>

  );
}

export default App;
