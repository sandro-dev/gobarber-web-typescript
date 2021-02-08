import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  if (err instanceof ValidationError) {
    const validationErrors: Errors = {};

    err.inner.forEach(error => {
      validationErrors[`${error.path}`] = error.message;
    });

    return validationErrors;
  }
  return { error: `Internal Server Error` };
}
