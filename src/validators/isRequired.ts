import { FormValue, FormError } from "informed";

/* eslint-disable no-extra-boolean-cast */
const isRequired = (message: string | undefined) => (
  value: FormValue
): FormError => {
  if (typeof value === "string" && value.trim() === "") {
    return message;
  }

  if (Array.isArray(value) && value.length === 0) {
    return message;
  }

  if (typeof value === "boolean") {
    return value === true || value === false ? undefined : message;
  }
  // 0 should not fail; use the min/max validator if 0 needs to fail
  return Boolean(value) || value === 0 ? undefined : message;
};
/* eslint-enable no-extra-boolean-cast */

export default isRequired;
