import React, { createContext, useContext, useReducer } from "react";
// react 도큐먼트에서 찾아보셈.
// pattern recognition.
// just follow along.
// freak out할 필요가 없음. push through해용.

export const DataLayerContext = createContext();

//children 이 <App/>그 자체임
export const DataLayer = ({ reducer, initialState, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
