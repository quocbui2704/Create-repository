import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Overviews() {
  const router = useRouter();
  const [releaseData, setReleaseData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("releaseData"));
    if (data) setReleaseData(data);
  }, []);

  const handleNext = () => router.push("/track-edit");
  const handleCancel = () => router.push("/");

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Release Overview</h1>
      {releaseData ? (
        <>
          <p><strong>Release Title:</strong> {releaseData.title || "N/A"}</p>
          <p><strong>Artist:</strong> {releaseData.artist || "N/A"}</p>
          <p><strong>UPC:</strong> {releaseData.upc || "Auto-generated UPC"}</p>
          <p><strong>Tracks:</strong> {releaseData.tracks || "N/A"}</p>
          <button style={buttonStyle} onClick={handleNext}>Next</button>
          <button style={buttonStyle} onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <p>Loading release data...</p>
      )}
    </div>
  );
}

const buttonStyle = {
  margin: "0.5rem",
  padding: "0.7rem 1.5rem",
  backgroundColor: "white",
  color: "black",
  border: "1px solid white",
  fontWeight: "bold",
  cursor: "pointer",
};
