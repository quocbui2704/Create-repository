import { useRouter } from "next/router";

export default function Done() {
  const router = useRouter();

  const handleBack = () => router.push("/");

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Release Created Successfully!</h1>
      <p style={styles.message}>
        Your release has been created. You can view and manage it in your Dashboard.
      </p>
      <button style={styles.button} onClick={handleBack}>
        Back to Dashboard
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    padding: "4rem 2rem",
    color: "white",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  button: {
    padding: "0.7rem 1.5rem",
    backgroundColor: "white",
    color: "black",
    border: "1px solid white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
