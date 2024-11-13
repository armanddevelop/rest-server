import bcryptjs from "bcryptjs";

export const encryptPass = (password: string) => {
  const salt = bcryptjs.genSaltSync();
  return bcryptjs.hashSync(password, salt);
};
