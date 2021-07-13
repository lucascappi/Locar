import { Link, useRouteMatch } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { FiLogOut } from 'react-icons/fi';
import logo from '../../assets/images/logo.svg';

import { 
    Container, 
    Content, 
    UserContainer
} from "./styles";


export function Header() {
    const match = useRouteMatch({
        path: '/login',
    })
    const { user, logOut} = useAuth();

    return (
        <>
        {  !match &&
            <Container>
                <Content>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>

                    {
                        user.id && (
                            <UserContainer>
                                <div>
                                    Olá,
                                    <strong>
                                        {user.name.split(' ')[0]}
                                    </strong>
                                </div>

                                <span onClick={logOut}>
                                    <strong>
                                        Sair
                                    </strong>
                                    <FiLogOut />
                                </span>
                            </UserContainer>
                        ) 
                    }
                </Content>
            </Container>
        }
        </>
    )
}
