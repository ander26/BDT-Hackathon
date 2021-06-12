export const getCountries = async () => {
  try {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();

    const countries = data.map((element) => {
      let callingCode = "";
      if (element.callingCodes.length > 0) {
        callingCode = element.callingCodes[0];
      }
      const code = element.alpha2Code;
      return { name: element.name, code: code, phone: `+${callingCode}` };
    });

    if (countries) {
      (await import("utils/localStorage")).saveCountries(countries);
    }
    return countries;
  } catch {
    return undefined;
  }
};
