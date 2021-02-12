import React from 'react';
import Layout from './src/components/Layout';
import { LightProvider } from './src/context/LightContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <LightProvider>{element}</LightProvider>;
}
