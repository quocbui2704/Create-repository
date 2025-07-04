import { useState } from "react";
import { useRouter } from "next/router";

export default function Upload() {
  const router = useRouter();
  const [coverArt, setCoverArt] = useState(null);

  const [releaseTitle, setReleaseTitle] = useState("");
  const [primaryArtist, setPrimaryArtist] = useState("");
  const [upc, setUpc] = useState("");
  const [tracks, setTracks] = useState("");

  const handleCoverUpload = (e) => {
    const file = e.target.files[0];
    if (file) setCoverArt(URL.createObjectURL(file));
  };

  const handleSave = () => {
    const releaseData = {
      title: releaseTitle,
      artist: primaryArtist,
      upc: upc,
      tracks: tracks,
    };
    localStorage.setItem("releaseData", JSON.stringify(releaseData));
    router.push("/overviews");
  };

  const handleCancel = () => router.push("/");

  return (
    <div style={styles.container}>
      <div style={styles.coverArtBox}>
        {coverArt ? (
          <img src={coverArt} alt="Cover Art" style={styles.coverImage} />
        ) : (
          <img src="/logo.png" alt="Company Logo" style={styles.logoPlaceholder} />
        )}
      </div>
      <label style={styles.uploadLabel}>
        <input type="file" accept="image/*" onChange={handleCoverUpload} style={{ display: "none" }} />
        Upload Cover Art
      </label>

      <label style={styles.label}>Release Title</label>
      <input type="text" placeholder="Enter release title" style={styles.input} value={releaseTitle} onChange={(e) => setReleaseTitle(e.target.value)} />

      <label style={styles.label}>Release Version</label>
      <input type="text" placeholder="Enter release version" style={styles.input} />

      <label style={styles.label}>Metadata Language</label>
      <select style={styles.input}>
        <option value="">Select language</option>
        {languages.map((lang, i) => (
          <option key={i} value={lang}>{lang}</option>
        ))}
      </select>

      <label style={styles.label}>Primary Artist</label>
      <input type="text" placeholder="Enter artist name" style={styles.input} value={primaryArtist} onChange={(e) => setPrimaryArtist(e.target.value)} />

      <label style={styles.label}>UPC (leave blank for auto)</label>
      <input type="text" placeholder="UPC will be assigned automatically if empty" style={styles.input} value={upc} onChange={(e) => setUpc(e.target.value)} />

      <label style={styles.label}>Tracks</label>
      <input type="number" placeholder="Number of tracks" style={styles.input} value={tracks} onChange={(e) => setTracks(e.target.value)} />

      <label style={styles.label}>Release Pricing Tier</label>
      <select style={styles.input}>
        <option value="">Select pricing tier</option>
        <option value="single">Single - Front</option>
        <option value="standard">Standard Release</option>
      </select>

      <div style={styles.buttons}>
        <button style={styles.button} onClick={handleSave}>Save</button>
        <button style={styles.button} onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "2rem",
  },
  coverArtBox: {
    width: "200px",
    height: "200px",
    border: "2px dashed white",
    margin: "0 auto 1rem auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoPlaceholder: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
  coverImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  uploadLabel: {
    display: "block",
    textAlign: "center",
    marginBottom: "1rem",
    backgroundColor: "white",
    color: "black",
    padding: "0.7rem",
    cursor: "pointer",
    fontWeight: "bold",
  },
  label: {
    display: "block",
    marginTop: "1rem",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: "50px",
    padding: "0.7rem",
    backgroundColor: "black",
    border: "1px solid white",
    color: "white",
    boxSizing: "border-box",
  },
  buttons: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    margin: "0 0.5rem",
    padding: "0.7rem 1.5rem",
    backgroundColor: "white",
    color: "black",
    border: "1px solid white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

const languages = [
  "English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean",
  "Portuguese", "Russian", "Italian", "Arabic", "Hindi", "Turkish", "Vietnamese",
  "Indonesian", "Dutch", "Swedish", "Norwegian", "Finnish", "Danish", "Thai",
  "Polish", "Czech", "Greek", "Hebrew", "Romanian", "Hungarian", "Malay",
  "Filipino", "Ukrainian", "Bengali", "Urdu", "Persian", "Swahili", "Zulu", "Other"
];
