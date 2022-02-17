
import {  Route, Routes } from 'react-router-dom';
import { LoginScreem } from '../components/auth/LoginScreem';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { JournalScreen } from '../components/Journal/JournalScreen';
import { ErrorUrl } from '../Hooks/ErrorUrl';





export const DashboardRoute = () => {

   



    return (
        <>

            
            <Routes>
                <Route path="/" element={<JournalScreen />} />
                
                <Route path="/login" element={<LoginScreem />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="*" element={<ErrorUrl />} />
 
            </Routes>
        </>
    );
};
