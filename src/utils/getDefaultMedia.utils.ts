import MediaJSON from "assets/media.json";

export const getDefaultMedia = () => {
  const { videos } = MediaJSON.categories[0];
  return [videos[5], videos[6], videos[3]];
};
