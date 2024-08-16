export type Film = {
  id: number;
  title: string;
  srcVideo: string;
  description: string;
  rating: number;
  previewImage: string;
  genre: string;
  date: Date;
  director: string;
  starring: string;
  ratingType: 'Very good' | 'Good' | 'OK' | 'Bad';
  bgImage: string;
};
