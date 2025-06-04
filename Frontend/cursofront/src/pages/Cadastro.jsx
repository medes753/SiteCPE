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

function Cadastro() {
  const [mostrarSenha1, setMostrarSenha1] = useState(false);
  const [mostrarSenha2, setMostrarSenha2] = useState(false);

  return (
    <>
      <Cabecalho>
        <LogoArea>
          <Logo src={logo} alt="Logo" />
        </LogoArea>
      </Cabecalho>

      <Titulo>CADASTRO</Titulo>

      <Campo type="text" placeholder="Nome" />
      <Campo type="email" placeholder="E-mail" />
      <Campo type="text" placeholder="Cargo" />

      <CampoSenhaContainer>
        <CampoSenha
          type={mostrarSenha1 ? "text" : "password"}
          placeholder="Senha"
        />
        <IconeOlho
          src={olho}
          alt="Mostrar senha"
          onClick={() => setMostrarSenha1((prev) => !prev)}
        />
      </CampoSenhaContainer>

      <CampoSenhaContainer>
        <CampoSenha
          type={mostrarSenha2 ? "text" : "password"}
          placeholder="Repita sua senha"
        />
        <IconeOlho
          src={olho}
          alt="Mostrar senha"
          onClick={() => setMostrarSenha2((prev) => !prev)}
        />
      </CampoSenhaContainer>

      <Texto>
        Já tem uma conta? Faça o login{" "}
        <LinkAmarelo to="/login">aqui.</LinkAmarelo>
      </Texto>

      <Botao>CRIAR CONTA</Botao>
    </>
  );
}

export default Cadastro;
