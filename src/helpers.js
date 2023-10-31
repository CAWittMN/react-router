/**
 * finds the snack based on snack code
 */
const findSnack = (snacks, code) => {
  return snacks.find((snack) => snack.code === code);
};

export { findSnack };
