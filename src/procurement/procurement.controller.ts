import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiBody } from '@nestjs/swagger';
import { PurchaseRequestDto, VendorDto, PurchaseOrderDto, GRNDto, WarrantyDto } from '../dtos/procurement.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Procurement')
@Controller('procurement')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProcurementController {
	// Purchase Requests
		@Get('requests')
		@ApiOperation({ summary: 'Get all purchase requests' })
		@ApiQuery({ name: 'page', required: false, type: Number })
		@ApiQuery({ name: 'limit', required: false, type: Number })
		@ApiQuery({ name: 'sort', required: false, type: String })
		@ApiQuery({ name: 'filter', required: false, type: String })
		@ApiResponse({ status: 200, description: 'List of purchase requests.' })
		@Roles('Admin', 'Procurement Officer', 'Viewer')
		getRequests(
			@Query('page') page?: number,
			@Query('limit') limit?: number,
			@Query('sort') sort?: string,
			@Query('filter') filter?: string
		): any {
			return { message: 'List purchase requests', page, limit, sort, filter };
		}

		@Post('requests')
		@ApiOperation({ summary: 'Create a purchase request' })
		@ApiBody({ type: PurchaseRequestDto })
		@ApiResponse({ status: 201, description: 'Purchase request created.' })
		@Roles('Admin', 'Procurement Officer')
		createRequest(@Body() dto: PurchaseRequestDto): any {
			if (!dto) {
				throw new HttpException('Invalid request data', HttpStatus.BAD_REQUEST);
			}
			return { message: 'Purchase request created', data: dto };
		}

		@Put('requests/:id')
		@ApiOperation({ summary: 'Update a purchase request' })
		@ApiBody({ type: PurchaseRequestDto })
		@ApiResponse({ status: 200, description: 'Purchase request updated.' })
		@Roles('Admin', 'Procurement Officer')
		updateRequest(@Param('id') id: string, @Body() dto: PurchaseRequestDto): any {
			if (!id || !dto) {
				throw new HttpException('Missing id or data', HttpStatus.BAD_REQUEST);
			}
			return { message: `Purchase request ${id} updated`, data: dto };
		}

		@Delete('requests/:id')
        @ApiOperation({ summary: 'Delete a purchase request' })
        @ApiResponse({ status: 200, description: 'Purchase request deleted.' })
		@Roles('Admin')
		deleteRequest(@Param('id') id: string): any {
			if (!id) {
				throw new HttpException('Missing id', HttpStatus.BAD_REQUEST);
			}
			return { message: `Purchase request ${id} deleted` };
		}

	// Vendors
		@Get('vendors')
		@ApiOperation({ summary: 'Get all vendors' })
		@ApiQuery({ name: 'page', required: false, type: Number })
		@ApiQuery({ name: 'limit', required: false, type: Number })
		@ApiQuery({ name: 'sort', required: false, type: String })
		@ApiQuery({ name: 'filter', required: false, type: String })
		@ApiResponse({ status: 200, description: 'List of vendors.' })
		@Roles('Admin', 'Procurement Officer', 'Viewer')
		getVendors(
			@Query('page') page?: number,
			@Query('limit') limit?: number,
			@Query('sort') sort?: string,
			@Query('filter') filter?: string
		): any {
			return { message: 'List vendors', page, limit, sort, filter };
		}

		@Post('vendors')
		@ApiOperation({ summary: 'Create a vendor' })
		@ApiBody({ type: VendorDto })
		@ApiResponse({ status: 201, description: 'Vendor created.' })
		@Roles('Admin', 'Procurement Officer')
		createVendor(@Body() dto: VendorDto): any {
			return 'Create vendor';
		}

		@Put('vendors/:id')
		@ApiOperation({ summary: 'Update a vendor' })
		@ApiBody({ type: VendorDto })
		@ApiResponse({ status: 200, description: 'Vendor updated.' })
		@Roles('Admin', 'Procurement Officer')
		updateVendor(@Param('id') id: string, @Body() dto: VendorDto): any {
			return `Update vendor ${id}`;
		}

		@Delete('vendors/:id')
        @ApiOperation({ summary: 'Delete a vendor' })
        @ApiResponse({ status: 200, description: 'Vendor deleted.' })
		@Roles('Admin')
		deleteVendor(@Param('id') id: string): any {
			return `Delete vendor ${id}`;
		}

	// Purchase Orders
		@Get('orders')
		@ApiOperation({ summary: 'Get all purchase orders' })
		@ApiQuery({ name: 'page', required: false, type: Number })
		@ApiQuery({ name: 'limit', required: false, type: Number })
		@ApiQuery({ name: 'sort', required: false, type: String })
		@ApiQuery({ name: 'filter', required: false, type: String })
		@ApiResponse({ status: 200, description: 'List of purchase orders.' })
		@Roles('Admin', 'Procurement Officer', 'Viewer')
		getOrders(
			@Query('page') page?: number,
			@Query('limit') limit?: number,
			@Query('sort') sort?: string,
			@Query('filter') filter?: string
		): any {
			return { message: 'List purchase orders', page, limit, sort, filter };
		}

		@Post('orders')
		@ApiOperation({ summary: 'Create a purchase order' })
		@ApiBody({ type: PurchaseOrderDto })
		@ApiResponse({ status: 201, description: 'Purchase order created.' })
		@Roles('Admin', 'Procurement Officer')
		createOrder(@Body() dto: PurchaseOrderDto): any {
			return 'Create purchase order';
		}

		@Put('orders/:id')
		@ApiOperation({ summary: 'Update a purchase order' })
		@ApiBody({ type: PurchaseOrderDto })
		@ApiResponse({ status: 200, description: 'Purchase order updated.' })
		@Roles('Admin', 'Procurement Officer')
		updateOrder(@Param('id') id: string, @Body() dto: PurchaseOrderDto): any {
		return `Update purchase order ${id}`;
	}

		@Delete('orders/:id')
        @ApiOperation({ summary: 'Delete a purchase order' })
        @ApiResponse({ status: 200, description: 'Purchase order deleted.' })
		@Roles('Admin')
		deleteOrder(@Param('id') id: string): any {
			return `Delete purchase order ${id}`;
		}

	// GRN
		@Get('grn')
		@Roles('Admin', 'Procurement Officer', 'Viewer')
		getGRNs(): any {
			return 'List GRNs';
		}

		@Post('grn')
		@Roles('Admin', 'Procurement Officer')
		createGRN(@Body() dto: GRNDto): any {
			return 'Create GRN';
		}

		@Put('grn/:id')
		@Roles('Admin', 'Procurement Officer')
		updateGRN(@Param('id') id: string, @Body() dto: GRNDto): any {
			return `Update GRN ${id}`;
		}

		@Delete('grn/:id')
		@Roles('Admin')
		deleteGRN(@Param('id') id: string): any {
			return `Delete GRN ${id}`;
		}

	// Warranty/AMC
		@Get('warranty')
		@Roles('Admin', 'Procurement Officer', 'Viewer')
		getWarranties(): any {
			return 'List warranties/AMCs';
		}

		@Post('warranty')
		@Roles('Admin', 'Procurement Officer')
		createWarranty(@Body() dto: WarrantyDto): any {
			return 'Create warranty/AMC';
		}

		@Put('warranty/:id')
		@Roles('Admin', 'Procurement Officer')
		updateWarranty(@Param('id') id: string, @Body() dto: WarrantyDto): any {
			return `Update warranty/AMC ${id}`;
		}

		@Delete('warranty/:id')
		@Roles('Admin')
		deleteWarranty(@Param('id') id: string): any {
			return `Delete warranty/AMC ${id}`;
		}
}
