export interface AboutSectionData {
  id: number;
  image_src: string;
  title: string;
  description: string;
}

export type AboutProps = {
  data: AboutSectionData[],
  status: boolean;
};

export interface NavItems {
  id: number;
  label: string;
  path: string;
}