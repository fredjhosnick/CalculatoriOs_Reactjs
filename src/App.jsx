import { useState } from 'react';
import MyButtons from './MyButtons';
import MyInput from './MyInput';


function App() {

  const[input, setInput]= useState('0')


  const handlerButtonClick = (buttonText)=>{
  

    if(buttonText  === ',' && input.includes(',')){
     return;
    }

    if(input === '0'){
      if(buttonText ===','){
        setInput ( input + buttonText)
      }else{
        setInput (buttonText)
      }
    }else{
      setInput ( input + buttonText)
    }

 
  }

  const handlerClear =()=>{
    setInput("0")
  }
  const handlerCalculate = ()=>{
    try {
      let expression = input;
    expression = expression.replace(/÷/g, '/').replace(/x/g, '*').replace(/,/g, '.')
    let result = safeEvaluate(expression)
    setInput(result.toString());
    } catch (error) {
      setInput('Error');
      
    }
  }

  const safeEvaluate = (expression)=>{
    const sanitazedExpression = expression.replace(/[^-()\d/*+.]/g, '')
    return new  Function(`return ${sanitazedExpression}`)()
  }
 
  const handlerPorcent = ()=>{
    let result = parseFloat(input)/100;
    setInput(result);
  }

  const handlerToggleSign = ()=>{
    let result = input * -1;
    setInput(result)
  }

  
  


  
  return (
    <div className='container'>
      <div className='calculator-app'>
          <MyInput input={input}/>
          <div className="container-btns">
      
           <MyButtons onButtonClick={handlerButtonClick} onButtonCalculate={handlerCalculate} onHandlerToggleSign={handlerToggleSign} onButtonClear={handlerClear} onHandlerPorcent={handlerPorcent}/>

       </div>
      </div>
    </div>
  )
}

export default App
