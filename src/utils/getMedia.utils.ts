import MediaJSON from "assets/media.json";

export const getMedia = (src: string) => {
  const [movies] = MediaJSON.categories;
  return movies.videos.find(({ sources }) => sources.includes(src));
};
