export class MaintenanceScheduleDto {
  id?: string;
  assetId: string;
  scheduleDate: string;
  type: string;
  status?: string;
  remarks?: string;
}

export class MaintenanceLogDto {
  id?: string;
  assetId: string;
  logDate: string;
  description: string;
  cost?: number;
  serviceProvider?: string;
}

export class SparePartDto {
  id?: string;
  name: string;
  partNumber?: string;
  quantity?: number;
}

export class ContractDto {
  id?: string;
  assetId: string;
  vendorId: string;
  startDate: string;
  endDate: string;
  terms?: string;
}
