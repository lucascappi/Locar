import React, { useState, useContext } from "react";
import { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface AuthContextProps{
    children: ReactNode;
}

interface User extends Values{ 
    id: string;
}

interface Values{
    name: string;
    email: string;
}

interface AuthContextData{
    user: User;
    values: Values;
    loading: boolean;
    handleSubmit: (e: React.FormEvent) => void;
    handleOnChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    logIn: () => Promise<void>;
    logOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthContextProvider({children}: AuthContextProps){
    const[user, setUser] = useState<User>(() => {
        //Check if there's an user saved on storage

        const loggedUser = localStorage.getItem('@User');
    
        if(loggedUser){
            return JSON.parse(loggedUser);
        }

        return {} as User
    });
    const[values, setValues] = useState<Values>({
        name: '',
        email: ''
    });
    const[loading, setLoading] = useState(false);

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>){
        //Set values on input change

        const {name, value} = e.target;
        
        setValues({
            ...values,
            [name]: value
        })
    }

    

    async function logIn(){
        //Create user on database and set it to the state

        const { data } = await api.post('users', values);
        localStorage.setItem('@User', JSON.stringify(data));
        setUser(data);
        setValues({
            name: '',
            email: ''
        });
    }

    async function handleSubmit(e: React.FormEvent){
        //Login form submit function

        e.preventDefault();
        setLoading(true);

        try{
            //Test email pattern

            if(!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}/.test(values.email)){
                throw new Error('Email Inválido');
            } else{
                await logIn();
            }
        } catch (err){
            toast.error(err.message);
        } finally{
            setLoading(false);
        }
    }

    function logOut(){
        // Clean up the user state

        setUser({} as User);
        localStorage.removeItem('@User');
    }

    return(
        <AuthContext.Provider value={{
            user,
            values,
            loading,
            handleOnChange,
            handleSubmit,
            logIn,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}


