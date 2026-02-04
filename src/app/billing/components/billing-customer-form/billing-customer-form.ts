import { Component, inject, OnInit, OnDestroy, output } from '@angular/core';
import { 
  FormGroup, 
  Validators, 
  FormBuilder,
} from '@angular/forms';    
import { Subject, takeUntil } from 'rxjs';
import { CustomerModel } from '../../models/customer-model.model';


@Component({
  selector: 'app-billing-customer-form',
  standalone: false,
  templateUrl: './billing-customer-form.html',
  styleUrl: './billing-customer-form.css',
})
export class BillingCustomerForm implements OnInit, OnDestroy {

  emitCustomer=output<CustomerModel>();

  fb = inject(FormBuilder);
  customerForm: FormGroup;
  organizationTypes = [
    { id: 1, name: 'Persona Jurídica' },
    { id: 2, name: 'Persona Natural' }
  ];

  identificationDocumentTypes = [
    { id: 1, name: 'Registro civil' },
    { id: 2, name: 'Tarjeta de identidad' },
    { id: 3, name: 'Cédula de ciudadanía' },
    { id: 4, name: 'Tarjeta de extranjería' },
    { id: 5, name: 'Cédula de extranjería' },
    { id: 6, name: 'NIT' },
    { id: 7, name: 'Pasaporte' },
    { id: 8, name: 'Documento de identificación extranjero' },
    { id: 9, name: 'PEP' },
    { id: 10, name: 'NIT otro país' },
    { id: 11, name: 'NUIP*' }
  ];

  tributeTypes = [
    { id: 18, name: 'IVA' },
    { id: 21, name: 'No aplica' }
  ];

  unsubscribe$ = new Subject<void>();

  constructor() {
    this.customerForm = this.fb.group({
      identification_document_id: ['', Validators.required],
      identification: ['', Validators.required],
      dv: [{ value: '', disabled: true }],//depende de identification_document_id
      company: [{ value: '', disabled: true }],//depende de legal_organization_id
      trade_name: [{ value: '', disabled: true }],//depende de legal_organization_id
      names: ['', Validators.required],
      address: [''],
      email: ['', [Validators.email]],
      phone: [''],
      legal_organization_id: ['', Validators.required],
      tribute_id: ['', Validators.required],
      municipality_id: ['']
    });
  }

  ngOnInit(): void {
    this.validarCampoIdentification();
    this.validarCampoLegalOrganization();

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  emitCustomerForm(){
    console.log(this.customerForm.value);
    this.emitCustomer.emit(this.customerForm.value);
  }

  validarCampoIdentification(){
    const control = this.customerForm.get('identification_document_id');
    if (control) {
      control.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((el) => {
        if (el === 6) {
          this.customerForm.get('dv')?.enable();
        } else {
          this.customerForm.get('dv')?.disable();
        }
      })
    }
    
  }
  validarCampoLegalOrganization(){
    const control = this.customerForm.get('legal_organization_id');
    if (control) {
      control.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((el) => {
        if (el === 1) {
          this.customerForm.get('company')?.enable();
          this.customerForm.get('trade_name')?.enable();
        } else {
          this.customerForm.get('company')?.disable();
          this.customerForm.get('trade_name')?.disable();
        }
      })  
    }
  }
}
