import "./Hero.css";

import vinyl from "../../assets/images/Vinyl.png";
import heroGif from "../../assets/gif/Hero.gif";
import bgVideo from "../../assets/videos/bg.mp4";
const Hero = ({ latestSong }) => {
  return (
    <section
  className="
    relative
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    px-6
    py-10
    md:px-8
    lg:px-12
    lg:py-16
  "
>
  {/* Background Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    brightness-40
  "
>
  <source src={bgVideo} type="video/mp4" />
</video>

{/* Overlay */}
<div className="absolute inset-0 bg-black/60" />
      {/* Background Glow */}

      <div className="hero-glow hero-glow-pink"></div>
      <div className="hero-glow hero-glow-blue"></div>

      {/* Content */}

      <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* ================= LEFT ================= */}

        <div>

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-pink-400
              text-sm
              font-semibold
            "
          >
            Latest Release
          </p>

          <h1
            className="
              mt-5
              text-5xl
              md:text-6xl
              xl:text-7xl
              font-black
              leading-none
              text-white
            "
          >
            {latestSong?.title || "No Songs Yet"}
          </h1>

          <p
            className="
              mt-4
              text-xl
              font-medium
              text-gray-300
            "
          >
            {latestSong?.artist?.username || "Unknown Artist"}
          </p>

          <p
            className="
              mt-8
              max-w-lg
              text-gray-400
              leading-8
            "
          >
            {latestSong
              ? `Experience the newest release from ${latestSong.artist.username}. Stream instantly and discover fresh independent music on Vinyl.`
              : "No music has been uploaded yet. Be the first artist to share your music on Vinyl."}
          </p>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="flex justify-center">

          <div
            className="
              relative
              floating
              w-68
              h-68
              sm:w-84
              sm:h-84
              lg:w-107.5
              lg:h-107.5
            "
          >

            {/* Glow */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-pink-500/20
                blur-[90px]
              "
            />

            {/* Vinyl */}

            <img
              src={vinyl}
              alt="Vinyl"
              draggable="false"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-contain
                vinyl
                pointer-events-none
                select-none
              "
            />

            {/* Latest Song Cover */}

            <img
              src={latestSong?.coverImage || heroGif}
              alt={latestSong?.title || "Latest Song"}
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2

                h-32
                w-32

                sm:h-40
                sm:w-40

                lg:h-48
                lg:w-48

                rounded-full
                object-cover

                border-[5px]
                border-[#111118]

                shadow-2xl

                z-20
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;