import { useEffect } from 'react';
import { Loading } from '../../components/Loading';
import { useAuth } from '../../hooks/useAuth';

import { 
    Container, 
    FormContainer 
} from './styles';

export default function Login() {
    const { 
        handleOnChange, 
        handleSubmit,
        values,  
        loading 
    } = useAuth();

    useEffect(() => {
        document.title=`Locar | Login`;
    }, [])

    return (
        <Container>
            <FormContainer>
                <h2>
                    Login / Cadastro
                </h2>
                <p>
                    Faça seu login para alugar carros
                </p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Nome"
                        value={values.name}
                        name="name"
                        onChange={handleOnChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Email"
                        value={values.email}
                        name="email"
                        onChange={handleOnChange}
                    />

                    <button disabled={values.name.length < 3 || values.email.length < 3 || loading}>
                        {
                            loading ? <Loading size="small" color="gray"/> : 'Entrar'
                        }
                    </button>
                </form>
            </FormContainer>
        </Container>
    )
}
