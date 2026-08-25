import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

import Hero from "../components/home/Hero";
import LatestUploads from "../components/home/LatestUploads";

import { getSongs } from "../services/music.api";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await getSongs();
        setSongs(response.musics);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return (
    <MainLayout>
      <Hero latestSong={songs[0]} />

      <LatestUploads
        songs={songs}
        setSongs={setSongs}
        loading={loading}
      />
    </MainLayout>
  );
};

export default Home;