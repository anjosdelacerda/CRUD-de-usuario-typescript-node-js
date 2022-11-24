import { Request, Response } from "express";
import userDeleteService from "../../services/users/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await userDeleteService(id);

    // if (!user) {
    //   return res.status(404);
    // }

    return res.status(200).json({ message: "User delete with success" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404);
    }
  }
};

export default userDeleteController;
