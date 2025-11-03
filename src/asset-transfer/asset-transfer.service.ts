import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssetTransfer } from '../entities/asset-transfer.entity';
import { CreateAssetTransferDto, UpdateAssetTransferDto } from '../dtos/asset-transfer.dtos';
import { Asset } from '../entities/asset.entity';

@Injectable()
export class AssetTransferService {
  constructor(
    @InjectRepository(AssetTransfer)
    private assetTransferRepository: Repository<AssetTransfer>,
    @InjectRepository(Asset)
    private assetRepository: Repository<Asset>,
  ) {}

  async create(createAssetTransferDto: CreateAssetTransferDto): Promise<AssetTransfer> {
    const transfer = this.assetTransferRepository.create(createAssetTransferDto);
    const savedTransfer = await this.assetTransferRepository.save(transfer);

    // Update asset's assignedTo
    await this.assetRepository.update(createAssetTransferDto.assetId, {
      assignedToId: createAssetTransferDto.toUserId,
    });

    return savedTransfer;
  }

  async findAll(): Promise<AssetTransfer[]> {
    return this.assetTransferRepository.find({ relations: ['asset', 'fromUser', 'toUser'] });
  }

  async findOne(id: string): Promise<AssetTransfer> {
    const transfer = await this.assetTransferRepository.findOne({
      where: { transferId: id },
      relations: ['asset', 'fromUser', 'toUser'],
    });
    if (!transfer) {
      throw new NotFoundException(`Asset Transfer with ID ${id} not found`);
    }
    return transfer;
  }

  async update(id: string, updateAssetTransferDto: UpdateAssetTransferDto): Promise<AssetTransfer> {
    const result = await this.assetTransferRepository.update({ transferId: id }, updateAssetTransferDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Asset Transfer with ID ${id} not found`);
    }
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const result = await this.assetTransferRepository.delete({ transferId: id });
    if (result.affected === 0) {
      throw new NotFoundException(`Asset Transfer with ID ${id} not found`);
    }
  }
}