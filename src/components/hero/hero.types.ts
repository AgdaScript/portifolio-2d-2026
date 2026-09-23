export type HeroTitleContent = {
  name: string;
  role: string;
};

export type HeroPortraitContent = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type HeroProps = {
  title: HeroTitleContent;
  portrait: HeroPortraitContent;
  className?: string;
};
