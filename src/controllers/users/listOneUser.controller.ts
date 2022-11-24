import { Request, Response } from "express";
import listOneUserService from "../../services/users/listOneUser.service";

const listOneUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await listOneUserService(id);

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default listOneUserController;
