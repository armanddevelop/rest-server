interface IUser {
  name: string;
  email: string;
  password: string;
  role: string;
  img?: string;
  state?: boolean;
  google?: boolean;
}

export type User = IUser;
