import { useState } from 'react';
import './App.css'


function App(){

  const [weight, setWeight]= useState("")
  const [height, setHeight]=useState("")
  
  const [isweight, setIsWeight]= useState(null)//*invalid input
  const [isheight, setIsHeight] = useState(null)

  const [bmi, setBmi] =useState()

  const validate =(e)=>{
    // console.log(e.target.value);
    const {name, value}=e.target
    console.log(name);
    console.log(value);
    // console.log(value.match('^[0-9]*$'));
    
    
    if(!!value.match('^[0-9]*$')){
      if(name=='weight'){
        setWeight(value)
        setIsWeight(true)
      }
      else{
        setHeight(value)
        setIsHeight(true)
      }
    }
    else{
      if(name=='weight'){
        setWeight(value)
        setIsWeight(false)
      }
      else{
        setHeight(value)
        setIsHeight(false)
      }

    }
    
  }

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setIsWeight(null);
    setIsHeight(null);
    setBmi(0);
    
  };

  const calculateBmi=()=>{
    setBmi((weight*10000)/height**2)
  }


  return (
  <>
    
    <div class="container">
      <div class="calculator-container">
        <h2 class="text-center mb-4">BMI Calculator</h2>
        <div class="result-box" id="bmi-result">BMI:{bmi}
        </div>
        <form id="bmi-form">
          <div class="mb-3">
          <label for="weight" class="form-label">Weight (kg)</label>
          <input
            type="text"
            class="form-control"           
            placeholder="Enter your weight"
            name='weight'
            onChange={(e)=>validate(e)}
            value={weight}//for reset
           
          />
         {isweight==false && <p className='text-danger'>*Invalid input</p>}
          </div>
          <div class="mb-3">
          <label for="height" class="form-label">Height (cm)</label>
          <input
            type="text"
            class="form-control"           
            placeholder="Enter your height"
            name='height'
            onChange={(e)=>validate(e)}
            value={height}
            
          />
          { isheight==false && <p className='text-danger'>*Invalid input</p>}
          </div>
          <div class="d-grid gap-2">
          <button type="button" class="btn btn-primary" id="calculate-btn" onClick={calculateBmi}>
            Calculate
          </button>
          <button type="reset" class="btn btn-secondary" onClick={resetForm}>Reset</button>
          </div>
        </form>
      </div>
    </div>

   
     
  </>
  );

}

  
 


      
  

export default App
