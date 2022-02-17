import { Link } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import validator from 'validator'
import { useDispatch, useSelector } from "react-redux";
import { RemoveError, setError } from "../../actions/ui";
import { startRegisterEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgErrors } = useSelector( state => state.ui)
    console.log( msgErrors )




    const [ formValues, handleInputChange ] = useForm({
        name:'juan',
        email:'juan@gmail.com',
        password1:'123456',
        password2:'123456',
    })

    const {name, email, password1, password2} = formValues

    const handleRegister = ( e ) =>{
        e.preventDefault()
        if ( isFormValid ()) {
            dispatch(startRegisterEmailPasswordName(email, password1, name))
        }
    }

    const isFormValid = () =>{

        if (name.trim().length === 0) {
            dispatch( setError('name is requerid'))
            return false;
        }else if (!validator.isEmail(email)) {
            dispatch( setError('email is not valid'))

            return false;
        
        }else if (password1 !== password2 && password1.length < 5) {
            dispatch( setError('pass1 is diff pass2  & min 6 characters'))

            return false;
        }
        dispatch(RemoveError())
        return true;
    }

    return (
        <div className="auth__main">
            <div className="auth__box-container">

                <h3 className="auth__title">Register</h3>

                <form onSubmit={ handleRegister }>
                    {
                        msgErrors &&
                        (
                            <div className='auth__alert-error'>
                                {msgErrors}
                            </div>
                        )    
                    }

                    <input 
                        type='text'
                        placeholder='Name'
                        name='name'
                        className='auth__input'
                        autoComplete="off"
                        value={name}
                        onChange={ handleInputChange }
                    />

                    <input 
                        type='text'
                        placeholder='Email'
                        name='email'
                        className='auth__input'
                        autoComplete="off"
                        value={email}
                        onChange={ handleInputChange }
                    />

                    <input 
                        type='password'
                        placeholder='Password'
                        name='password1'
                        className='auth__input'
                        value={password1}
                        onChange={ handleInputChange }
                    />

                    <input 
                        type='password'
                        placeholder='Confirm Password'
                        name='password2'
                        className='auth__input'
                        value={password2}
                        onChange={ handleInputChange }
                    />
                    
                    <button
                        type='submit'
                        className='btn btn-primary btn-block mb-5'
                    >
                        Register
                    </button>


                   

                    <Link className="link " to='/login'>
                        Already Register
                    </Link>

                </form>
            </div>
        </div>
    );
};
