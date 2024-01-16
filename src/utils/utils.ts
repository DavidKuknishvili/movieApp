import { genres, seriesGenres } from "../data/filterData";

export const genreDetector = (genre: number) => {
  const foundGenre = seriesGenres.find((item) => item.id === genre.toString());
  if (foundGenre) {
    return foundGenre.title;
  } else {
    return genres[genre];
  }
};

export const getImagePath = (path: string) => {
  if (path === null) {
    return null;
  }

  return `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
};

export const getBackdropPath = (path: string) =>
  `https://image.tmdb.org/t/p/original${path}`;

export const timeConverter = (min: number) => {
  const hours = Math.floor(min / 60);
  const remainingMinutes = min % 60;

  let formattedTime = "";
  if (hours > 0) {
    formattedTime += hours + "h ";
  }
  formattedTime += remainingMinutes + "m";
  return formattedTime;
};
