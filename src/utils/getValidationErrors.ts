import { errorMonitor } from 'events';
import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {

  const validationErrors: Errors = {};

  err.inner.forEach((error, idx) => {
    validationErrors[`${error.path}`] = error.message;
  });

  return validationErrors;
}