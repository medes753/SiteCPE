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
import { useForm } from "react-hook-form";
import logo from "/logo.png";
import olho from "/olho.png";
import { useState } from "react";
import { useCreateUser, useGetUsers } from "../hooks/user";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { userVallidationSchema } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";

function Cadastro() {
  const [mostrarSenha1, setMostrarSenha1] = useState(false);
  const [mostrarSenha2, setMostrarSenha2] = useState(false);
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userVallidationSchema) });

  const { mutate: postUser, isPending } = useCreateUser({
    onSuccess: () => {
      toast.success("Usuário cadastrado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => {
      toast.error(err.message || "Erro ao criar usuário");
    },
  });

  const { data: users, isLoading } = useGetUsers({});

  function response(data) {
    const { senha2: _, ...userData } = data;
    userData.status = "ativo";
    console.log("Dados enviados para criar usuário:", userData);
    postUser(userData);
    reset();
  }

  return (
    <>
      <Cabecalho>
        <LogoArea>
          <Logo src={logo} alt="Logo" />
        </LogoArea>
      </Cabecalho>

      <Titulo>CADASTRO</Titulo>
      <form onSubmit={handleSubmit(response)}>
        <div>
          <Campo type="text" placeholder="Nome" {...register("nome")} />
          {errors.nome && <p>{errors.nome.message}</p>}
        </div>

        <div>
          <Campo type="email" placeholder="E-mail" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <Campo type="text" placeholder="Cargo" {...register("cargo")} />
          {errors.cargo && <p>{errors.cargo.message}</p>}
        </div>

        <div>
          <CampoSenhaContainer>
            <CampoSenha
              type={mostrarSenha1 ? "text" : "password"}
              placeholder="Senha"
              {...register("senha")}
            />
            <IconeOlho
              src={olho}
              alt="Mostrar senha"
              onClick={() => setMostrarSenha1((prev) => !prev)}
            />
          </CampoSenhaContainer>
          {errors.senha && <p>{errors.senha.message}</p>}
        </div>

        <div>
          <CampoSenhaContainer>
            <CampoSenha
              type={mostrarSenha2 ? "text" : "password"}
              placeholder="Repita sua senha"
              {...register("senha2")}
            />
            <IconeOlho
              src={olho}
              alt="Mostrar senha"
              onClick={() => setMostrarSenha2((prev) => !prev)}
            />
          </CampoSenhaContainer>
          {errors.senha2 && <p>{errors.senha2.message}</p>}
        </div>

        <Texto>
          Já tem uma conta? Faça o login{" "}
          <LinkAmarelo to="/login">aqui.</LinkAmarelo>
        </Texto>

        <Botao disabled={isPending}>CRIAR CONTA</Botao>

        {isLoading ? (
          <p>carregando</p>
        ) : (
          users?.map((user) => <div key={user._id}>{user.nome}</div>) || (
            <p>Sem dados</p>
          )
        )}
      </form>
    </>
  );
}

export default Cadastro;
