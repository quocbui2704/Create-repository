import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TrackDetail() {
  const router = useRouter();
  const { trackId } = router.query;
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const savedRelease = localStorage.getItem("releaseData");
    if (savedRelease && trackId) {
      const release = JSON.parse(savedRelease);
      setTrack({
        title: `${release.title} - Track ${trackId}`,
        artist: release.artist,
        upc: release.upc,
        trackNumber: trackId,
      });
    }
  }, [trackId]);

  if (!track) return <div style={styles.container}>Loading...</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Track Detail</h1>
      <p><strong>Title:</strong> {track.title}</p>
      <p><strong>Artist:</strong> {track.artist}</p>
      <p><strong>UPC:</strong> {track.upc || "Auto-generated"}</p>
      <p><strong>Track #:</strong> {track.trackNumber}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "2rem",
    color: "white",
    fontFamily: "Poppins, sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
};
