import { IsEmail, IsNotEmpty, IsEnum, IsString, IsOptional } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEnum(UserRole)
  role: UserRole;
}

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}

export class UserDto {
  id?: string;
  username: string;
  email: string;
  role: string;
  department?: string;
}

export class RoleDto {
  id?: string;
  name: string;
  permissions: string[];
}

export class DepartmentDto {
  id?: string;
  name: string;
}