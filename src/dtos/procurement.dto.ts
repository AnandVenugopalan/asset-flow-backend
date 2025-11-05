export class PurchaseRequestDto {
  id?: string;
  assetId: string;
  requestedBy: string;
  requestDate: string;
  status?: string;
  remarks?: string;
}

export class VendorDto {
  id?: string;
  name: string;
  contactInfo?: string;
  address?: string;
}

export class PurchaseOrderDto {
  id?: string;
  requestId: string;
  vendorId: string;
  orderDate: string;
  status?: string;
  items: any[];
}

export class GRNDto {
  id?: string;
  orderId: string;
  receivedDate: string;
  receivedBy: string;
  remarks?: string;
}

export class WarrantyDto {
  id?: string;
  assetId: string;
  vendorId: string;
  warrantyStart: string;
  warrantyEnd: string;
  amcStart?: string;
  amcEnd?: string;
}
