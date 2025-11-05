import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { UserDto, RoleDto, DepartmentDto } from '../dtos/user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
	// Users CRUD
	@Get()
	@Roles('Admin', 'Department Head', 'Viewer')
	getUsers(): any {
		return 'List users';
	}

	@Post()
	@Roles('Admin')
	createUser(@Body() dto: UserDto): any {
		return 'Create user';
	}

	@Put(':id')
	@Roles('Admin')
	updateUser(@Param('id') id: string, @Body() dto: UserDto): any {
		return `Update user ${id}`;
	}

	@Delete(':id')
	@Roles('Admin')
	deleteUser(@Param('id') id: string): any {
		return `Delete user ${id}`;
	}

	// Roles
	@Get('roles')
	@Roles('Admin')
	getRoles(): any {
		return 'List roles';
	}

	@Post('roles')
	@Roles('Admin')
	createRole(@Body() dto: RoleDto): any {
		return 'Create role';
	}

	// Departments
	@Get('departments')
	@Roles('Admin', 'Department Head', 'Viewer')
	getDepartments(): any {
		return 'List departments';
	}

	@Post('departments')
	@Roles('Admin')
	createDepartment(@Body() dto: DepartmentDto): any {
		return 'Create department';
	}
}
