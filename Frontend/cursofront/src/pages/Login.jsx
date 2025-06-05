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
  ModalOverlay,
  ModalBox,
  ModalTitulo,
  ModalTexto,
  ModalBotao,
  FecharModal,
} from "../Style";
import logo from "/logo.png";
import olho from "/olho.png";
import { useState } from "react";

function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

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

      <Botao onClick={abrirModal}>ENTRAR</Botao>

      {modalAberto && (
        <ModalOverlay>
          <ModalBox>
            <FecharModal onClick={fecharModal}>×</FecharModal>
            <ModalTitulo>Você deseja mesmo fazer login?</ModalTitulo>
            <ModalTexto>
              Tem certeza que você deseja fazer esse login?
            </ModalTexto>
            <ModalBotao
              onClick={() => {
                fecharModal();
                console.log("Login confirmado");
              }}
            >
              LOGIN
            </ModalBotao>
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  );
}

export default Login;
