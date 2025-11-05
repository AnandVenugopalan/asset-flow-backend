import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, HttpException, HttpStatus } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { CreateAssetDto, UpdateAssetDto } from '../dtos/asset.dtos';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiBody } from '@nestjs/swagger';

@Controller('assets')
@ApiTags('Assets')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post()
  @ApiOperation({ summary: 'Create an asset' })
  @ApiBody({ type: CreateAssetDto })
  @ApiResponse({ status: 201, description: 'Asset created.' })
  @Roles('Admin', 'Asset Manager')
  create(@Body() createAssetDto: CreateAssetDto) {
    if (!createAssetDto) {
      throw new HttpException('Invalid asset data', HttpStatus.BAD_REQUEST);
    }
    return this.assetsService.create(createAssetDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all assets' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'sort', required: false, type: String })
  @ApiQuery({ name: 'filter', required: false, type: String })
  @ApiResponse({ status: 200, description: 'List of assets.' })
  @Roles('Admin', 'Asset Manager', 'Viewer')
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('sort') sort?: string,
    @Query('filter') filter?: string
  ) {
  // Pass pagination/filter/sort to service as needed
  return this.assetsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get asset by ID' })
  @ApiResponse({ status: 200, description: 'Asset details.' })
  findOne(@Param('id') id: string) {
    return this.assetsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update asset by ID' })
  @ApiBody({ type: UpdateAssetDto })
  @ApiResponse({ status: 200, description: 'Asset updated.' })
  update(@Param('id') id: string, @Body() updateAssetDto: UpdateAssetDto) {
    if (!id || !updateAssetDto) {
      throw new HttpException('Missing id or data', HttpStatus.BAD_REQUEST);
    }
    return this.assetsService.update(id, updateAssetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete asset by ID' })
  @ApiResponse({ status: 200, description: 'Asset deleted.' })
  remove(@Param('id') id: string) {
    if (!id) {
      throw new HttpException('Missing id', HttpStatus.BAD_REQUEST);
    }
    return this.assetsService.remove(id);
  }

  @Get(':id/hierarchy')
  @ApiOperation({ summary: 'Get asset hierarchy by ID' })
  @ApiResponse({ status: 200, description: 'Asset hierarchy.' })
  getHierarchy(@Param('id') id: string) {
    // Get asset hierarchy
    return this.assetsService.getHierarchy(id);
  }

  @Get(':id/movement')
  @ApiOperation({ summary: 'Get asset movement logs by ID' })
  @ApiResponse({ status: 200, description: 'Asset movement logs.' })
  getMovement(@Param('id') id: string) {
    // Get movement logs
    return this.assetsService.getMovement(id);
  }

  @Get(':id/audit')
  @ApiOperation({ summary: 'Get asset audit logs by ID' })
  @ApiResponse({ status: 200, description: 'Asset audit logs.' })
  getAudit(@Param('id') id: string) {
    // Get audit logs
    return this.assetsService.getAudit(id);
  }

  @Post(':id/attachments')
  @ApiOperation({ summary: 'Add attachment to asset by ID' })
  @ApiBody({ type: Object })
  @ApiResponse({ status: 201, description: 'Attachment added.' })
  addAttachment(@Param('id') id: string, @Body() file: any) {
    // Add attachment
    return this.assetsService.addAttachment(id, file);
  }
}