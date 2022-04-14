export const removeEmpty = (object, isEmpty) => {
  const isArray = Array.isArray(object);
  
  const result = Object.entries(object)
    .filter(([ key, value ]) => !isEmpty(value))
    .map(([ key, value ]) => {
      const result = value === Object(value) ? removeEmpty(value, isEmpty) : value;
      
      return isArray ? result : [ key, result ];
    });
  
  return isArray ? result : Object.fromEntries(result);
};
