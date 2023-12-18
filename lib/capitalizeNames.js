export const capitalizeNames = (firstName, lastName) => {
  const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return { capitalizedFirstName, capitalizedLastName };
}