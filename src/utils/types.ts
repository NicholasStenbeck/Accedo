import MediaJSON from "assets/media.json";

export type Media = (typeof MediaJSON.categories)[number]["videos"][number];
