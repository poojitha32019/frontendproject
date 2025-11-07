import { useState, useEffect } from "react";

export default function Report() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    customIssue: "",
    title: "",
    description: "",
  });

  const [reports, setReports] = useState([]);

  // Load reports from localStorage on page load
  useEffect(() => {
    const savedReports = JSON.parse(localStorage.getItem("reports")) || [];
    setReports(savedReports);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle report submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Assign a random status to simulate real tracking
    const statuses = ["Pending", "Under Review", "Solved"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    const newReport = {
      ...form,
      id: Date.now(),
      status: randomStatus,
      date: new Date().toLocaleString(),
    };

    const updatedReports = [...reports, newReport];
    setReports(updatedReports);
    localStorage.setItem("reports", JSON.stringify(updatedReports));

    alert("Your report has been safely submitted 💖");
    setForm({
      name: "",
      email: "",
      phone: "",
      type: "",
      customIssue: "",
      title: "",
      description: "",
    });
  };

  return (
    <main className="container hero">
      <h1>Report an Issue 🚨</h1>
      <p style={{ color: "#6b5f68", maxWidth: "700px" }}>
        You can confidentially report your issue here. Your data is safe and visible only to you.
      </p>

      {/* --- REPORT FORM --- */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#ffeef4",
          padding: "24px",
          borderRadius: "22px",
          boxShadow: "var(--shadow)",
          marginTop: "20px",
          maxWidth: "600px",
        }}
      >
        <label className="label">Full Name</label>
        <input
          name="name"
          className="input"
          placeholder="Enter your full name"
          value={form.name}
          onChange={handleChange}
        />

        <label className="label" style={{ marginTop: "16px" }}>
          Email ID
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
          Phone Number
        </label>
        <input
          name="phone"
          className="input"
          placeholder="Enter your phone number"
          value={form.phone}
          onChange={handleChange}
        />

        <label className="label" style={{ marginTop: "16px" }}>
          Issue Title
        </label>
        <input
          name="title"
          className="input"
          placeholder="Short title for your issue"
          value={form.title}
          onChange={handleChange}
        />

        <label className="label" style={{ marginTop: "16px" }}>
          Type of Issue
        </label>
        <select
          name="type"
          className="input"
          value={form.type}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option>Harassment</option>
          <option>Domestic Violence</option>
          <option>Abuse</option>
          <option>Cyber Threat</option>
          <option value="Other">Other</option>
        </select>

        {form.type === "Other" && (
          <>
            <label className="label" style={{ marginTop: "16px" }}>
              Specify Issue
            </label>
            <input
              name="customIssue"
              className="input"
              placeholder="Describe your issue type"
              value={form.customIssue}
              onChange={handleChange}
            />
          </>
        )}

        <label className="label" style={{ marginTop: "16px" }}>
          Description
        </label>
        <textarea
          name="description"
          rows="5"
          className="input"
          placeholder="Describe what happened..."
          value={form.description}
          onChange={handleChange}
        />

        <button className="btn" style={{ marginTop: "20px" }}>
          Submit Report
        </button>
      </form>

      {/* --- REPORT HISTORY SECTION --- */}
      <section style={{ marginTop: "60px", width: "100%" }}>
        <h2 style={{ color: "#e24d7a" }}>Your Report History 🗂️</h2>
        {reports.length === 0 ? (
          <p style={{ color: "#6b5f68" }}>No reports yet. Submit one to get started.</p>
        ) : (
          <div
            className="grid"
            style={{ marginTop: "20px", gridTemplateColumns: "1fr", gap: "15px" }}
          >
            {reports.map((report) => (
              <div
                key={report.id}
                className="support-card"
                style={{
                  textAlign: "left",
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow)",
                }}
              >
                <h3 style={{ color: "#cc3c68" }}>{report.title}</h3>
                <p>
                  <strong>Type:</strong>{" "}
                  {report.type === "Other" ? report.customIssue : report.type}
                </p>
                <p>
                  <strong>Date:</strong> {report.date}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    style={{
                      color:
                        report.status === "Solved"
                          ? "green"
                          : report.status === "Under Review"
                          ? "#e6a700"
                          : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {report.status}
                  </span>
                </p>
                <p style={{ color: "#6b5f68" }}>{report.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
