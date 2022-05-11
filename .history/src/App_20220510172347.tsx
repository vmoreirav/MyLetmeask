import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

import { AuthContextProvider } from './context/AuthContext'
import { AdminRoom } from "./pages/AdminRoom";


function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
        <Route path="/rooms/:id" element={<Room />} />

        <Route path="/admin/rooms/:id" element={<AdminRoom />} />
      </Routes>  
    </AuthContextProvider> 
    </BrowserRouter>
  );
}

export default App;


//Componente é uma função que devolve um HTML
//Propriedade são informações que são passadas para um componente para ele se comportar de uma forma diferente, iguais atributos no HTML. Recebe qualquer tipo de informação no ReactJS.
//Estado é uma informação mantida por um componente de dentro do React. Sempre que uma informação ela não permene com o mesmo valor durante todo o uso da aplicação.