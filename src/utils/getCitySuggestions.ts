import { IOptions, ISuggestion } from "../types/typings";

const getCitySuggestions = async (word: string, setData: any) => {
  // const options: IOptions = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
  //     "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  //   },
  // };
  // const data = await fetch(
  //   `https://hotels4.p.rapidapi.com/locations/v3/search?q=${word}&locale=en_CA`,
  //   options
  // );
  // const json = await data.json();

  // const suggestionsFormatted = json.sr.map((suggestion: ISuggestion) => ({
  //   shortName: suggestion.regionNames.shortName,
  //   displayName: suggestion.regionNames.displayName,
  //   id: suggestion.gaiaId,
  //   type: suggestion.type,
  // }));

  const suggestionsFormatted = {"shortName":"Nairobi","displayName":"Nairobi, Kenya","type":"CITY","img":"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTEVtdbOMit1j3E07KaBvNuY5hfGmJRCV1P9uBB-s5LgPJMlVuEVviSSmZTWh3on8zG","location":"Vancouver","province":"British Columbia","id":"4106"};
  setData(suggestionsFormatted);
};

export default getCitySuggestions;
