const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

export const isFirstNameValid = (firstName) => {
  return firstName.length;
}

export const isLastNameValid = (lastName) => {
  return lastName.length;
}

export const isEmailValid = (email) => {
  return email.length && emailRegex.test(email);
};

export const isUserValid = ({ first_name, last_name, email }) => {
  return isFirstNameValid(first_name) &&
    isLastNameValid(last_name) &&
    isEmailValid(email);
};