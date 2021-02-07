import { errorMonitor } from 'events';
import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {

  if(err instanceof ValidationError) {
    const validationErrors: Errors = {};

    err.inner.forEach((error, idx) => {
      validationErrors[`${error.path}`] = error.message;
    });

    return validationErrors;
  
  } else {
    return { error :`Internal Server Error`};
  }

  
}