import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateAssetTransferDto {
  @IsNotEmpty()
  @IsString()
  assetId: string;

  @IsOptional()
  @IsString()
  fromUserId?: string;

  @IsNotEmpty()
  @IsString()
  toUserId: string;

  @IsOptional()
  @IsString()
  remarks?: string;
}

export class UpdateAssetTransferDto {
  @IsOptional()
  @IsString()
  assetId?: string;

  @IsOptional()
  @IsString()
  fromUserId?: string;

  @IsOptional()
  @IsString()
  toUserId?: string;

  @IsOptional()
  @IsString()
  remarks?: string;
}