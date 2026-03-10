export default function sitemap() {
  const baseUrl = "https://witch-house.vercel.app";

  const pages = [
    "",
    "/axius-link",
    "/blame-venus",
    "/cain",
    "/crimewave",
    "/etalybovb",
    "/fraunhofer-diffraction",
    "/gate",
    "/m4r4zm",
    "/mugl",
    "/nedostupnost",
    "/plach-zemlya",
    "/radost-moja",
    "/scowitchboy",
    "/suicidewave",
    "/summer-of-haze",
    "/tenebrae",
    "/tvbfvck",
    "/vedmin-dom",
    "/vsn7",
    "/vv17chou7"
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
  }));
}