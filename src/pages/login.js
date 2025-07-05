import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Tạo user admin mặc định nếu chưa có (chỉ chạy 1 lần)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const adminExists = users.some((u) => u.username === "admin");
    if (!adminExists) {
      users.push({ username: "admin", password: "password", role: "admin" });
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      router.push("/");
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <div style={styles.logoWrapper}>
          <img src="/logo.png" alt="Logo" style={styles.logoIcon} />
          <h2 style={styles.welcomeText}>Welcome to SMG</h2>
        </div>
        <h1 style={styles.title}>Login</h1>
        <form style={styles.form} onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Futura, sans-serif",
    color: "white",
    padding: "2rem 0",
  },
  formWrapper: {
    textAlign: "center",
    width: "300px",
  },
  logoWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1rem",
  },
  logoIcon: {
    width: "50px",
    height: "auto",
    marginBottom: "0.5rem",
  },
  welcomeText: {
    fontSize: "1.5rem",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.7rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid white",
    backgroundColor: "black",
    color: "white",
    outline: "none",
  },
  button: {
    padding: "0.7rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "black",
    backgroundColor: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  logo: {
    width: "100px",
    height: "auto",
  },
};
