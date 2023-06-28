export const validate = (valid) => {
  for (let val of valid) {
    if (!val.value) {
      return "Please fill out the input";
    }
    if (val.minLength && val.value.trim().length < val.minLength) {
      return `This field must be more than ${val.minLength} characters long`;
    }
    if (val.pattern && !val.pattern.test(val.value)) {
      return "Incorrect email";
    }
  }
  return "OK";
};
