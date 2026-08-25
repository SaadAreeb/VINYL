import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import AlbumCard from "../components/home/AlbumCard";

import { getAlbums } from "../services/album.api";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await getAlbums();
      setAlbums(response.albums);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch albums.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="flex min-h-[70vh] items-center justify-center">
          <h1 className="text-3xl font-bold">Loading Albums...</h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-7xl px-6 py-6">

        {/* Heading */}

        <div className="mb-8 text-center">

          <h1 className="text-5xl font-black">
            Albums
          </h1>

          <p className="mt-2 text-lg text-gray-400">
            Browse all your created albums.
          </p>

        </div>

        {/* Search */}

        <div className="mb-12 flex justify-center">

          <input
            type="text"
            placeholder="Search albums"
            className="
              w-full
              max-w-xl
              rounded-xl
              border
              border-white/10
              bg-[#17171d]
              px-5
              py-3
              text-center
              outline-none
              transition-all
              focus:border-pink-500
            "
          />

        </div>

        {/* Albums */}

        {albums.length === 0 ? (

          <div className="flex h-80 items-center justify-center rounded-3xl border border-dashed border-white/10 text-xl text-gray-500">
            No albums created yet.
          </div>

        ) : (

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-8
              justify-items-center
            "
          >

            {albums.map((album) => (
              <AlbumCard
                key={album._id}
                album={album}
              />
            ))}

          </div>

        )}

      </div>
    </MainLayout>
  );
};

export default Albums;