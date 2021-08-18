import { createContext } from "react"
import { useState } from "react"

export const AuthContext = createContext() 

const AuthProvider = ({children}) => {  

    const [user, setUser] = useState(null)
    const [tokenAuth, setTokenAuth] = useState(null)

    const contextValue ={
        tokenAuth,
        upToken(token){
            setTokenAuth(token)
        },
        user,
        login(user) {
            setUser(user)
            
        },
        logout () {
            setUser(null)
        },
        isLogged() {
            return !! user;
        }
        
    }

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;