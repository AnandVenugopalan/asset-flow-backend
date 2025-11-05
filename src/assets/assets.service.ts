import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from '../entities/asset.entity';
import { CreateAssetDto, UpdateAssetDto } from '../dtos/asset.dtos';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private assetRepository: Repository<Asset>,
  ) {}

  async create(createAssetDto: CreateAssetDto): Promise<Asset> {
    const asset = this.assetRepository.create(createAssetDto);
    return this.assetRepository.save(asset);
  }

  async findAll(): Promise<Asset[]> {
    return this.assetRepository.find({ relations: ['assignedTo'] });
  }

  async findOne(id: string): Promise<Asset> {
    const asset = await this.assetRepository.findOne({
      where: { id },
      relations: ['assignedTo'],
    });
    if (!asset) {
      throw new NotFoundException(`Asset with ID ${id} not found`);
    }
    return asset;
  }

  async update(id: string, updateAssetDto: UpdateAssetDto): Promise<Asset> {
    const result = await this.assetRepository.update(id, updateAssetDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Asset with ID ${id} not found`);
    }
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const result = await this.assetRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Asset with ID ${id} not found`);
    }
  }
  async getHierarchy(id: string): Promise<any> {
    // Stub: return asset hierarchy
    return { assetId: id, hierarchy: [] };
  }

  async getMovement(id: string): Promise<any> {
    // Stub: return movement logs
    return { assetId: id, movements: [] };
  }

  async getAudit(id: string): Promise<any> {
    // Stub: return audit logs
    return { assetId: id, audits: [] };
  }

  async addAttachment(id: string, file: any): Promise<any> {
    // Stub: add attachment
    return { assetId: id, file };
  }
}