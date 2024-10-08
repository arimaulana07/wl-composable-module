import type { Validation, ValidationResultProperties } from "../useFormValidation";

export interface Form {
  value: string | null;
  isPassed: boolean;
  message: string;
  label: string;
  validation?: Validation;
  validationResult?: ValidationResultProperties;
}

export interface FormsCustomer {
  [key: string]: Form;
  name: Form;
  email: Form;
  phoneNo: Form;
  address: Form;
}

export interface FormsPassenger extends Form {
  no: string;
  index: number;
  isSelected: boolean;
  indexSeat: number | null;
  seat: string | number | null;
}