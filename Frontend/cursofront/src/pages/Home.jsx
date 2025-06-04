import {
  Cabecalho,
  Menu,
  Logo,
  MenuLink,
  LogoLink,
  LogoArea,
  MenuArea,
  TabelaContainer,
  Tabela,
  CabecalhoTabela,
  Linha,
  Celula,
  Badge,
  Lixeira,
  CarrosselContainer,
  Slide,
  Seta,
  BotaoLogin,
  BotaoLoginTabela,
} from "../Style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png";
import imagem1 from "/paisagem1.png";
import imagem2 from "/paisagem2.png";
import imagem3 from "/paisagem3.png";
import { Trash2 } from "lucide-react";

function Home() {
  const imagens = [imagem1, imagem2, imagem3];
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const avancar = () => setIndex((index + 1) % imagens.length);
  const voltar = () => setIndex((index - 1 + imagens.length) % imagens.length);

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
      <CarrosselContainer>
        <Seta onClick={voltar}>◀</Seta>
        <Slide src={imagens[index]} alt={`Slide ${index + 1}`} />
        <Seta onClick={avancar}>▶</Seta>
      </CarrosselContainer>

      <TabelaContainer>
        <BotaoLoginTabela>
          <BotaoLogin onClick={() => navigate("/login")}>
            Fazer login
          </BotaoLogin>
        </BotaoLoginTabela>

        <Tabela>
          <thead>
            <CabecalhoTabela>
              <Celula>MEMBRO</Celula>
              <Celula>CHEGADA</Celula>
              <Celula>TEMPO</Celula>
              <Celula></Celula>
            </CabecalhoTabela>
          </thead>
          <tbody>
            <Linha>
              <Celula>
                Mariana Rabelo
                <br />
                <span style={{ color: "#ffe712" }}>
                  Gerente de Recrutamento e Seleção
                </span>
              </Celula>
              <Celula>
                <Badge>22:34</Badge>
              </Celula>
              <Celula>
                <Badge>01:34</Badge>
              </Celula>
              <Celula>
                <Lixeira>
                  <Trash2 size={22} />
                </Lixeira>
              </Celula>
            </Linha>
            <Linha>
              <Celula>
                Oswaldo Neto
                <br />
                <span style={{ color: "#ffe712" }}>Dev Líder</span>
              </Celula>
              <Celula>
                <Badge>22:34</Badge>
              </Celula>
              <Celula>
                <Badge>01:34</Badge>
              </Celula>
              <Celula>
                <Lixeira>
                  <Trash2 size={22} />
                </Lixeira>
              </Celula>
            </Linha>
            <Linha>
              <Celula>
                João Pirajá
                <br />
                <span style={{ color: "#ffe712" }}>Dev Líder</span>
              </Celula>
              <Celula>
                <Badge>22:34</Badge>
              </Celula>
              <Celula>
                <Badge>01:34</Badge>
              </Celula>
              <Celula>
                <Lixeira>
                  <Trash2 size={22} />
                </Lixeira>
              </Celula>
            </Linha>
          </tbody>
        </Tabela>
      </TabelaContainer>
    </>
  );
}

export default Home;
