import React, { useState, useEffect }  from 'react'
import { Link , useHistory, useLocation} from 'react-router-dom';
import LoginService from '../services/LoginService';
import Message from '../elements/Message';
import Error from '../elements/Error';
import Swal from 'sweetalert2'
import { getRegisterationStudents } from '../../Apis/apiForRegistration';


import {
    COMMON_FIELDS,
    REGISTRATION_FIELDS,
    LOGIN_FIELDS,
    LOGIN_MESSAGE,
    ERROR_IN_LOGIN,
  } from '../MessageBundle';

function LoginAuthFunctional() {

    const [emailState, setEmailState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    const [errorState, setErrorState] = useState(false)
    const [loginSuccessState, setLoginSuccess] = useState(false)
    const history = useHistory()

    const handleOnChangeUserName = (e) => {
        console.log("car")
        setEmailState(e.target.value);
        console.log(emailState)
    };

    const Swal = require('sweetalert2')
    const handleOnChangePassword = (e) => {
        console.log("bike")
        setPasswordState( e.target.value );
        console.log(passwordState)
        
    };


    const onSubmit = async (e) => {
      e.preventDefault()
      const data = {
        email: emailState,
        password: passwordState,
        id : ''
      };
      console.log(data)
      const loginResult = await LoginService(data);
      if (loginResult !== 200) {
          setErrorState(true)
          setLoginSuccess(false)
      } else {
          console.log(loginResult)
          setErrorState(false)
          /*
          console.log(data.email)
          data.id = '612b86db1bc22a07884603aa'
          console.log(data.id)
          */
          console.log("Checking const gettingEmail = await getRegisterationStudents(data.email)")
          const gettingEmail = await getRegisterationStudents(data.email)
          console.log("Checkec and Fullfilled")
          console.log(gettingEmail)
          var idForStudent = gettingEmail[0]._id
          if((gettingEmail[0].status == "Student") && (gettingEmail[0].confirmation == "Approved")){
            console.log("Condition FullFilled for getting specific Student")
            console.log("got it")
            setLoginSuccess(true)
            console.log(gettingEmail[0])
            history.push({
              pathname : `/student/studentDashboard/${idForStudent}`,
              state: gettingEmail[0]
            })

          }
          else if(gettingEmail[0].confirmation !== "Approved"){
            console.log("not got it")
            Swal.fire("Awaiting Approval Status",
            'You will be able to login once your information has been verified! <br> Please email at azlan@syntics.co for further information', 
            'error')
            //setErrorState(true)
          }
          else{
            Swal.fire("Incorrect Information",
            'The! <br> Please email at azlan@syntics.co for further information!', 
            'error')
          }
          //history.push("/home")
          console.log("Error not hit")
      }
    };





    return (
      <div>
      <section id="hero" className="text-center">

      <div>
        <div className="container-login100" >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-37">
                Sign In As Student
              </span>
              <div className="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
              <input
                    type="text"
                    name="Username"
                    onChange={(e) => handleOnChangeUserName(e)}
                    className="input100"
                    required style={{ borderRadius:"20px", borderStyle:'none' }}
                  />
                <span className="focus-input100" />
              </div>
              <div className="wrap-input100 validate-input m-b-25" data-validate="Enter password">
              <input
                    type="password"
                    name="Password"
                    onChange={(e) => handleOnChangePassword(e)}
                    className="input100"
                    style={{ borderRadius:"20px" , borderStyle:'none'  }}
                    required
                  />
                <span className="focus-input100" />
              </div>
              <div>
              <Link to="/main/reset-password-confirmation" className="text-secondary text-decoration-none " >
                        Forgot your password? 
                </Link>
              </div>
              
              <div className="container-login100-form-btn mt-3" >
                <button className="login100-form-btn" style={{borderStyle : 'none'}} onClick={(e) => onSubmit(e)}>
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        {loginSuccessState && <Message message={LOGIN_MESSAGE}  />}    {' '}
        {errorState && <Error message={ERROR_IN_LOGIN} />}    {' '}
        <div id="dropDownSelect1" />
      </div>
      </section>
    ); 
        </div>
    )
}

export default LoginAuthFunctional
