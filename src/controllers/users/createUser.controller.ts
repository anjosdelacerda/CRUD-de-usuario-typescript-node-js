import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;

    const user = await createUserService({ name, email, password, age });

    const newUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default createUserController;
