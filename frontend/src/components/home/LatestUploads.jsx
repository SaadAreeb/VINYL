import { useState } from "react";
import toast from "react-hot-toast";
import SongCard from "./SongCard";
import ConfirmModal from "../common/ConfirmModel";
import { getSongs, deleteSong } from "../../services/music.api";

const LatestUploads = ({
  songs,
  setSongs,
  loading,
}) => {
  

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSongId, setSelectedSongId] = useState(null);

 


  const handleDelete = (id) => {
    setSelectedSongId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async (id) => {
    try {
      await deleteSong(id);

      setSongs((prevSongs) =>
        prevSongs.filter((song) => song._id !== id)
      );

      toast.success("Song deleted successfully!");

    } catch (error) {
      console.error(error);

      if (error.response?.status === 403) {
        toast.error("You can't delete this song because you're not the author.");
      } else if (error.response?.status === 404) {
        toast.error("Song not found.");
      } else {
        toast.error("Failed to delete song.");
      }
    } finally {
      setShowDeleteModal(false);
      setSelectedSongId(null);
    }
  };

  if (loading) {
    return (
      <section className="mt-16">
        <h2 className="text-3xl font-bold">Latest Uploads</h2>
        <p className="mt-4 text-gray-400">Loading songs...</p>
      </section>
    );
  }

  return (
    <section className="mt-16">

      {/* Heading */}

      <div className="flex items-center justify-between ">
        <div>
          <h2 className="text-3xl font-bold text-center">
            Latest Uploads
          </h2>

          <p className="text-gray-400 mt-2 text-center">
            Fresh music uploaded by independent artists.
          </p>
        </div>
      </div>

      {/* Songs */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {songs.map((song, index) => (
          <SongCard
            key={song._id}
            song={song}
            songs={songs}
            index={index}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Delete Confirmation Modal */}

      <ConfirmModal
        isOpen={showDeleteModal}
        title="Delete Song"
        message="Are you sure you want to delete this song? This action cannot be undone."
        onCancel={() => {
          setShowDeleteModal(false);
          setSelectedSongId(null);
        }}
        onConfirm={() => confirmDelete(selectedSongId)}
      />

    </section>
  );
};

export default LatestUploads;