import { User } from "../../entities/user.entity";
import { IUserCreate, IUser } from "../../interfaces/users";

import { AppDataSource } from "../../data-source";

import { hashSync } from "bcryptjs";

const createUserService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("email already exists");
  }

  const hashPassword = hashSync(password, 10);

  const day = new Date();

  const user = new User();

  user.name = name;
  user.email = email;
  user.password = hashPassword;
  user.age = age;
  user.created_at = day;
  user.updated_at = day;

  userRepository.create(user);

  await userRepository.save(user);

  return user;
};

export default createUserService;
