export interface IUser {
  id: any;
  name: string;
  email: string;
  password: string;
  age: number;
  created_at: Date;
  updated_at: Date;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUserUpdate {
  id: string;
  name?: any;
  email?: any;
  password?: any;
  age?: any;
}
