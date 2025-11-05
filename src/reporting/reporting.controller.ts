import { Controller, Get, Body, Query, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiBody } from '@nestjs/swagger';
import { SummaryReportDto, AgingReportDto, CostReportDto, DepreciationReportDto } from '../dtos/reporting.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Reporting')
@Controller('reports')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ReportingController {
	@Get('summary')
	@ApiOperation({ summary: 'Get summary report' })
	@ApiQuery({ name: 'page', required: false, type: Number })
	@ApiQuery({ name: 'limit', required: false, type: Number })
	@ApiQuery({ name: 'sort', required: false, type: String })
	@ApiQuery({ name: 'filter', required: false, type: String })
	@ApiBody({ type: SummaryReportDto })
	@ApiResponse({ status: 200, description: 'Summary report.' })
	@Roles('Admin', 'Asset Manager', 'Viewer')
getSummary(
	@Query('page') page?: number,
	@Query('limit') limit?: number,
	@Query('sort') sort?: string,
	@Query('filter') filter?: string,
	@Body() dto?: SummaryReportDto
): any {
	if (!dto) {
	  throw new HttpException('Invalid summary report data', HttpStatus.BAD_REQUEST);
	}
	return { message: 'Summary report', page, limit, sort, filter, dto };
}

	@Get('aging')
	@ApiOperation({ summary: 'Get aging report' })
	@ApiQuery({ name: 'page', required: false, type: Number })
	@ApiQuery({ name: 'limit', required: false, type: Number })
	@ApiQuery({ name: 'sort', required: false, type: String })
	@ApiQuery({ name: 'filter', required: false, type: String })
	@ApiBody({ type: AgingReportDto })
	@ApiResponse({ status: 200, description: 'Aging report.' })
	@Roles('Admin', 'Asset Manager', 'Viewer')
getAging(
	@Query('page') page?: number,
	@Query('limit') limit?: number,
	@Query('sort') sort?: string,
	@Query('filter') filter?: string,
	@Body() dto?: AgingReportDto
): any {
	if (!dto) {
	  throw new HttpException('Invalid aging report data', HttpStatus.BAD_REQUEST);
	}
	return { message: 'Aging report', page, limit, sort, filter, dto };
}

	@Get('cost')
	@ApiOperation({ summary: 'Get cost report' })
	@ApiQuery({ name: 'page', required: false, type: Number })
	@ApiQuery({ name: 'limit', required: false, type: Number })
	@ApiQuery({ name: 'sort', required: false, type: String })
	@ApiQuery({ name: 'filter', required: false, type: String })
	@ApiBody({ type: CostReportDto })
	@ApiResponse({ status: 200, description: 'Cost report.' })
	@Roles('Admin', 'Asset Manager', 'Viewer')
getCost(
	@Query('page') page?: number,
	@Query('limit') limit?: number,
	@Query('sort') sort?: string,
	@Query('filter') filter?: string,
	@Body() dto?: CostReportDto
): any {
	if (!dto) {
	  throw new HttpException('Invalid cost report data', HttpStatus.BAD_REQUEST);
	}
	return { message: 'Cost report', page, limit, sort, filter, dto };
}

	@Get('depreciation')
	@ApiOperation({ summary: 'Get depreciation report' })
	@ApiQuery({ name: 'page', required: false, type: Number })
	@ApiQuery({ name: 'limit', required: false, type: Number })
	@ApiQuery({ name: 'sort', required: false, type: String })
	@ApiQuery({ name: 'filter', required: false, type: String })
	@ApiBody({ type: DepreciationReportDto })
	@ApiResponse({ status: 200, description: 'Depreciation report.' })
	@Roles('Admin', 'Asset Manager', 'Finance', 'Viewer')
getDepreciation(
	@Query('page') page?: number,
	@Query('limit') limit?: number,
	@Query('sort') sort?: string,
	@Query('filter') filter?: string,
	@Body() dto?: DepreciationReportDto
): any {
	if (!dto) {
	  throw new HttpException('Invalid depreciation report data', HttpStatus.BAD_REQUEST);
	}
	return { message: 'Depreciation report', page, limit, sort, filter, dto };
}
}
