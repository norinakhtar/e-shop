import React ,{useState} from 'react';
import SignInForm from './SignInForm';
import SignupForm from './Signup';
import './Auth.css'


function Auth() {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName)=>{
      console.log(formName);
        setCurrentForm(formName)
    }
  return (

    <div  style={{width:"100%"}}className='Auth'>
      <h1 >E-SHOP </h1>

        {/* <header className='App-header'></header> */}
        {
            currentForm === "login" ? <SignInForm onFormSwitch={toggleForm}/>: <SignupForm onFormSwitch={toggleForm}/>
        }
      
    </div>
  )
}

export default Auth;
