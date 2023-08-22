import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const App = () => {
  return (
    <div className='bg-black-alpha-30'>
    <div className='grid bg-white-alpha-70'>
    <div className="col-8 col-offset-2">
      <div className="card border-300 surface-overlay border-3 border-round hover:surface-200" >
        <ProductList />
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
