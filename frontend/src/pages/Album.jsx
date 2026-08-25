import MainLayout from "../layouts/MainLayout";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import AlbumCard from "../components/home/AlbumCard";

import { getSongs } from "../services/music.api";
import { createAlbum } from "../services/album.api";

const Album = () => {

  const [title, setTitle] = useState("");
  const [songs, setSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {

      const response = await getSongs();

      setSongs(response.musics);

    } catch (error) {

      console.error(error);
      toast.error("Failed to load songs.");

    }
  };

  const toggleSong = (id) => {

    if (selectedSongs.includes(id)) {

      setSelectedSongs((prev) =>
        prev.filter((songId) => songId !== id)
      );

    } else {

      setSelectedSongs((prev) => [...prev, id]);

    }

  };

  const handleCreateAlbum = async () => {

    if (!title.trim()) {
      return toast.error("Please enter an album title.");
    }

    if (selectedSongs.length === 0) {
      return toast.error("Please select at least one song.");
    }

    try {

      setLoading(true);

      await createAlbum({
        title,
        musics: selectedSongs,
      });

      toast.success("Album created successfully!");

      setTitle("");
      setSelectedSongs([]);

    } catch (error) {

      console.error(error);

      toast.error("Failed to create album.");

    } finally {

      setLoading(false);

    }

  };


return (
  <MainLayout>

    <div className="min-h-screen bg-[#0f0f14] px-12 py-20">

      <div className="mx-auto w-full max-w-7xl">

        {/* ================= Heading ================= */}

        <div className="mb-24 text-center">

          <h1
            className="
              text-6xl
              font-black
              tracking-tight
            "
          >
            Create Album
          </h1>

          <p
            className="
              mt-6
              text-xl
              text-gray-400
            "
          >
            Organize your songs into a beautiful collection.
          </p>

        </div>

        {/* ================= Main Grid ================= */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-20
            items-start
          "
        >

          {/* ================= Left Card ================= */}

          <div
            className="
              rounded-4xl
              border
              border-white/10
              bg-[#17171d]
              p-12
              shadow-[0_0_40px_rgba(236,72,153,.08)]
            "
          >

            <div className="space-y-2">

              <h2 className="text-3xl font-bold">
                Album Details
              </h2>

              <p className="text-gray-500">
                Give your album a memorable title.
              </p>

            </div>

            <div className="my-10 border-t border-white/10"></div>

            {/* Album Name */}

            <div className="space-y-5">

              <label
                className="
                  text-lg
                  font-medium
                  text-gray-300
                "
              >
                Album Name
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                placeholder="Enter album name..."
                className="
                  w-full
                  rounded-2xl
                  bg-[#111118]
                  border
                  border-white/10
                  px-7
                  py-6
                  text-lg
                  outline-none
                  transition-all
                  focus:border-pink-500
                  focus:ring-2
                  focus:ring-pink-500/20
                "
              />

            </div>

            <div className="my-10 border-t border-white/10"></div>

            {/* Selected Songs */}

            <div className="space-y-5">

              <h3
                className="
                  text-lg
                  font-medium
                  text-gray-300
                "
              >
                Selected Songs
              </h3>

              <div
                className="
                  h-40
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#111118]
                  flex
                  flex-col
                  items-center
                  justify-center
                "
              >

                <span
                  className="
                    text-6xl
                    font-black
                    text-pink-500
                  "
                >
                  {selectedSongs.length}
                </span>

                <p className="mt-3 text-gray-500">
                  Songs Added
                </p>

              </div>

            </div>

          </div>

          {/* ================= Right Card Starts Here ================= */}

          <div
            className="
              rounded-4xl
              border
              border-white/10
              bg-[#17171d]
              p-12
              shadow-[0_0_40px_rgba(236,72,153,.08)]
            "
          >
                      <div className="flex items-center justify-between mb-10">

              <div>

                <h2 className="text-3xl font-bold">
                  Select Songs
                </h2>

                <p className="mt-2 text-gray-500">
                  Choose the songs you want to include.
                </p>

              </div>

              <div
                className="
                  rounded-full
                  bg-[#111118]
                  border
                  border-white/10
                  px-5
                  py-2
                  text-sm
                  text-gray-400
                "
              >
                {songs.length} Songs
              </div>

            </div>

            <div
              className="
                h-162.5
                overflow-y-auto
                pr-3
                space-y-6
              "
            >

              {songs.length === 0 ? (

                <div className="flex h-full items-center justify-center text-gray-500">
                  No songs uploaded yet.
                </div>

              ) : (

                songs.map((song) => {

                  const selected =
                    selectedSongs.includes(song._id);

                  return (

                    <div
                      key={song._id}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-3xl
                        bg-[#111118]
                        border
                        border-white/10
                        px-7
                        py-6
                        transition-all
                        duration-300
                        hover:border-pink-500/40
                        hover:shadow-[0_0_20px_rgba(236,72,153,.15)]
                        hover:-translate-y-1
                      "
                    >

                      <div className="space-y-2">

                        <h3 className="text-xl font-semibold">
                          {song.title}
                        </h3>

                        <p className="text-gray-400">
                          {song.artist?.username}
                        </p>

                      </div>

                      <button
                        onClick={() => toggleSong(song._id)}
                        className={`
                          w-32
                          h-12
                          rounded-2xl
                          text-sm
                          font-semibold
                          transition-all
                          duration-300

                          ${
                            selected
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-pink-500 hover:bg-pink-400"
                          }
                        `}
                      >
                        {selected ? "Added" : "Add"}
                      </button>

                    </div>

                  );

                })

              )}

            </div>

          </div>

        </div>

        {/* ================= Bottom Button ================= */}

        <div className="mt-24 flex justify-center">

          <button
            onClick={handleCreateAlbum}
            disabled={loading}
            className="
              w-107.5
              h-16
              rounded-2xl
              bg-linear-to-r
              from-pink-500
              via-orange-400
              to-yellow-400
              text-base
              font-semibold
              tracking-wide
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_0_45px_rgba(236,72,153,.45)]
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Creating Album..." : "Create Album"}
          </button>

        </div>

      </div>

    </div>

  </MainLayout>
);
};

export default Album;