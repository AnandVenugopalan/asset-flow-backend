import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiBody } from '@nestjs/swagger';
import { AssignmentDto, CheckInOutDto, UtilizationReportDto } from '../dtos/allocation.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Allocation')
@Controller('allocation')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AllocationController {
	// Assignment
	@Get('assignments')
	@ApiOperation({ summary: 'Get all assignments' })
	@ApiQuery({ name: 'page', required: false, type: Number })
	@ApiQuery({ name: 'limit', required: false, type: Number })
	@ApiQuery({ name: 'sort', required: false, type: String })
	@ApiQuery({ name: 'filter', required: false, type: String })
	@ApiResponse({ status: 200, description: 'List of assignments.' })
	@Roles('Admin', 'Asset Manager', 'Viewer')
	getAssignments(
		@Query('page') page?: number,
		@Query('limit') limit?: number,
		@Query('sort') sort?: string,
		@Query('filter') filter?: string
	): any {
		return { message: 'List assignments', page, limit, sort, filter };
	}

	@Post('assignments')
	@ApiOperation({ summary: 'Create an assignment' })
	@ApiBody({ type: AssignmentDto })
	@ApiResponse({ status: 201, description: 'Assignment created.' })
	@Roles('Admin', 'Asset Manager')
	createAssignment(@Body() dto: AssignmentDto): any {
		if (!dto) {
			throw new HttpException('Invalid assignment data', HttpStatus.BAD_REQUEST);
		}
		return { message: 'Assignment created', data: dto };
	}

	@Put('assignments/:id')
	@ApiOperation({ summary: 'Update an assignment' })
	@ApiBody({ type: AssignmentDto })
	@ApiResponse({ status: 200, description: 'Assignment updated.' })
	@Roles('Admin', 'Asset Manager')
	updateAssignment(@Param('id') id: string, @Body() dto: AssignmentDto): any {
		if (!id || !dto) {
			throw new HttpException('Missing id or data', HttpStatus.BAD_REQUEST);
		}
		return { message: `Assignment ${id} updated`, data: dto };
	}

	@Delete('assignments/:id')
    @ApiOperation({ summary: 'Delete an assignment' })
    @ApiResponse({ status: 200, description: 'Assignment deleted.' })
	@Roles('Admin')
	deleteAssignment(@Param('id') id: string): any {
		if (!id) {
			throw new HttpException('Missing id', HttpStatus.BAD_REQUEST);
		}
		return { message: `Assignment ${id} deleted` };
	}

	// Check-in/out
	@Post('check')
	@ApiOperation({ summary: 'Check-in/out asset' })
	@ApiBody({ type: CheckInOutDto })
	@ApiResponse({ status: 200, description: 'Check-in/out completed.' })
	@Roles('Admin', 'Asset Manager')
	checkInOut(@Body() dto: CheckInOutDto): any {
		return 'Check-in/out asset';
	}

	// Utilization Reports
	@Get('utilization')
	@ApiOperation({ summary: 'Get asset utilization report' })
	@ApiQuery({ name: 'page', required: false, type: Number })
	@ApiQuery({ name: 'limit', required: false, type: Number })
	@ApiQuery({ name: 'sort', required: false, type: String })
	@ApiQuery({ name: 'filter', required: false, type: String })
	@ApiBody({ type: UtilizationReportDto })
	@ApiResponse({ status: 200, description: 'Utilization report.' })
	@Roles('Admin', 'Asset Manager', 'Viewer')
	getUtilization(@Body() dto: UtilizationReportDto): any {
		return 'Utilization report';
	}
}
