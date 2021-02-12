import React, { useContext } from 'react';
import { LightContext } from '../context/LightContext';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  const { lightMode } = useContext(LightContext);
  return (
    <>
      <GlobalStyles lightMode={lightMode} />
      <Typography />

      <Header />
      {children}
    </>
  );
}
