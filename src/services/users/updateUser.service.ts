import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import bcrypt from "bcryptjs";

const updateUserService = async (
  id: string,
  name?: string,
  email?: string,
  password?: string,
  age?: number
) => {
  const userRepository = AppDataSource.getRepository(User);

  if (!id) {
    throw new Error("Usário não pode ser encontrado");
  }

  const users = await userRepository.find();

  const day = new Date();

  const account = users.find((user) => user.id === id);

  if (!account) {
    throw new Error("Uusário não pode ser encontrado");
  }

  name !== undefined ? (account!.name = name) : account!.name;
  email !== undefined ? (account!.email = email) : account!.email;
  password !== undefined ? (account!.password = password) : account!.password;
  age !== undefined ? (account!.age = age) : account!.age;

  const dateCreate = account!.created_at;

  await userRepository.update(account!.id, {
    name: name,
    email: email,
    password: password,
    age: age,
    created_at: dateCreate,
    updated_at: day,
  });

  return true;
};

export default updateUserService;
