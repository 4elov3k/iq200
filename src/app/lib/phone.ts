export const phonePattern = "^\\+7 \\(9\\d{2}\\) \\d{3}-\\d{2}-\\d{2}$";
export const phoneTitle = "Введите номер в формате +7 (9XX) XXX-XX-XX";

export function formatPhoneInput(value: string) {
  let digits = value.replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  if (digits.startsWith("8")) {
    digits = `7${digits.slice(1)}`;
  } else if (digits.startsWith("9")) {
    digits = `7${digits}`;
  } else if (!digits.startsWith("7")) {
    digits = `7${digits}`;
  }

  digits = digits.slice(0, 11);

  const country = digits[0] ? "+7" : "";
  const area = digits.slice(1, 4);
  const first = digits.slice(4, 7);
  const second = digits.slice(7, 9);
  const third = digits.slice(9, 11);

  let result = country;

  if (area) {
    result += ` (${area}`;
  }

  if (area.length === 3) {
    result += ")";
  }

  if (first) {
    result += ` ${first}`;
  }

  if (second) {
    result += `-${second}`;
  }

  if (third) {
    result += `-${third}`;
  }

  return result;
}

export function normalizePhoneDigits(value: string) {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("8")) {
    digits = `7${digits.slice(1)}`;
  } else if (digits.startsWith("9")) {
    digits = `7${digits}`;
  }

  return digits.slice(0, 11);
}

export function isValidRussianMobilePhone(value: string) {
  const digits = normalizePhoneDigits(value);
  return digits.length === 11 && digits.startsWith("79");
}
