export interface Validation {
  regex?: RegExp;
  required?: boolean;
  minLength?: number;
  maxLength?: number; 
}

export interface UseFormValidationParams {
  label: string;
  value: string;
  validation: Validation;
}

export interface ValidationResultProperties {
  isPassed: boolean;
  message: string | null;
}

export interface ValidationResult {
  maxLengthValidation: ValidationResultProperties;
  minLengthValidation: ValidationResultProperties;
  regexValidation: ValidationResultProperties;
  requiredValidation: ValidationResultProperties;
}

type UseFormValidation = ({}: UseFormValidationParams) => ValidationResultProperties

export const useFormValidation: UseFormValidation = ({ value, validation, label }) => {
  const { maxLength, minLength, regex, required } = validation;
  const validationResult: ValidationResult = {
    maxLengthValidation: { isPassed: true , message: null },
    minLengthValidation: { isPassed: true, message: null },
    regexValidation: { isPassed: true, message: null },
    requiredValidation: { isPassed: true, message: null }
  };

  if ((required && value.length <= 0) || value.trim() == '') {
    validationResult.requiredValidation.message = `${label} Harus Diisi!`;
    validationResult.requiredValidation.isPassed = false;

    return validationResult.requiredValidation;
  };

  if ((minLength && value.length < minLength) || value.trim() == '') {
    validationResult.minLengthValidation.message = `${label} Minimal ${minLength} karakter!`;
    validationResult.minLengthValidation.isPassed = false;

    return validationResult.minLengthValidation;
  };

  
  if ((maxLength && value.length > maxLength) || value.trim() == '') {
    validationResult.maxLengthValidation.message = `${label} Maksimal ${maxLength} karakter!`;
    validationResult.maxLengthValidation.isPassed = false;
    console.log('maxlength', value.length, maxLength)
    return validationResult.maxLengthValidation;
  };

  if (regex && !value.match(regex)) {
    validationResult.regexValidation.message = `${label} Tidak Valid!`;
    validationResult.regexValidation.isPassed = false;

    return validationResult.regexValidation;
  };
 
  return { isPassed: true, message: null }
}