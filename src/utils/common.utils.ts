/**
 * @description Converts a kebab case string to title case.
 * @class {Common Utils} - Utility Class function
 * @param {string} kebabCase - The kebab case string to be converted.
 * @returns {string} The title case string.
 */
export function convertKebabCaseToTitleCase(kebabCase: string): string {
  return kebabCase
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


export function convertIso8601ToLocalDate(inputDate): string {
  const date = new Date(inputDate);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  return new Intl.DateTimeFormat('en-In', options).format(date);
}
