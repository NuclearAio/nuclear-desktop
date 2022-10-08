import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';


function PrivateRoute({ children }) {
    const {user} = useContext(AuthContext);
    
    if(!user){
        return <Navigate to="/login" replace={true}/>
    }
    return children;
}

export default PrivateRoute;