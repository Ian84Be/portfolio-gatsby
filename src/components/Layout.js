import React, { useContext } from 'react';
import { LightContext } from '../context/LightContext';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import Typography from '../styles/Typography';
import Projects from './Projects';

export default function Layout({ children }) {
  const { lightMode } = useContext(LightContext);
  return (
    <>
      <GlobalStyles lightMode={lightMode} />
      <Typography />

      <Header />
      {children}
      <Projects />
      <Footer />
    </>
  );
}
