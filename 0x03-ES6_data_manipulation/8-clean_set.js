const cleanSet = (set, startString) => {
  if (!startString || !startString.length) return '';
  let value = '';
  for (const el of set) {
    if (el && el.startsWith(startString)) {
      value += value.length === 0 ? el.replace(startString, '') : el.replace(startString, '-');
    }
  }
  return value;
};

export default cleanSet;
