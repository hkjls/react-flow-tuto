import { useContext, type ReactElement, createContext, useState, type ReactNode } from "react";

type authKeys = {
    name:string,
    password:string
}

const AuthContext = createContext<any>(undefined)

export const AuthProvider=({children}:{children:ReactNode}):ReactElement=>{
    const [name, setName] = useState<string>("")
    const [psswrd, setPsswrd] = useState<string>("")
    const user:authKeys = {
        name: name,
        password: psswrd
    }
    return(
        <>
            <AuthContext.Provider value={{user, setName, setPsswrd}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export const useAuthContext=()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("Context must be used within a Provider")
    }
    return context
}