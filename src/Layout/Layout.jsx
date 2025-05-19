import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Container>
      <header>{/* <NavBar /> */}</header>
      <main>
        <Outlet />
        {/* un componente con un header y footer que se mantendrán en varias páginas. Sin embargo, el elemento main cambia, pues debe renderizarse un elemento diferente según la ruta. En estos casos, podemos insertar el componente outlet de React Router ( react-router outlet ) para dejar un espacio libre en el que se renderizarán distintos componentes según la ruta. */}
      </main>
      <footerZ></footerZ>
    </Container>
  );
};
