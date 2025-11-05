export class DisposalRequestDto {
  id?: string;
  assetId: string;
  requestedBy: string;
  requestDate: string;
  status?: string;
  remarks?: string;
}

export class DisposalApprovalDto {
  id?: string;
  requestId: string;
  approvedBy: string;
  approvalDate: string;
  status?: string;
  remarks?: string;
}

export class AuctionDto {
  id?: string;
  assetId: string;
  auctionDate: string;
  winner?: string;
  amount?: number;
}

export class WriteOffDto {
  id?: string;
  assetId: string;
  writeOffDate: string;
  reason?: string;
}
