import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from '../entities/user.entity';
import { Asset, AssetStatus } from '../entities/asset.entity';
import { AssetTransfer } from '../entities/asset-transfer.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Asset)
    private assetRepository: Repository<Asset>,
    @InjectRepository(AssetTransfer)
    private assetTransferRepository: Repository<AssetTransfer>,
  ) {}

  async seed() {
     // Delete existing data (avoid FK constraint errors)
  await this.assetTransferRepository.createQueryBuilder().delete().execute();
  await this.assetRepository.createQueryBuilder().delete().execute();
  await this.userRepository.createQueryBuilder().delete().execute();

    // Create users
    const hashedPassword = await bcrypt.hash('password123', 10);
    const users = [
      { name: 'Admin User', email: 'admin@example.com', role: UserRole.ADMIN, password: hashedPassword },
      { name: 'Manager User', email: 'manager@example.com', role: UserRole.MANAGER, password: hashedPassword },
      { name: 'Employee One', email: 'employee1@example.com', role: UserRole.EMPLOYEE, password: hashedPassword },
      { name: 'Employee Two', email: 'employee2@example.com', role: UserRole.EMPLOYEE, password: hashedPassword },
    ];

    const savedUsers = await this.userRepository.save(users);

    // Create assets
    const assets = [
      {
        name: 'Laptop Dell XPS',
        type: 'Laptop',
        category: 'Electronics',
        status: AssetStatus.ACTIVE,
        assignedToId: savedUsers[2].id,
        purchaseDate: new Date('2023-01-15'),
        location: 'Office A',
        value: 1200.00,
      },
      {
        name: 'Projector Epson',
        type: 'Projector',
        category: 'Electronics',
        status: AssetStatus.INACTIVE,
        purchaseDate: new Date('2022-06-10'),
        location: 'Conference Room',
        value: 800.00,
      },
      {
        name: 'Office Chair',
        type: 'Furniture',
        category: 'Furniture',
        status: AssetStatus.ACTIVE,
        assignedToId: savedUsers[3].id,
        purchaseDate: new Date('2021-03-20'),
        location: 'Office B',
        value: 150.00,
      },
    ];

    const savedAssets = await this.assetRepository.save(assets);

    // Create transfers
    const transfers = [
      {
        assetId: savedAssets[0].id,
        toUserId: savedUsers[2].id,
        remarks: 'Initial assignment',
      },
      {
        assetId: savedAssets[2].id,
        toUserId: savedUsers[3].id,
        remarks: 'Assigned to new employee',
      },
    ];

    await this.assetTransferRepository.save(transfers);

    return { message: 'Database seeded successfully' };
  }
}