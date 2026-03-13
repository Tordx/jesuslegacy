import HomeClient from "./client";
import { HomeServices } from "@/app/services/home-services";
export const dynamic = "force-dynamic";

async function Home() {
  
  const data = await HomeServices.getGallery();
  return <HomeClient data={data.data} />;
}

export default Home;
