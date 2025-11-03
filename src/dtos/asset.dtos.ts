import { IsNotEmpty, IsString, IsEnum, IsOptional, IsDateString, IsNumber } from 'class-validator';
import { AssetStatus } from '../entities/asset.entity';

export class CreateAssetDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsEnum(AssetStatus)
  status: AssetStatus;

  @IsOptional()
  @IsString()
  assignedToId?: string;

  @IsDateString()
  purchaseDate: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNumber()
  value: number;
}

export class UpdateAssetDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsEnum(AssetStatus)
  status?: AssetStatus;

  @IsOptional()
  @IsString()
  assignedToId?: string;

  @IsOptional()
  @IsDateString()
  purchaseDate?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsNumber()
  value?: number;
}