/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IUser } from '../types/user';
import { IAuthContext, IAuthContextProviderProps, ILoginData } from './types';
import { api } from '../services/api';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(
        `/users?email=${loginData.email}&password=${loginData.password}`,
      );

      if (data.length === 1) {
        setUser(data[0]);
        navigate('/feed');
        return;
      }
      alert('Usuário ou senha inválido');
    } catch (e) {
      alert('Houve um erro, tente novamente.');
    }
  };

  function handleSignOut() {
    setUser({} as IUser);
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}
