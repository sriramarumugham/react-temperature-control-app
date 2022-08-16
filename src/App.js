import { useState } from 'react';
import './App.css';

function App() {
   const [tempraturestatus  , changeTempreature]= useState(0);
   const [tempratureColor , changeTempreatureColor]=useState('cold');

    const handleIncrease =()=>{
    if(tempraturestatus>=30){return;}
    const newTemperature = tempraturestatus + 1;
      if(tempraturestatus >=19){
        changeTempreatureColor('hot');
      }
      changeTempreature(newTemperature);
      
    
   }
   const handleDecrease=()=>{
    const newTemperature=tempraturestatus-1;

    if(newTemperature<=0){return;}
      if(newTemperature<=19){
        changeTempreatureColor('cold');
      }
      changeTempreature(newTemperature);
      
    
   }
  return (
     <div className='container'>
          <div className='display-container'>
            <div className={` display  ${tempratureColor}`} >
              <h4>{tempraturestatus}   ° C </h4>
            </div>
          </div>
          <div className='controll-container'>
           <button onClick={handleIncrease}>+</button>
           <button  onClick={handleDecrease}>-</button>
          </div>

     </div>
  );
}

export default App;
