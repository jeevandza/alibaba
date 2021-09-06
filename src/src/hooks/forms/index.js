import {useState} from 'react'
import { useHistory } from 'react-router';
import validateInfo from '../../validate';




// axios.post("http://192.168.0.110:5000/register", {
//      "email": values.email,
//      "passoword":password,
//      "passowrd2":password2
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//  });




const UseForms = () =>{
    const history = useHistory();
 
    const [values, setValues] = useState({
        email:'',
        password:'',
        password2:''
        
    });
    const [errors, setErrors] = useState ({})

    const handleChange = e =>{
        const {name, value} = e.target; 
        setValues({
            ...values, 
            [name]: value
        });     
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const _errors = validateInfo(values).errors
        setErrors(_errors);
        
        if(!_errors.email && !_errors.password && !_errors.password2 ){
            history.push("/please-check-email")
        }
    }

    const handleLogin = (e)=>{
        e.preventDefault();
        const _errors = validateInfo(values).errors
        setErrors(_errors);
        
        if(!_errors.email && !_errors.password  ){
            history.push("/home" )
        }
    }
  


    return {handleChange, handleSubmit,handleLogin, values, errors };
}

export default UseForms;