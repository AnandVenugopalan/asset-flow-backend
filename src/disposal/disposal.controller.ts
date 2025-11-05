import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiBody } from '@nestjs/swagger';
import { DisposalRequestDto, DisposalApprovalDto, AuctionDto, WriteOffDto } from '../dtos/disposal.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Disposal')
@Controller('disposal')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DisposalController {
	// Disposal Requests
	@Get('requests')
	@ApiOperation({ summary: 'Get all disposal requests' })
	@ApiQuery({ name: 'page', required: false, type: Number })
	@ApiQuery({ name: 'limit', required: false, type: Number })
	@ApiQuery({ name: 'sort', required: false, type: String })
	@ApiQuery({ name: 'filter', required: false, type: String })
	@ApiResponse({ status: 200, description: 'List of disposal requests.' })
	@Roles('Admin', 'Disposal Officer', 'Viewer')
getRequests(
	@Query('page') page?: number,
	@Query('limit') limit?: number,
	@Query('sort') sort?: string,
	@Query('filter') filter?: string
): any {
	// Pass pagination/filter/sort to service
	return { message: 'List disposal requests', page, limit, sort, filter };
	}

	@Post('requests')
	@ApiOperation({ summary: 'Create a disposal request' })
	@ApiBody({ type: DisposalRequestDto })
	@ApiResponse({ status: 201, description: 'Disposal request created.' })
	@Roles('Admin', 'Disposal Officer')
	createRequest(@Body() dto: DisposalRequestDto): any {
			if (!dto) {
				throw new HttpException('Invalid request data', HttpStatus.BAD_REQUEST);
			}
			// ...actual creation logic...
			return { message: 'Disposal request created', data: dto };
	}

	@Put('requests/:id')
	@ApiOperation({ summary: 'Update a disposal request' })
	@ApiBody({ type: DisposalRequestDto })
	@ApiResponse({ status: 200, description: 'Disposal request updated.' })
	@Roles('Admin', 'Disposal Officer')
	updateRequest(@Param('id') id: string, @Body() dto: DisposalRequestDto): any {
			if (!id || !dto) {
				throw new HttpException('Missing id or data', HttpStatus.BAD_REQUEST);
			}
			// ...actual update logic...
			return { message: `Disposal request ${id} updated`, data: dto };
	}

	@Delete('requests/:id')
    @ApiOperation({ summary: 'Delete a disposal request' })
    @ApiResponse({ status: 200, description: 'Disposal request deleted.' })
	@Roles('Admin')
	deleteRequest(@Param('id') id: string): any {
			if (!id) {
				throw new HttpException('Missing id', HttpStatus.BAD_REQUEST);
			}
			// ...actual delete logic...
			return { message: `Disposal request ${id} deleted` };
	}

	// Approvals
	@Get('approvals')
	@ApiOperation({ summary: 'Get all disposal approvals' })
	@ApiQuery({ name: 'page', required: false, type: Number })
	@ApiQuery({ name: 'limit', required: false, type: Number })
	@ApiQuery({ name: 'sort', required: false, type: String })
	@ApiQuery({ name: 'filter', required: false, type: String })
	@ApiResponse({ status: 200, description: 'List of disposal approvals.' })
	@Roles('Admin', 'Disposal Officer', 'Viewer')
getApprovals(
	@Query('page') page?: number,
	@Query('limit') limit?: number,
	@Query('sort') sort?: string,
	@Query('filter') filter?: string
): any {
	return { message: 'List disposal approvals', page, limit, sort, filter };
	}

	@Post('approvals')
	@ApiOperation({ summary: 'Create a disposal approval' })
	@ApiBody({ type: DisposalApprovalDto })
	@ApiResponse({ status: 201, description: 'Disposal approval created.' })
	@Roles('Admin', 'Disposal Officer')
	createApproval(@Body() dto: DisposalApprovalDto): any {
			if (!dto) {
				throw new HttpException('Invalid approval data', HttpStatus.BAD_REQUEST);
			}
			// ...actual creation logic...
			return { message: 'Disposal approval created', data: dto };
	}

	@Put('approvals/:id')
	@ApiOperation({ summary: 'Update a disposal approval' })
	@ApiBody({ type: DisposalApprovalDto })
	@ApiResponse({ status: 200, description: 'Disposal approval updated.' })
	@Roles('Admin', 'Disposal Officer')
	updateApproval(@Param('id') id: string, @Body() dto: DisposalApprovalDto): any {
			if (!id || !dto) {
				throw new HttpException('Missing id or data', HttpStatus.BAD_REQUEST);
			}
			// ...actual update logic...
			return { message: `Disposal approval ${id} updated`, data: dto };
	}

	@Delete('approvals/:id')
    @ApiOperation({ summary: 'Delete a disposal approval' })
    @ApiResponse({ status: 200, description: 'Disposal approval deleted.' })
	@Roles('Admin')
	deleteApproval(@Param('id') id: string): any {
			if (!id) {
				throw new HttpException('Missing id', HttpStatus.BAD_REQUEST);
			}
			// ...actual delete logic...
			return { message: `Disposal approval ${id} deleted` };
	}

	// Auctions
	@Get('auctions')
	@ApiOperation({ summary: 'Get all auctions' })
	@ApiQuery({ name: 'page', required: false, type: Number })
	@ApiQuery({ name: 'limit', required: false, type: Number })
	@ApiQuery({ name: 'sort', required: false, type: String })
	@ApiQuery({ name: 'filter', required: false, type: String })
	@ApiResponse({ status: 200, description: 'List of auctions.' })
	@Roles('Admin', 'Disposal Officer', 'Viewer')
getAuctions(
	@Query('page') page?: number,
	@Query('limit') limit?: number,
	@Query('sort') sort?: string,
	@Query('filter') filter?: string
): any {
	return { message: 'List auctions', page, limit, sort, filter };
	}

	@Post('auctions')
	@ApiOperation({ summary: 'Create an auction' })
	@ApiBody({ type: AuctionDto })
	@ApiResponse({ status: 201, description: 'Auction created.' })
	@Roles('Admin', 'Disposal Officer')
	createAuction(@Body() dto: AuctionDto): any {
			if (!dto) {
				throw new HttpException('Invalid auction data', HttpStatus.BAD_REQUEST);
			}
			// ...actual creation logic...
			return { message: 'Auction created', data: dto };
	}

	@Put('auctions/:id')
	@ApiOperation({ summary: 'Update an auction' })
	@ApiBody({ type: AuctionDto })
	@ApiResponse({ status: 200, description: 'Auction updated.' })
	@Roles('Admin', 'Disposal Officer')
	updateAuction(@Param('id') id: string, @Body() dto: AuctionDto): any {
			if (!id || !dto) {
				throw new HttpException('Missing id or data', HttpStatus.BAD_REQUEST);
			}
			// ...actual update logic...
			return { message: `Auction ${id} updated`, data: dto };
	}

	@Delete('auctions/:id')
    @ApiOperation({ summary: 'Delete an auction' })
    @ApiResponse({ status: 200, description: 'Auction deleted.' })
	@Roles('Admin')
	deleteAuction(@Param('id') id: string): any {
			if (!id) {
				throw new HttpException('Missing id', HttpStatus.BAD_REQUEST);
			}
			// ...actual delete logic...
			return { message: `Auction ${id} deleted` };
	}

	// Write-Offs
	@Get('write-offs')
	@ApiOperation({ summary: 'Get all write-offs' })
	@ApiQuery({ name: 'page', required: false, type: Number })
	@ApiQuery({ name: 'limit', required: false, type: Number })
	@ApiQuery({ name: 'sort', required: false, type: String })
	@ApiQuery({ name: 'filter', required: false, type: String })
	@ApiResponse({ status: 200, description: 'List of write-offs.' })
	@Roles('Admin', 'Disposal Officer', 'Viewer')
getWriteOffs(
	@Query('page') page?: number,
	@Query('limit') limit?: number,
	@Query('sort') sort?: string,
	@Query('filter') filter?: string
): any {
	return { message: 'List write-offs', page, limit, sort, filter };
	}

	@Post('write-offs')
	@ApiOperation({ summary: 'Create a write-off' })
	@ApiBody({ type: WriteOffDto })
	@ApiResponse({ status: 201, description: 'Write-off created.' })
	@Roles('Admin', 'Disposal Officer')
	createWriteOff(@Body() dto: WriteOffDto): any {
			if (!dto) {
				throw new HttpException('Invalid write-off data', HttpStatus.BAD_REQUEST);
			}
			// ...actual creation logic...
			return { message: 'Write-off created', data: dto };
	}

	@Put('write-offs/:id')
	@ApiOperation({ summary: 'Update a write-off' })
	@ApiBody({ type: WriteOffDto })
	@ApiResponse({ status: 200, description: 'Write-off updated.' })
	@Roles('Admin', 'Disposal Officer')
	updateWriteOff(@Param('id') id: string, @Body() dto: WriteOffDto): any {
			if (!id || !dto) {
				throw new HttpException('Missing id or data', HttpStatus.BAD_REQUEST);
			}
			// ...actual update logic...
			return { message: `Write-off ${id} updated`, data: dto };
	}

	@Delete('write-offs/:id')
    @ApiOperation({ summary: 'Delete a write-off' })
    @ApiResponse({ status: 200, description: 'Write-off deleted.' })
	@Roles('Admin')
	deleteWriteOff(@Param('id') id: string): any {
			if (!id) {
				throw new HttpException('Missing id', HttpStatus.BAD_REQUEST);
			}
			// ...actual delete logic...
			return { message: `Write-off ${id} deleted` };
	}
}
