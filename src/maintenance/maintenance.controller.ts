import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiBody } from '@nestjs/swagger';
import { MaintenanceScheduleDto, MaintenanceLogDto, SparePartDto, ContractDto } from '../dtos/maintenance.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Maintenance')
@Controller('maintenance')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MaintenanceController {
	// Schedules
		@Get('schedules')
		@ApiOperation({ summary: 'Get all maintenance schedules' })
		@ApiQuery({ name: 'page', required: false, type: Number })
		@ApiQuery({ name: 'limit', required: false, type: Number })
		@ApiQuery({ name: 'sort', required: false, type: String })
		@ApiQuery({ name: 'filter', required: false, type: String })
		@ApiResponse({ status: 200, description: 'List of maintenance schedules.' })
		@Roles('Admin', 'Maintenance Manager', 'Viewer')
		getSchedules(
			@Query('page') page?: number,
			@Query('limit') limit?: number,
			@Query('sort') sort?: string,
			@Query('filter') filter?: string
		): any {
			return { message: 'List maintenance schedules', page, limit, sort, filter };
		}

		@Post('schedules')
		@ApiOperation({ summary: 'Create a maintenance schedule' })
		@ApiBody({ type: MaintenanceScheduleDto })
		@ApiResponse({ status: 201, description: 'Maintenance schedule created.' })
		@Roles('Admin', 'Maintenance Manager')
		createSchedule(@Body() dto: MaintenanceScheduleDto): any {
			if (!dto) {
				throw new HttpException('Invalid schedule data', HttpStatus.BAD_REQUEST);
			}
			return { message: 'Maintenance schedule created', data: dto };
		}

		@Put('schedules/:id')
		@ApiOperation({ summary: 'Update a maintenance schedule' })
		@ApiBody({ type: MaintenanceScheduleDto })
		@ApiResponse({ status: 200, description: 'Maintenance schedule updated.' })
		@Roles('Admin', 'Maintenance Manager')
		updateSchedule(@Param('id') id: string, @Body() dto: MaintenanceScheduleDto): any {
			if (!id || !dto) {
				throw new HttpException('Missing id or data', HttpStatus.BAD_REQUEST);
			}
			return { message: `Maintenance schedule ${id} updated`, data: dto };
		}

		@Delete('schedules/:id')
        @ApiOperation({ summary: 'Delete a maintenance schedule' })
        @ApiResponse({ status: 200, description: 'Maintenance schedule deleted.' })
		@Roles('Admin')
		deleteSchedule(@Param('id') id: string): any {
			if (!id) {
				throw new HttpException('Missing id', HttpStatus.BAD_REQUEST);
			}
			return { message: `Maintenance schedule ${id} deleted` };
		}

	// Logs
		@Get('logs')
		@ApiOperation({ summary: 'Get all maintenance logs' })
		@ApiQuery({ name: 'page', required: false, type: Number })
		@ApiQuery({ name: 'limit', required: false, type: Number })
		@ApiQuery({ name: 'sort', required: false, type: String })
		@ApiQuery({ name: 'filter', required: false, type: String })
		@ApiResponse({ status: 200, description: 'List of maintenance logs.' })
		@Roles('Admin', 'Maintenance Manager', 'Viewer')
		getLogs(
			@Query('page') page?: number,
			@Query('limit') limit?: number,
			@Query('sort') sort?: string,
			@Query('filter') filter?: string
		): any {
			return { message: 'List maintenance logs', page, limit, sort, filter };
		}

		@Post('logs')
		@ApiOperation({ summary: 'Create a maintenance log' })
		@ApiBody({ type: MaintenanceLogDto })
		@ApiResponse({ status: 201, description: 'Maintenance log created.' })
		@Roles('Admin', 'Maintenance Manager')
		createLog(@Body() dto: MaintenanceLogDto): any {
			return 'Create maintenance log';
		}

		@Put('logs/:id')
		@ApiOperation({ summary: 'Update a maintenance log' })
		@ApiBody({ type: MaintenanceLogDto })
		@ApiResponse({ status: 200, description: 'Maintenance log updated.' })
		@Roles('Admin', 'Maintenance Manager')
		updateLog(@Param('id') id: string, @Body() dto: MaintenanceLogDto): any {
			return `Update maintenance log ${id}`;
		}

		@Delete('logs/:id')
        @ApiOperation({ summary: 'Delete a maintenance log' })
        @ApiResponse({ status: 200, description: 'Maintenance log deleted.' })
		@Roles('Admin')
		deleteLog(@Param('id') id: string): any {
			return `Delete maintenance log ${id}`;
		}

	// Spare Parts
		@Get('spare-parts')
		@ApiOperation({ summary: 'Get all spare parts' })
		@ApiQuery({ name: 'page', required: false, type: Number })
		@ApiQuery({ name: 'limit', required: false, type: Number })
		@ApiQuery({ name: 'sort', required: false, type: String })
		@ApiQuery({ name: 'filter', required: false, type: String })
		@ApiResponse({ status: 200, description: 'List of spare parts.' })
		@Roles('Admin', 'Maintenance Manager', 'Viewer')
		getSpareParts(
			@Query('page') page?: number,
			@Query('limit') limit?: number,
			@Query('sort') sort?: string,
			@Query('filter') filter?: string
		): any {
			return { message: 'List spare parts', page, limit, sort, filter };
		}

		@Post('spare-parts')
		@ApiOperation({ summary: 'Create a spare part' })
		@ApiBody({ type: SparePartDto })
		@ApiResponse({ status: 201, description: 'Spare part created.' })
		@Roles('Admin', 'Maintenance Manager')
		createSparePart(@Body() dto: SparePartDto): any {
			return 'Create spare part';
		}

		@Put('spare-parts/:id')
		@ApiOperation({ summary: 'Update a spare part' })
		@ApiBody({ type: SparePartDto })
		@ApiResponse({ status: 200, description: 'Spare part updated.' })
		@Roles('Admin', 'Maintenance Manager')
		updateSparePart(@Param('id') id: string, @Body() dto: SparePartDto): any {
			return `Update spare part ${id}`;
		}

		@Delete('spare-parts/:id')
        @ApiOperation({ summary: 'Delete a spare part' })
        @ApiResponse({ status: 200, description: 'Spare part deleted.' })
		@Roles('Admin')
		deleteSparePart(@Param('id') id: string): any {
			return `Delete spare part ${id}`;
		}

	// Contracts
		@Get('contracts')
		@ApiOperation({ summary: 'Get all maintenance contracts' })
		@ApiQuery({ name: 'page', required: false, type: Number })
		@ApiQuery({ name: 'limit', required: false, type: Number })
		@ApiQuery({ name: 'sort', required: false, type: String })
		@ApiQuery({ name: 'filter', required: false, type: String })
		@ApiResponse({ status: 200, description: 'List of maintenance contracts.' })
		@Roles('Admin', 'Maintenance Manager', 'Viewer')
		getContracts(): any {
			return 'List contracts';
		}

		@Post('contracts')
		@ApiOperation({ summary: 'Create a maintenance contract' })
		@ApiBody({ type: ContractDto })
		@ApiResponse({ status: 201, description: 'Maintenance contract created.' })
		@Roles('Admin', 'Maintenance Manager')
		createContract(@Body() dto: ContractDto): any {
			return 'Create contract';
		}

		@Put('contracts/:id')
		@ApiOperation({ summary: 'Update a maintenance contract' })
		@ApiBody({ type: ContractDto })
		@ApiResponse({ status: 200, description: 'Maintenance contract updated.' })
		@Roles('Admin', 'Maintenance Manager')
		updateContract(@Param('id') id: string, @Body() dto: ContractDto): any {
			return `Update contract ${id}`;
		}

		@Delete('contracts/:id')
        @ApiOperation({ summary: 'Delete a maintenance contract' })
        @ApiResponse({ status: 200, description: 'Maintenance contract deleted.' })
		@Roles('Admin')
		deleteContract(@Param('id') id: string): any {
			return `Delete contract ${id}`;
		}
	}
// ...existing code...
