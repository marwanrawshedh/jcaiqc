import nationalitiesArr from "./nationalities.json";

export const getAllNationalitiesArr = () => nationalitiesArr;

export const getNationalityByCode = ({
  nationalityCode,
}: {
  nationalityCode: string;
}) =>
  nationalitiesArr.find(
    ({ code }) =>
      code.toLocaleLowerCase() === nationalityCode.toLocaleLowerCase()
  );

export const getNationalityByName = ({
  nationalityName,
}: {
  nationalityName: string;
}) =>
  nationalitiesArr.find(
    ({ name }) =>
      name.toLocaleLowerCase() === nationalityName.toLocaleLowerCase()
  );
