import countriesArr from "./countries.json";
export const getAllCountries = () => countriesArr;
export const getCountryByName = ({ countryName }: { countryName: string }) =>
  countriesArr.find(
    ({ name }) => name.toLocaleLowerCase() === countryName.toLocaleLowerCase()
  );
export const getCountryByCode = ({ countryCode }: { countryCode: string }) =>
  countriesArr.find(
    ({ code }) => code.toLocaleLowerCase() === countryCode.toLocaleLowerCase()
  );
