import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CreateUser() {
  const router = useRouter();
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    // Check quyền admin khi load trang
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (isLoggedIn !== "true" || !currentUser || currentUser.role !== "admin") {
      alert("Bạn không có quyền truy cập trang này!");
      router.push("/");
    }
  }, []);

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (!newUsername || !newPassword) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((u) => u.username === newUsername);
    if (userExists) {
      alert("Tài khoản đã tồn tại!");
      return;
    }

    users.push({ username: newUsername, password: newPassword, role: "user" });
    localStorage.setItem("users", JSON.stringify(users));
    alert(`Tạo tài khoản thành công cho: ${newUsername}`);
    setNewUsername("");
    setNewPassword("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create New User</h1>
      <form style={styles.form} onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Create User</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Futura, sans-serif",
    padding: "2rem",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
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
};
