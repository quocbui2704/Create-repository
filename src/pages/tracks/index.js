import { useEffect, useState } from "react";
import Link from "next/link";

export default function TracksList() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const savedRelease = localStorage.getItem("releaseData");
    if (savedRelease) {
      const release = JSON.parse(savedRelease);
      const dummyTracks = [];

      for (let i = 1; i <= (release.tracks || 1); i++) {
        dummyTracks.push({
          id: i,
          title: `${release.title} - Track ${i}`,
          artist: release.artist,
          upc: release.upc,
        });
      }

      setTracks(dummyTracks);
    }
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tracks</h1>
      <ul style={styles.list}>
        {tracks.length === 0 ? (
          <p>No tracks found. Please upload a release first.</p>
        ) : (
          tracks.map((track) => (
            <li key={track.id} style={styles.item}>
              <Link href={`/tracks/${track.id}`} style={styles.link}>
                {track.title} - {track.artist}
              </Link>
            </li>
          ))
        )}
      </ul>
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
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    marginBottom: "0.5rem",
  },
  link: {
    color: "white",
    textDecoration: "underline",
    cursor: "pointer",
  },
};
