import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetTransferService } from './asset-transfer.service';
import { AssetTransferController } from './asset-transfer.controller';
import { AssetTransfer } from '../entities/asset-transfer.entity';
import { Asset } from '../entities/asset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssetTransfer, Asset])],
  providers: [AssetTransferService],
  controllers: [AssetTransferController],
  exports: [AssetTransferService],
})
export class AssetTransferModule {}