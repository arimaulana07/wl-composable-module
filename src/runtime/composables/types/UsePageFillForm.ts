export interface Form {
  value: string | null;
  isPassed: boolean;
  message: string;
}

export interface FormsCustomer {
  [key: string]: Form;
  name: Form;
  email: Form;
  phoneNo: Form;
  address: Form;
}

export interface FormsPassenger extends Form {
  index: number;
  label: string | number;
  isSelected: boolean;
  indexSeat: number | null;
  seat: string | number | null;
}