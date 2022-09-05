/**
 * Truncate a string to a specified number of characters.
 */
const truncate = (string: string, limit: number, useWordBoundary = true) => {
  if (!string) {
    return string;
  }
  if (string.length <= limit) {
    return string;
  }

  const subString = string.slice(0, Math.max(0, limit - 1));
  return (
    (useWordBoundary
      ? subString.slice(0, Math.max(0, subString.lastIndexOf(' ')))
      : subString) + '…'
  );
};

export default truncate;
