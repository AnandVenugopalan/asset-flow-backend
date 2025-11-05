export class LoginDto {
  username: string;
  password: string;
}

export class RegisterDto {
  username: string;
  email: string;
  password: string;
  role?: string;
  department?: string;
}

export class RoleDto {
  name: string;
  permissions: string[];
}
