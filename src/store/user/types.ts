export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface UserState {
  user?: User;
  error: boolean;
}
