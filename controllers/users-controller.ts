import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  const { q, name = "no name", apikey, page = 1 } = req.query;
  try {
    res.json({
      msg: "GET hola patches",
      q,
      name,
      apikey,
      page,
    });
  } catch (error) {
    console.error("[getUserControllerError]: ", error);
  }
};
export const editUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    res.json({
      msg: "PUT hola patches",
      id,
    });
  } catch (error) {
    console.error("[editUserControllerError]: ", error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const {
      body: { age, name },
    } = req;
    res.json({
      msg: "POST hola patches",
      name,
      age,
    });
  } catch (error) {
    console.error("createUserControllerError]: ", error);
  }
};

export const editInfoUser = async (req: Request, res: Response) => {
  try {
    res.json({
      msg: "PATCH hola patches",
    });
  } catch (error) {
    console.error("editInfoUserError]: ", error);
  }
};

export const deleteUser = (req: Request, res: Response) => {
  try {
    res.json({
      msg: "DELETE hola patches",
    });
  } catch (error) {
    console.error("deleteUserError]: ", error);
  }
};
