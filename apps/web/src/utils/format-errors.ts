export const formatFieldName = (name: string): string => {
  return name.replace(/([A-Z])/g, ' $1'); // Add space before capital letters
};

export const formatErrorMessage = (message: string): string => {
  return message
    .replace(/^[a-z]/, (str) => str.toUpperCase()) // Capitalize first letter
    .replace(/([a-z])([A-Z])/g, '$1 $2'); // Add space between camelCase
};
