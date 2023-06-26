export const validate = (valid) => {
  for (val of valid) {
    if (val.minLength && val.value < val.minLength) {
      return false;
    }
  }
};
