import { useState } from "react";
import toast from "react-hot-toast";
import { uploadSong } from "../services/music.api";
import MainLayout from "../layouts/MainLayout";

import uploadBg from "../assets/gif/vin.gif";

const UploadSong = () => {
  const [title, setTitle] = useState("");
  const [music, setMusic] = useState(null);
  const [cover, setCover] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!title || !music) {
      toast.error("Please enter a song title and select a music file.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", title);
      formData.append("music", music);

      if (cover) {
        formData.append("cover", cover);
      }

      await uploadSong(formData);

      toast.success("Song uploaded successfully!");

      setTitle("");
      setMusic(null);
      setCover(null);

      document.getElementById("musicFile").value = "";
      document.getElementById("coverFile").value = "";

    } catch (err) {

      console.error(err);

      if (err.response?.status === 401) {
        toast.error("Your session has expired. Please login again.");
      } else if (err.response?.status === 403) {
        toast.error("Only artists can upload songs.");
      } else {
        toast.error("Failed to upload song.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>

      <div className="relative min-h-screen overflow-hidden">

        {/* Background Video */}

      <img
  src={uploadBg}
  alt="Background"
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
  "
/>
        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-linear-to-br
            from-black/75
            via-purple-900/25
            to-pink-900/20
          "
        />

        {/* Content */}

        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">

          <div
            className="
              w-full
              max-w-3xl
              rounded-3xl
              border
              border-white/10
              bg-black/35
              backdrop-blur-xl
              p-10
              shadow-[0_0_60px_rgba(236,72,153,.18)]
            "
          >

            {/* Heading */}

            <h1 className="text-5xl font-extrabold text-center mb-12">
              Upload Song
            </h1>

            <form
              onSubmit={handleUpload}
              className="space-y-10"
            >

              {/* Song Title */}

              <div>

                <label className="block mb-3 text-gray-300 text-lg">
                  Song Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter song title..."
                  className="
                    w-full
                    rounded-2xl
                    bg-[#111118]
                    border
                    border-white/10
                    px-6
                    py-5
                    text-lg
                    outline-none
                    transition-all
                    focus:border-pink-500
                    focus:ring-2
                    focus:ring-pink-500/20
                  "
                />

              </div>

              {/* Music */}

              <div>

                <label className="block mb-3 text-gray-300 text-lg">
                  Music File
                </label>

                <input
                  id="musicFile"
                  type="file"
                  accept=".mp3,audio/*"
                  onChange={(e) => setMusic(e.target.files[0])}
                  className="
                    w-full
                    rounded-2xl
                    border-2
                    border-dashed
                    border-white/10
                    bg-[#111118]
                    p-6
                    cursor-pointer
                    transition
                    hover:border-pink-500
                  "
                />

                {music && (
                  <p className="mt-4 text-gray-400">
                    🎵 {music.name}
                  </p>
                )}

              </div>

              {/* Cover */}

              <div>

                <label className="block mb-3 text-gray-300 text-lg">
                  Cover Image
                </label>

                <input
                  id="coverFile"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCover(e.target.files[0])}
                  className="
                    w-full
                    rounded-2xl
                    border-2
                    border-dashed
                    border-white/10
                    bg-[#111118]
                    p-6
                    cursor-pointer
                    transition
                    hover:border-pink-500
                  "
                />

                {cover && (

                  <div className="mt-8">

                    <img
                      src={URL.createObjectURL(cover)}
                      alt="Cover Preview"
                      className="
                        w-full
                        h-80
                        object-cover
                        rounded-3xl
                        border
                        border-white/10
                        shadow-lg
                      "
                    />

                    <p className="mt-4 text-gray-400">
                      🖼 {cover.name}
                    </p>

                  </div>

                )}

              </div>

              {/* Upload Button */}

              <button
                disabled={loading}
                className="
                  w-full
                  rounded-2xl
                  bg-linear-to-r
                  from-pink-500
                  via-orange-400
                  to-yellow-400
                  py-5
                  text-xl
                  font-bold
                  text-white
                  shadow-[0_0_30px_rgba(236,72,153,.4)]
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_0_45px_rgba(236,72,153,.6)]
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                {loading ? "Uploading..." : "Upload Song"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default UploadSong;