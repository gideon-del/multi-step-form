export const validate = (valid) => {
  for (let val of valid) {
    if (!val.value) {
      return false;
    }
    if (val.minLength && val.value.length < val.minLength) {
      return false;
    }
    if (val.pattern && !val.pattern.test(val.value)) {
      return false;
    }
  }
  return true;
};
