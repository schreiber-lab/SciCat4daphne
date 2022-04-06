export const removeEmpty = (object, isEmpty) => {
  return Object.fromEntries(
    Object.entries(object)
      .filter(([_, value]) => !isEmpty(value))
      .map(([key, value]) => [
        key,
        value === Object(value) ? removeEmpty(value, isEmpty) : value,
      ])
  );
};
