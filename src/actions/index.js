

export const extractApiErrors = (resError) => {
  let errors = [{title: 'Error!', detail: 'Ooops, something went wrong!'}];

  if (resError && resError.data && resError.data.errors) {
    errors = resError.data.errors;
  }

  return errors;
}

export * from './auth';
export * from './rentals';





// AUTH ACTIONS
