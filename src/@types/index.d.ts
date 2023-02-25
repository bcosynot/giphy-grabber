export type GiphyImage = {
  height: number;
  width: number;
  size: string;
  url: string;
  webp: string;
  mp4: string;
};

export type GiphyImagesCollection = {
  downsized: GiphyImage;
  downsized_large: GiphyImage;
  downsized_medium: GiphyImage;
  downsized_small: GiphyImage;
  downsized_still: GiphyImage;
  preview_gif: GiphyImage;
  original: GiphyImage;
};

export type Gif = {
  id: string;
  url: string;
  images: GiphyImagesCollection;
  title: string;
};
