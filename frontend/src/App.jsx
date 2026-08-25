import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ChooseAccount from "./pages/ChooseAccount";
import ListenerSignup from "./pages/ListenerSignup";
import ArtistSignup from "./pages/ArtistSignup";
import UploadSong from "./pages/UploadSong";
import Album from "./pages/Album";
import Albums from "./pages/Albums";
import AlbumDetails from "./pages/AlbumDetails";
import Studio from "./pages/Studio";
import TestAudioEngine from "./pages/TestAudioEngine";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/test-audio" element={<TestAudioEngine />} />

        <Route
  path="/studio"
  element={<Studio />}
/>

        <Route path="/albums/:id"
  element={<AlbumDetails />}
/>

        <Route path="/albums" element={<Albums />} />

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/upload-song" element={<UploadSong />} />

        <Route path="/album" element={<Album />} />

        <Route
          path="/choose-account"
          element={<ChooseAccount />}
        />

        <Route
          path="/signup/listener"
          element={<ListenerSignup />}
        />

        <Route
          path="/signup/artist"
          element={<ArtistSignup />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;