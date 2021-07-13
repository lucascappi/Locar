import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom/';
import { useAuth } from '../hooks/useAuth';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Rent from '../pages/Rent';

export default function Routes(){
    const{ user } = useAuth();

    return(
        <>
            { user.id ? 
                <Switch>
                    <Route path="/" exact component={Home}/>

                    <Route path="/alugar/:id" component={Rent}/>

                    <Route path="*">
                        <Redirect to="/"/>
                    </Route>
                </Switch> :
                <Switch>
                    <Route path="/login" component={Login}/>

                    <Route path="*">
                        <Redirect to="/login"/>
                    </Route>
                </Switch>
            }   
        </>
    );
}