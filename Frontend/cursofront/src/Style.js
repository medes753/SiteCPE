import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000;
    font-family: "inter", sans-serif;
  }

  #root {
    width: 100%;
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  width: 100%;
  background-color: #ffe712;
  font-family: "inter", sans-serif;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 280px) {
    height: 100px;
    padding: 0 10px;
  }
`;

export const LogoArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

export const MenuArea = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 280px) {
    flex: 3;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 130px;
  align-items: center;

  @media (max-width: 280px) {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 170px;

  @media (max-width: 280px) {
    height: 40px;
  }
`;

export const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 280px) {
    font-size: 12px;
  }
`;

export const Titulo = styled.h2`
  color: #ffe712;
  font-family: "inter", sans-serif;
  font-size: 30px;
  padding-top: 50px;
  text-align: center;
  margin-bottom: 60px;
  letter-spacing: 1px;

  @media (max-width: 280px) {
    font-size: 20px;
    padding-top: 30px;
    margin-bottom: 30px;
  }
`;

export const Texto = styled.p`
  color: white;
  font-family: "inter", sans-serif;
  font-size: 11px;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 280px) {
    font-size: 10px;
    margin-bottom: 30px;
  }
`;

export const LinkAmarelo = styled(Link)`
  color: #ffe712;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 280px) {
    font-size: 12px;
  }
`;

export const Botao = styled.button`
  background-color: #ffe712;
  color: black;
  font-family: "inter", sans-serif;
  font-weight: bold;
  font-size: 22px;
  padding: 7px 12px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-top: -40px;

  @media (max-width: 280px) {
    font-size: 16px;
    padding: 5px 10px;
    margin-top: -20px;
  }
  &:hover {
    color: #ffe712;
    background-color: black;
    border: 1px solid #ffe712;
  }
`;

export const Campo = styled.input`
  display: block;
  margin: 20px auto;
  padding: 10px 18px;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  font-family: "inter", sans-serif;
  width: 40%;
  margin-top: -5px;

  @media (max-width: 280px) {
    font-size: 14px;
    padding: 8px 12px;
    width: 90%;
  }
`;

export const CampoSenhaWrapper = styled.div`
  position: relative;
  width: 40%;
  margin: 20px auto -5px auto;

  @media (max-width: 280px) {
    width: 90%;
  }
`;

export const OlhoBtn = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: black;
  padding: 0;
  user-select: none;

  &:focus {
    outline: none;
  }
`;
export const CampoSenhaContainer = styled.div`
  position: relative;
  width: 40%;
  margin: 20px auto;

  @media (max-width: 280px) {
    width: 90%;
  }
`;

export const CampoSenha = styled.input`
  width: 100%;
  padding: 10px 40px 10px 18px;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  font-family: "inter", sans-serif;

  @media (max-width: 280px) {
    font-size: 14px;
    padding: 8px 40px 8px 12px;
  }
`;

export const IconeOlho = styled.img`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  width: 30px;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 280px) {
    height: 20px;
    width: 26px;
  }
`;

export const CarrosselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  width: 40%;
  position: relative;
`;

export const Slide = styled.img`
  width: 100%;
  max-height: 300px;
  border-radius: 12px;
  object-fit: cover;
`;

export const Seta = styled.button`
  background: none;
  border: none;
  color: #ffe712;
  font-size: 40px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  &:first-child {
    left: -40px;
  }
  &:last-child {
    right: -40px;
  }
`;

export const TabelaContainer = styled.div`
  width: 80%;
  margin: 30px auto;
  border-radius: 12px;
  overflow: hidden;
`;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #1c1c1c;
`;

export const CabecalhoTabela = styled.tr`
  background-color: #ffe712;
  color: black;
  font-weight: bold;
`;

export const Linha = styled.tr`
  border-bottom: 1px solid #444;
  color: white;
`;

export const Celula = styled.td`
  padding: 15px;
  text-align: center;
  font-size: 14px;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border: 1px solid #ffe712;
  border-radius: 10px;
  color: #ffe712;
`;

export const Lixeira = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const BotaoLogin = styled.button`
  padding: 8px 25px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 13px;
  border: 1px solid #ffe712;
  background-color: black;
  color: #ffe712;
  transition: background-color 0.3s ease;

  &:hover {
    color: black;
    background-color: #ffe712;
  }
`;

export const BotaoLoginTabela = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
`;
