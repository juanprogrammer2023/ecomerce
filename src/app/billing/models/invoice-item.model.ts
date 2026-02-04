export class InvoiceItem {
    document: string="01";                  // Tipo de documento (ej: "01")
    numbering_range_id?: number;       // Rango de numeración (opcional si solo hay uno activo)
    reference_code: string="";            // Código único de la factura
    observation?: string;              // Observaciones de la factura
    payment_form?: { code: string };   // Forma de pago (opcional)
    payment_due_date?: string;         // Fecha de vencimiento (YYYY-MM-DD, opcional)
    payment_method_code?: number;      // Método de pago (por defecto 10 = efectivo)
    operation_type?: string;           // Tipo de operación (opcional)
    order_reference?: {
        reference_code: string;
        issue_date?: string;
    };
    send_email?: boolean;              // Enviar correo al cliente (true por defecto)
    related_documents?: Array<{
        code: string;
        issue_date: string;
        number: string;
    }>;
    billing_period?: {
        start_date: string;
        start_time?: string;
        end_date: string;
        end_time?: string;
    };
    establishment?: {
        name: string;
        address: string;
        phone_number: string;
        email: string;
        municipality_id: number;
    };
    allowance_charges?: Array<{
        concept_type: string;
        is_surcharge: boolean;
        reason: string;
        base_amount: number;
        amount: number;
    }>;
}

