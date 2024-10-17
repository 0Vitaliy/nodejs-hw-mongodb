const parseGender = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isGender = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isGender(contactType)) return contactType;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseGender(contactType);

  return {
    contactType: parsedContactType,
    isFavourite,
  };
};
