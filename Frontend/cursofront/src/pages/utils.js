import z from "zod";

export const userVallidationSchema = z
  .object({
    nome: z
      .string({ required_error: "É necessário informar o nome" })
      .min(2, { message: "Nome muito curto" })
      .max(60, { message: "Nome muito longo" }),

    email: z
      .string({ required_error: "É necessário informar o e-mail" })
      .email({ message: "E-mail inválido" }),

    cargo: z
      .string({ required_error: "É necessário informar o cargo" })
      .min(2, { message: "Cargo muito curto" })
      .max(60, { message: "Cargo muito longo" }),

    senha: z
      .string({ required_error: "É necessário informar a senha" })
      .min(6, { message: "Senha muito curta" })
      .max(60, { message: "Senha muito longa" }),

    senha2: z
      .string({ required_error: "Confirme a senha" })
      .min(6, { message: "Senha muito curta" })
      .max(60, { message: "Senha muito longa" }),
  })
  .refine((data) => data.senha === data.senha2, {
    path: ["senha2"],
    message: "As senhas não coincidem",
  });

export const loginValidationSchema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});
