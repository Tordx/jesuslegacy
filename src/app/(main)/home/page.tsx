import HomeClient from "./client";
import { HomeServices } from "@/app/services/home-services";

async function page() {
  const data = await HomeServices.getGallery();
  return <HomeClient data={data.data} />;
}

export default page;
