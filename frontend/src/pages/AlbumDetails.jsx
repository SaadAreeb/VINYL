import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { usePlayer } from "../context/PlayerContext";


import {
  FaPlay,
  FaCompactDisc,
  FaTrash,
  FaMusic,
} from "react-icons/fa";

import MainLayout from "../layouts/MainLayout";
import {
  getAlbumById,
  deleteAlbum,
} from "../services/album.api";

const AlbumDetails = () => {

    const { playSong, playQueue } = usePlayer();

  const navigate = useNavigate();

  const { id } = useParams();

  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAlbum();
  }, []);

  const fetchAlbum = async () => {

    try {

      const response = await getAlbumById(id);

      setAlbum(response.album);

    } catch (error) {

      console.error(error);

      toast.error("Failed to load album.");

    } finally {

      setLoading(false);

    }

  };

  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Delete this album?"
    );

    if (!confirmDelete) return;

    try {

      await deleteAlbum(album._id);

      toast.success("Album deleted.");

      navigate("/albums");

    } catch (error) {

      console.error(error);

      toast.error("Failed to delete album.");

    }

  };

  if (loading) {

    return (

      <MainLayout>

        <div className="min-h-screen flex items-center justify-center">

          <h1 className="text-4xl font-bold">
            Loading Album...
          </h1>

        </div>

      </MainLayout>

    );

  }

  if (!album) {

    return (

      <MainLayout>

        <div className="min-h-screen flex items-center justify-center">

          <h1 className="text-4xl">
            Album Not Found
          </h1>

        </div>

      </MainLayout>

    );

  }

  return (

    <MainLayout>

      <div className="min-h-screen bg-[#0f0f14] px-16 py-20">

        <div className="mx-auto max-w-375">

          {/* Hero */}

          <div
            className="
              rounded-[36px]
              border
              border-white/10
              bg-[#17171d]
              p-16
              flex
              items-center
              justify-between
              gap-20
            "
          >

            {/* Left */}

            <div className="flex items-center gap-14">

              {/* Vinyl */}

              <div
                className="
                  relative
                  flex
                  h-72
                  w-72
                  items-center
                  justify-center
                  rounded-full
                  bg-linear-to-br
                  from-pink-500
                  via-orange-400
                  to-yellow-400
                  shadow-[0_0_70px_rgba(236,72,153,.25)]
                  transition-all
                  duration-1000
                  hover:rotate-180
                "
              >

                <div
                  className="
                    flex
                    h-52
                    w-52
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                  "
                >

                  <FaCompactDisc
                    className="
                      text-8xl
                      text-white
                    "
                  />

                </div>

              </div>

              {/* Info */}

              <div>

                <p
                  className="
                    uppercase
                    tracking-[0.35em]
                    text-pink-400
                    text-sm
                  "
                >
                  Album
                </p>

                <h1
                  className="
                    mt-5
                    text-7xl
                    font-black
                    leading-none
                  "
                >
                  {album.title}
                </h1>

                <p
                  className="
                    mt-7
                    text-2xl
                    text-gray-300
                  "
                >
                  {album.artist?.username}
                </p>

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-3
                    text-gray-500
                  "
                >

                  <FaMusic />

                  {album.musics.length} Songs

                </div>

                {/* Buttons */}

                <div
                  className="
                    mt-12
                    flex
                    gap-5
                  "
                >

                  <button
                   onClick={() => playSong(song)}
                    className="
                      h-14
                      px-10
                      rounded-2xl
                      bg-linear-to-r
                      from-pink-500
                      via-orange-400
                      to-yellow-400
                      font-semibold
                      transition-all
                      hover:scale-105
                    "
                  >

                    <div className="flex items-center gap-3">

                      <FaPlay />

                      Play Album

                    </div>

                  </button>

                  <button
                    onClick={handleDelete}
                    className="
                      h-14
                      px-10
                      rounded-2xl
                      bg-red-500
                      font-semibold
                      transition-all
                      hover:bg-red-600
                    "
                  >

                    <div className="flex items-center gap-3">

                      <FaTrash />

                      Delete

                    </div>

                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* Song List */}

          <div className="mt-24">

            <h2
              className="
                text-4xl
                font-bold
                mb-12
              "
            >
              Songs
            </h2>

            <div className="space-y-6">

            {album.musics.map((song, index) => (

  <div
    key={song._id}
    className="
      group
      flex
      items-center
      justify-between
      rounded-[28px]
      border
      border-white/10
      bg-[#17171d]
      px-10
      py-8
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-pink-500/30
      hover:shadow-[0_0_35px_rgba(236,72,153,.12)]
    "
  >

    {/* Left */}

    <div className="flex items-center gap-8">

      {/* Track Number */}

      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#111118]
          text-xl
          font-bold
          text-gray-400
          group-hover:text-pink-400
        "
      >
        {index + 1}
      </div>

      {/* Song Info */}

      <div>

        <h3
          className="
            text-2xl
            font-semibold
          "
        >
          {song.title}
        </h3>

        <p
          className="
            mt-2
            text-gray-400
          "
        >
          {song.artist?.username}
        </p>

      </div>

  </div>
    {/* Right */}

    <div className="flex items-center gap-8">

      <span
        className="
          rounded-full
          border
          border-white/10
          bg-[#111118]
          px-5
          py-2
          text-sm
          text-gray-400
        "
      >
        Track {index + 1}
      </span>

      <button

    onClick={async() => {

  playSong(song);

  navigate("/studio", {
  state: {
    from: `/albums/${id}`,
  },
});

}}
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-linear-to-r
          from-pink-500
          via-orange-400
          to-yellow-400
          text-xl
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-[0_0_25px_rgba(236,72,153,.35)]
        "
      >
        <FaPlay />
      </button>

    </div>

  </div>

))}

            </div>

          </div>

        </div>

      </div>

    </MainLayout>

  );

};

export default AlbumDetails;