import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [usuarioLogado, setUsuarioLogado] = useState("");

  return (
    <AppContext.Provider
      value={{
        usuarioLogado,
        setUsuarioLogado,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
