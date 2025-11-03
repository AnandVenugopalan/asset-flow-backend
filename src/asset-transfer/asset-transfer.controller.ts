import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AssetTransferService } from './asset-transfer.service';
import { CreateAssetTransferDto, UpdateAssetTransferDto } from '../dtos/asset-transfer.dtos';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('asset-transfers')
@UseGuards(JwtAuthGuard)
export class AssetTransferController {
  constructor(private readonly assetTransferService: AssetTransferService) {}

  @Post()
  create(@Body() createAssetTransferDto: CreateAssetTransferDto) {
    return this.assetTransferService.create(createAssetTransferDto);
  }

  @Get()
  findAll() {
    return this.assetTransferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetTransferService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetTransferDto: UpdateAssetTransferDto) {
    return this.assetTransferService.update(id, updateAssetTransferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetTransferService.remove(id);
  }
}