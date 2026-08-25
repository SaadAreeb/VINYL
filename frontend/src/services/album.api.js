import api from "./api";

// Create Album
export const createAlbum = async (data) => {
  const response = await api.post("/music/album", data);

  return response.data;
};

export const getAlbums = async () => {
  const response = await api.get("/music/albums");
  return response.data;
};

export const getAlbumById = async (id) => {
  const response = await api.get(`/music/album/${id}`);
  return response.data;
};

// Delete Album
export const deleteAlbum = async (id) => {
  const response = await api.delete(`/music/album/${id}`);

  return response.data;
};