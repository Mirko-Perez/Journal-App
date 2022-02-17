import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { firebase } from '../firebase/firebaseConfig'


import { BrowserRouter} from 'react-router-dom';
import {  DashboardRoute } from './DashboardRoute';





export const AppRouter = () => {

    const dispatch = useDispatch()
    const [checking, setChecking] = useState(true)


    useEffect(() => {
      
        firebase.auth().onAuthStateChanged(  ( user )=>{
            
            if (user?.ui) {
                dispatch( login( user.uid, user.displayName ) )
            }

            setChecking(false)

        } )


    }, [dispatch, setChecking])
    

    if (checking) {
        return <h1>Espere...</h1>
    }


    return (
        <BrowserRouter>

            <DashboardRoute />
            
        </BrowserRouter>
    );
};
