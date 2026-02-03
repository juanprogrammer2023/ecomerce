export interface CustomerModel {
  identification_document_id: number;
  identification: string;
  dv?: number;
  company?: string;
  trade_name?: string;
  names?: string;
  address?: string;
  email?: string;
  phone?: string;
  legal_organization_id: number;
  tribute_id: number;
  municipality_id?: number;
}
