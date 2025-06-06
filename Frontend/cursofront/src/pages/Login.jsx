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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginValidationSchema } from "./utils";

function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginValidationSchema) });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/login", data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      toast.success("Login realizado com sucesso!");
      navigate("/painel");
    } catch (error) {
      console.error(error);
      toast.error("Credenciais inválidas");
    }
  };

  return (
    <>
      <Cabecalho>
        <LogoArea>
          <Logo src={logo} alt="Logo" />
        </LogoArea>
      </Cabecalho>

      <Titulo>LOGIN</Titulo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Campo type="email" placeholder="E-mail" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <CampoSenhaContainer>
            <CampoSenha
              type={mostrarSenha ? "text" : "password"}
              placeholder="Senha"
              {...register("senha")}
            />
            <IconeOlho
              src={olho}
              alt="Mostrar senha"
              onClick={() => setMostrarSenha((prev) => !prev)}
            />
          </CampoSenhaContainer>
          {errors.senha && <p>{errors.senha.message}</p>}
        </div>

        <Texto>
          Não tem login? Faça seu cadastro{" "}
          <LinkAmarelo to="/cadastro">aqui.</LinkAmarelo>
        </Texto>

        <Botao type="submit">ENTRAR</Botao>
      </form>
    </>
  );
}

export default Login;
