import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [dispensa, setDispensa] = useState([]);
  const [lista, setLista] = useState([]);
  const [comprados, setComprados] = useState([]);

  // Carrega do AsyncStorage
  useEffect(() => {
    const carregar = async () => {
      const d = await AsyncStorage.getItem('dispensa');
      const l = await AsyncStorage.getItem('lista');
      const c = await AsyncStorage.getItem('comprados');
      if (d) setDispensa(JSON.parse(d));
      if (l) setLista(JSON.parse(l));
      if (c) setComprados(JSON.parse(c));
    };
    carregar();
  }, []);

  // Salva no AsyncStorage
  useEffect(() => {
    AsyncStorage.setItem('dispensa', JSON.stringify(dispensa));
    AsyncStorage.setItem('lista', JSON.stringify(lista));
    AsyncStorage.setItem('comprados', JSON.stringify(comprados));
  }, [dispensa, lista, comprados]);

  return (
    <AppContext.Provider value={{
      dispensa, setDispensa,
      lista, setLista,
      comprados, setComprados
    }}>
      {children}
    </AppContext.Provider>
  );
};
