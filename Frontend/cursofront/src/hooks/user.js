import { useQuery, useMutation } from "@tanstack/react-query";
import {
  CreateUser,
  UpdateUser,
  DeleteUser,
  GetUsers,
} from "../services/api/endpoints";
import api from "../services/api/api";

export function useGetUsers({ onSuccess = () => {}, onError = () => {} } = {}) {
  return useQuery({
    queryKey: ["users"],
    queryFn: GetUsers,
    onSuccess,
    onError,
  });
}

export function useCreateUser({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({
    mutationFn: CreateUser,
    onSuccess,
    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        error?.response?.data ||
        error.message ||
        "Erro desconhecido";
      onError(message);
      console.error("Erro na criação do usuário:", error);
    },
  });
}

export function useUpdateUser({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({ mutationFn: UpdateUser, onSuccess, onError });
}

export function useDeleteUser({
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  return useMutation({ mutationFn: DeleteUser, onSuccess, onError });
}

export function useLogin() {
  return useMutation({
    mutationFn: async (dados) => {
      const response = await api.post("/login", dados);
      return response.data;
    },
  });
}
