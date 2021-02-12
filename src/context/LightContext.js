import React, { useState } from 'react';

const defaultValue = {
  lightMode: false,
  toggleLightMode: () => {},
};

export const LightContext = React.createContext(defaultValue);

export const LightProvider = ({ children }) => {
  const [lightMode, _setLightMode] = useState(false);
  const toggleLightMode = () => _setLightMode(!lightMode);

  return (
    <LightContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </LightContext.Provider>
  );
};
