import React from 'react';
import CalculationComponent from './Components/Calculation';
import PreviousDataComponent from './Components/PreviousData';

function App() {



  return (
    // Container principal: Altura total da tela, fundo cinza claro e centralização com flexbox
    <div className='flex'>
      <PreviousDataComponent />
      <CalculationComponent />
    </div>
  )
}

export default App
