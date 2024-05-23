import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import toast from 'react-hot-toast'
const LoginPopup = ({setShowLogin}) => {

    const[currState,setCurrState] = useState("Login")
    const[userDetails,setUserDetails]=useState({name:"",email:"",password:""})
    const[userDetails2,setUserDetails2]=useState({email:"",password:""})
    const userArray=[]

    function handleDetails(e){
        setUserDetails(prev=>(
            {...prev,[e.target.name]:e.target.value}
        ))
        console.log(userDetails)
    }

    function handleDetails2(e){
        setUserDetails2(prev=>(
            {...prev,[e.target.name]:e.target.value}
        ))
        console.log(userDetails2)
    }

    function handleSubmit(e){
        e.preventDefault()
        userArray.push(userDetails)
        localStorage.setItem("users",JSON.stringify(userArray))
        setCurrState("Login")
    }

    function handleLogin(e){
        e.preventDefault()
        const arr=JSON.parse(localStorage.getItem("users"))
        const find=arr.find((el)=>el.email===userDetails2.email)
        if(find){
        sessionStorage.setItem("user",JSON.stringify(userDetails2))
        setShowLogin(false)
        toast.success("successfully logged in")

            
        }
        else{
            alert("not logged in")
        }
        
    }
    


  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={currState==="Login"?handleLogin:handleSubmit}>
        <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
        </div>
        <div className='login-popup-inputs'>
            {currState==="Login"?<></>:<input type='text' placeholder='Your name' onChange={currState==="login"?handleDetails2:handleDetails} name="name" required/>}
            <input type='email' placeholder='Your email' onChange={currState==="Login"?handleDetails2:handleDetails} name="email" required/>
            <input type='password' placeholder='Password' onChange={currState==="Login"?handleDetails2:handleDetails} name="password" required/>
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"} </button>
        {/* <div className='login-popup-condition'>
            <input type='checkbox' required/>
            <p>By continuing, i agree to the terms of the use & privacy policy</p>
        </div> */}
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginPopup

// import React, { useState } from 'react';
// import './LoginPopup.css';
// import { assets } from '../../assets/assets';

// const LoginPopup = ({ setShowLogin }) => {
//     const [currState, setCurrState] = useState("Login");
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         agreeToTerms: false
//     });

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if (formData.agreeToTerms) {
//             if (currState === "Login") {
//                 localStorage.setItem('loginData', JSON.stringify({
//                     email: formData.email,
//                     password: formData.password
//                 }));
//                 alert('Login data saved to local storage');
//             } else {
//                 localStorage.setItem('signUpData', JSON.stringify({
//                     name: formData.name,
//                     email: formData.email,
//                     password: formData.password
//                 }));
//                 alert('Sign-up data saved to local storage');
//             }
//             setShowLogin(false);
//         } else {
//             alert('You must agree to the terms and conditions');
//         }
//     };

//     return (
//         <div className='login-popup'>
//             <form className='login-popup-container' onSubmit={handleFormSubmit}>
//                 <div className='login-popup-title'>
//                     <h2>{currState}</h2>
//                     <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
//                 </div>
//                 <div className='login-popup-inputs'>
//                     {currState === "Sign Up" && (
//                         <input
//                             type='text'
//                             name='name'
//                             placeholder='Your name'
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     )}
//                     <input
//                         type='email'
//                         name='email'
//                         placeholder='Your email'
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                     />
//                     <input
//                         type='password'
//                         name='password'
//                         placeholder='Password'
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">
//                     {currState === "Sign Up" ? "Create account" : "Login"}
//                 </button>
//                 <div className='login-popup-condition'>
//                     <input
//                         type='checkbox'
//                         name='agreeToTerms'
//                         checked={formData.agreeToTerms}
//                         onChange={handleInputChange}
//                         required
//                     />
//                     <p>By continuing, I agree to the terms of use & privacy policy</p>
//                 </div>
//                 {currState === "Login" ? (
//                     <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//                 ) : (
//                     <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default LoginPopup;

// import React, { useState, useEffect } from 'react';
// import './LoginPopup.css';
// import { assets } from '../../assets/assets';

// const LoginPopup = ({ setShowLogin }) => {
//     const [currState, setCurrState] = useState("Login");
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         agreeToTerms: false
//     });
//     const [userName, setUserName] = useState('');

//     useEffect(() => {
//         // Check if there's user data in local storage
//         const storedSignUpData = JSON.parse(localStorage.getItem('signUpData'));
//         const storedLoginData = JSON.parse(localStorage.getItem('loginData'));

//         if (storedSignUpData && storedSignUpData.name) {
//             setUserName(storedSignUpData.name);
//         } else if (storedLoginData && storedLoginData.email) {
//             setUserName(storedLoginData.email.split('@')[0]); // Fallback to email name if not signed up
//         }
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if (formData.agreeToTerms) {
//             if (currState === "Login") {
//                 localStorage.setItem('loginData', JSON.stringify({
//                     email: formData.email,
//                     password: formData.password
//                 }));
//                 setUserName(formData.email.split('@')[0]); // Set username from email
//                 alert('Login data saved to local storage');
//             } else {
//                 localStorage.setItem('signUpData', JSON.stringify({
//                     name: formData.name,
//                     email: formData.email,
//                     password: formData.password
//                 }));
//                 setUserName(formData.name); // Set username from sign up data
//                 alert('Sign-up data saved to local storage');
//             }
//             setShowLogin(false);
//         } else {
//             alert('You must agree to the terms and conditions');
//         }
//     };

//     return (
//         <div className='login-popup'>
//             <form className='login-popup-container' onSubmit={handleFormSubmit}>
//                 <div className='login-popup-title'>
//                     <h2>{currState}</h2>
//                     <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
//                 </div>
//                 <div className='login-popup-inputs'>
//                     {currState === "Sign Up" && (
//                         <input
//                             type='text'
//                             name='name'
//                             placeholder='Your name'
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             required
//                         />
//                     )}
//                     <input
//                         type='email'
//                         name='email'
//                         placeholder='Your email'
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                     />
//                     <input
//                         type='password'
//                         name='password'
//                         placeholder='Password'
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">
//                     {userName || (currState === "Sign Up" ? "Create account" : "Login")}
//                 </button>
//                 <div className='login-popup-condition'>
//                     <input
//                         type='checkbox'
//                         name='agreeToTerms'
//                         checked={formData.agreeToTerms}
//                         onChange={handleInputChange}
//                         required
//                     />
//                     <p>By continuing, I agree to the terms of use & privacy policy</p>
//                 </div>
//                 {currState === "Login" ? (
//                     <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//                 ) : (
//                     <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//                 )}
//             </form>
//         </div>
//     );
// };

// export default LoginPopup;