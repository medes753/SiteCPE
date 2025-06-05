import { useQuery, useMutation } from "@tanstack/react-query";
import {
  CreateUser,
  UpdateUser,
  DeleteUser,
  GetUsers,
} from "../services/api/endpoints";

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
  return useMutation({ mutationFn: CreateUser, onSuccess, onError });
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
