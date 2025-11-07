import { useState } from "react";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      if (form.password !== form.confirmPassword) {
        alert("Passwords do not match ❌");
        return;
      }
      alert("Account registered successfully 💖");
    } else {
      alert("Logged in successfully ✅");
    }
    console.log(form);
  };

  return (
    <main
      className="container hero"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>{isRegister ? "Register to SafeHeaven 💗" : "Login to SafeHeaven 💗"}</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#ffeef4",
          padding: "24px",
          borderRadius: "22px",
          boxShadow: "var(--shadow)",
          marginTop: "20px",
          maxWidth: "400px",
        }}
      >
        {isRegister && (
          <>
            <label className="label">Full Name</label>
            <input
              name="name"
              className="input"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
            />
          </>
        )}

        <label className="label" style={{ marginTop: "16px" }}>
          Email
        </label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />

        <label className="label" style={{ marginTop: "16px" }}>
          Password
        </label>
        <input
          name="password"
          type="password"
          className="input"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
        />

        {isRegister && (
          <>
            <label className="label" style={{ marginTop: "16px" }}>
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              className="input"
              placeholder="Re-enter password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </>
        )}

        <button className="btn" style={{ marginTop: "20px" }}>
          {isRegister ? "Register" : "Login"}
        </button>

        <p
          style={{
            marginTop: "20px",
            color: "#6b5f68",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Already have an account? Login here"
            : "Don’t have an account? Register here"}
        </p>
      </form>
    </main>
  );
}
