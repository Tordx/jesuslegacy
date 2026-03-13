import api from "@/axios"

export const HomeServices = {
  async getGallery() {

    const response = await api.get('/home/getGallery', {
      headers: { 'Content-Type': 'application/json' },
    });

    return response.data
  }
}