import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import certifications from './components/Certifications/certifications';

function App() {
   return (
      <div>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
