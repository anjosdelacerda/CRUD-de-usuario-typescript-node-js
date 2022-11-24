import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userDeleteService = async (id: string) => {
  if (!id) {
    throw new Error("Uusário não pode ser encontrado");
  }

  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  console.log(account, "1: teste userdelete");

  if (!account) {
    throw new Error("Usuário não pode ser encontrado");
  }

  await userRepository.delete(account!.id);

  return true;
};

export default userDeleteService;
