export class SummaryReportDto {
  fromDate: string;
  toDate: string;
  type: string;
}

export class AgingReportDto {
  assetId: string;
  asOfDate: string;
}

export class CostReportDto {
  assetId: string;
  fromDate: string;
  toDate: string;
}

export class DepreciationReportDto {
  assetId: string;
  year: number;
}
