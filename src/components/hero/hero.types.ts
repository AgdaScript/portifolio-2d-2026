export type HeroMedia = {
  src: string;
  width: number;
  height: number;
};

export type HeroTitleContent = {
  name: string;
  badge: string;
};

export type HeroProps = {
  media: HeroMedia;
  loop: HeroMedia;
  title: HeroTitleContent;
};
