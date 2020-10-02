import React from "react";
import AppContainer from "./components/Container";
import { TodoContextProvider } from "./context/TodoContext";

const App = () => (
  <TodoContextProvider>
    <AppContainer></AppContainer>
  </TodoContextProvider>
);

export default App;
