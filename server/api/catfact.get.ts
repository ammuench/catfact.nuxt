type CatFactJSON = {
  fact: string;
  length: number;
};

export default defineEventHandler(async (): Promise<CatFactJSON> => {
  try {
    const cfGet = await fetch("https://catfact.ninja/fact");
    const cfJSON = await cfGet.json();

    return cfJSON;
  } catch (e) {
    return {
      fact: "A cat knocked a glass of water into the catfact server, try again!",
      length: -1,
    };
  }
});
