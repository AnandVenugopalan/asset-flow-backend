// ...existing code...
export class AssetDto {
  category?: string;
  status?: string;
  assignedToId?: string;
  purchaseDate?: string;
  location?: string;
  value?: number;
}

// ...existing code...
export class UpdateAssetDto {
  name?: string;
  type?: string;
  category?: string;
  status?: string;
  assignedToId?: string;
  purchaseDate?: string;
  location?: string;
  value?: number;
}