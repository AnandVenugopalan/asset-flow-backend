export class AssignmentDto {
  id?: string;
  assetId: string;
  assignedTo: string;
  assignedDate: string;
  status?: string;
  remarks?: string;
}

export class CheckInOutDto {
  id?: string;
  assetId: string;
  userId: string;
  action: 'check-in' | 'check-out';
  date: string;
  remarks?: string;
}

export class UtilizationReportDto {
  assetId: string;
  fromDate: string;
  toDate: string;
}
