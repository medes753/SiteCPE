import {
  Cabecalho,
  Menu,
  Logo,
  MenuLink,
  LogoLink,
  LogoArea,
  MenuArea,
} from "../Style";
import logo from "/logo.png";

function Perfil() {
  return (
    <>
      <Cabecalho>
        <LogoArea>
          <LogoLink to="/">
            <Logo src={logo} alt="Logo" />
          </LogoLink>
        </LogoArea>
        <MenuArea>
          <Menu>
            <MenuLink to="/">HOME</MenuLink>
            <MenuLink to="/perfil">PERFIL</MenuLink>
            <MenuLink to="/usuarios">USUÁRIOS</MenuLink>
          </Menu>
        </MenuArea>
      </Cabecalho>
    </>
  );
}

export default Perfil;
