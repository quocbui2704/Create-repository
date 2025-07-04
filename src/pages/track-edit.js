import { useRouter } from "next/router";

export default function TrackEdit() {
  const router = useRouter();

  const handleSubmit = () => router.push("/done");
  const handleCancel = () => router.push("/overviews");

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Audio Details</h1>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>Audio File</label>
        <input type="file" accept="audio/*" style={styles.input} />
        <button style={styles.button}>Upload Audio</button>
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          What amount of generative AI tools were used in the creation of the stereo track?
        </label>
        <div style={styles.radioGroup}>
          <label><input type="radio" name="ai" /> None</label>
          <label><input type="radio" name="ai" /> Some</label>
          <label><input type="radio" name="ai" /> All</label>
        </div>
      </div>

      <h2 style={styles.sectionTitle}>Track Details</h2>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>Song Name</label>
        <input type="text" style={styles.input} />
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>Version</label>
        <input type="text" style={styles.input} />
      </div>

      <h2 style={styles.sectionTitle}>Display Artists</h2>
      <div style={styles.inlineGroup}>
        <input type="text" placeholder="Artist Name" style={styles.input} />
        <select style={styles.input}>
          <option value="primary">Primary</option>
          <option value="featured">Featured</option>
        </select>
      </div>
      <button style={styles.addButton}>+ Add Artist</button>

      <h2 style={styles.sectionTitle}>Contributors - Writers</h2>
      <div style={styles.inlineGroup}>
        <input type="text" placeholder="Artist Name" style={styles.input} />
        <select style={styles.input}>
          <option>Select Role</option>
          <option>Writer</option>
        </select>
      </div>
      <button style={styles.addButton}>+ Add Writer</button>

      <h2 style={styles.sectionTitle}>Contributors - Performers</h2>
      <div style={styles.inlineGroup}>
        <input type="text" placeholder="Artist Name" style={styles.input} />
        <select style={styles.input}>
          <option>Select Role</option>
          <option>Performer</option>
        </select>
      </div>
      <button style={styles.addButton}>+ Add Performer</button>

      <h2 style={styles.sectionTitle}>Genre & Recording Info</h2>

      <div style={styles.inlineGroup}>
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Genre</label>
          <select style={styles.input}>
            <option>Alternative</option>
            <option>Pop</option>
            <option>Rock</option>
            <option>Hip-Hop</option>
          </select>
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Subgenre</label>
          <select style={styles.input}>
            <option>Alternative Rock</option>
            <option>Pop Rock</option>
            <option>Hip-Hop Trap</option>
          </select>
        </div>
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>Explicit Status</label>
        <div style={styles.radioGroup}>
          <label><input type="radio" name="explicit" /> Non Explicit</label>
          <label><input type="radio" name="explicit" /> Explicit</label>
          <label><input type="radio" name="explicit" /> Censored</label>
        </div>
      </div>

      <div style={styles.inlineGroup}>
        <div style={styles.fieldGroup}>
          <label style={styles.label}>Recording Year</label>
          <input type="number" placeholder="2025" style={styles.input} />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Country of Recording</label>
          <select style={styles.input}>
            <option>Select a country</option>
            <option>USA</option>
            <option>UK</option>
            <option>Germany</option>
          </select>
        </div>
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>Audio Style</label>
        <div style={styles.radioGroup}>
          <label><input type="radio" name="audioStyle" /> Instrumental</label>
          <label><input type="radio" name="audioStyle" /> Vocal</label>
        </div>
      </div>

      <div style={styles.buttons}>
        <button style={styles.button} onClick={handleSubmit}>Submit</button>
        <button style={styles.button} onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "2rem",
    color: "white",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    marginTop: "2rem",
    marginBottom: "1rem",
  },
  fieldGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "0.7rem",
    backgroundColor: "black",
    color: "white",
    border: "1px solid white",
    boxSizing: "border-box",
  },
  inlineGroup: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  },
  radioGroup: {
    display: "flex",
    gap: "2rem",
    marginTop: "0.5rem",
  },
  addButton: {
    margin: "0.5rem 0 1rem 0",
    padding: "0.5rem 1rem",
    backgroundColor: "white",
    color: "black",
    border: "1px solid white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
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
