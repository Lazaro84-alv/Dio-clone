import React from 'react';
import { Link } from "react-router-dom";

import { Button } from '../../components/Button';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Button title="Teste 1" />
      <Button variant="secondary" title="Teste 2" />
      <Link to="/login"> Ir para o login</Link>
    </>
  )
}

export { Home }
