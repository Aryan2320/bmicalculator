import React from "react";
import { useState } from "react";
import header from "./header";

const BmiCalculate = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi ,setBmi] = useState(null);
    const [status ,setStatus]=useState(false);
    const [weightStatus ,setWeightStatus] = useState('');
    const [color,setColor] = useState('');

    const setParameters = (setterFun ,e)=>{
         setterFun(e.target.value);
    }
    const calculateBmi = () => {
        if(weight && height && weight>0 && height>0){
        const bmi = weight / ((height / 100) ** 2);
        setBmi(bmi.toFixed(2)); 
        if(bmi<18.5){
            setWeightStatus('Under weight');
            setColor('yellow');
        }
        else if (bmi>=18.5 && bmi<=24.9){
            setWeightStatus('Normal weight');
            setColor('darkgreen');
        }
        else if (bmi>=25 && bmi<=29.9){
            setWeightStatus('Over weight');
            setColor('orange');
        }
        else{
            setWeightStatus('Obesity');
            setColor('red');
        }
        setStatus(true);

        }
        else{
           alert('Please enter correct details')
        }
    };
    
    return (
        <>
            <center>
                <h2>{header}</h2>
                <div>
                    <label htmlFor=""><strong>Enter Height (cm)</strong></label>
                    <br />
                    <input type="number" name="height" value={height} onChange={(e)=>{setParameters(setHeight,e)}} />
                </div>
                <div>
                <label htmlFor=""><strong>Enter Weight (kg)</strong></label>
                <br />
                    <input type="number" name="weight" value={weight} onChange={(e)=>{setParameters(setWeight,e)}} />
                </div>
                <button onClick={calculateBmi}>calculate</button>
                {status?<p><strong>Your BMI is: {bmi}</strong> <br /><strong>Status: <span style={{color:`${color}`}}>{weightStatus}</span></strong></p> :''}
                
            </center>
        </>
    );
};
export default BmiCalculate;
