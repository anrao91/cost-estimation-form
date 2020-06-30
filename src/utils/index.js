export const capitalize = (str_val) => {
  if (typeof str_val !== "string") return "";
  return str_val.charAt(0).toUpperCase() + str_val.slice(1);
};
