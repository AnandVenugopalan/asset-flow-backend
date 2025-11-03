import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { User } from '../entities/user.entity';
import { Asset } from '../entities/asset.entity';
import { AssetTransfer } from '../entities/asset-transfer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Asset, AssetTransfer])],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}