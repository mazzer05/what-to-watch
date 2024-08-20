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
  starring: string[];
  ratingType: 'Very good' | 'Good' | 'OK' | 'Bad';
  bgImage: string;
  filmDuration: Date;
  reviews: Review[];
};

export type Review = {
  id: number;
  name: string;
  date: Date;
  rating: number;
  text: string;
};
