const p = (value: any, validator: any) => {
  const result = validator.safeParse(value);

  if (!result.success) {
    return result.error.errors[0].message;
  }

  return null;
};

export default p;
