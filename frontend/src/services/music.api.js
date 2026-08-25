import api from "./api";

export const uploadSong = async (formData) => {
  const response = await api.post("/music/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getSongs = async () => {
  const response = await api.get("/music");
  return response.data;
};

export const deleteSong = async (id) => {
  const response = await api.delete(`/music/${id}`);
  return response.data;
};