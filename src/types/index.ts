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