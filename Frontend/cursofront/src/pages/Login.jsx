import {
  Cabecalho,
  Logo,
  Titulo,
  Texto,
  LinkAmarelo,
  Botao,
  LogoArea,
  Campo,
  CampoSenhaContainer,
  CampoSenha,
  IconeOlho,
} from "../Style";
import logo from "/logo.png";
import olho from "/olho.png";
import { useState } from "react";

function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <>
      <Cabecalho>
        <LogoArea>
          <Logo src={logo} alt="Logo" />
        </LogoArea>
      </Cabecalho>

      <Titulo>LOGIN</Titulo>

      <Campo type="email" placeholder="E-mail" />

      <CampoSenhaContainer>
        <CampoSenha
          type={mostrarSenha ? "text" : "password"}
          placeholder="Senha"
        />
        <IconeOlho
          src={olho}
          alt="Mostrar senha"
          onClick={() => setMostrarSenha((prev) => !prev)}
        />
      </CampoSenhaContainer>

      <Texto>
        Não tem login? Faça seu cadastro{" "}
        <LinkAmarelo to="/cadastro">aqui.</LinkAmarelo>
      </Texto>

      <Botao>ENTRAR</Botao>
    </>
  );
}

export default Login;
