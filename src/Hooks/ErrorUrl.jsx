import { Navigate } from "react-router-dom";


export const ErrorUrl = () => {
    return (
        <div>
            <Navigate to='/login' />
        </div>
    );
};


