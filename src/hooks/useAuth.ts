import { useContext } from 'react';
import { AuthContext } from '../context/auth';

export default function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('Não existe um contexto de autenticação');
  }

  return context;
}
