import { createContext, useState } from 'react';

const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(
        {
          email: '',
          password: '',
          firstname: '',
          lastname: ''
        }
    );
    
    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            { children }
        </CurrentUserContext.Provider>
    );
}

export default CurrentUserContext;