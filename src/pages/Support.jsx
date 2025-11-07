import React from "react";
import supportImg from "../assets/support.jpg"; // ✅ Make sure this exists in src/assets

const cards = [
  { title: "Police Helpline 🚔", text: "Dial 100 immediately if you are in danger.", num: "100" },
  { title: "Women’s Helpline 👩‍🦰", text: "Dial 181 for immediate support for women in distress.", num: "181" },
  { title: "National Helpline ☎️", text: "Dial 1091 for round-the-clock assistance.", num: "1091" },
  { title: "Student Helpline 🎓", text: "For student emergencies, call 1098.", num: "1098" },
  { title: "Animal Welfare 🐾", text: "Call 1962 to report animal cruelty or rescues.", num: "1962" },
];

export default function Support() {
  return (
    <main className="container hero" style={{ padding: "30px" }}>
      {/* Header Section */}
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1>We’re Here for You 💜</h1>
          <p style={{ color: "#6b5f68" }}>
            In case of an emergency, don’t wait. Use the resources below to get immediate help.
          </p>
        </div>
        <img
          src={supportImg}
          alt="Support illustration"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 0 15px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* Know Your Rights / Services Section — moved to top */}
      <div
        className="info-section"
        style={{
          marginTop: "40px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          textAlign: "center",
        }}
      >
        <a
          href="https://knowindia.india.gov.in/profile/fundamental-rights.php"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
            background: "#f3e8ff",
            padding: "25px",
            borderRadius: "15px",
            width: "280px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h2>🧾 Know Your Rights</h2>
          <p>Learn about your fundamental rights and protections under Indian law.</p>
        </a>

        <a
          href="https://services.india.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
            background: "#e3f2fd",
            padding: "25px",
            borderRadius: "15px",
            width: "280px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h2>💼 Know Your Services</h2>
          <p>Explore government welfare programs, online services, and helplines.</p>
        </a>
      </div>

      {/* Helpline Cards - 4 per row */}
      <div className="hero-grid" style={{ marginTop: "40px" }}>
        <section>
          <div
            className="grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "25px",
              justifyItems: "center",
            }}
          >
            {cards.map((c) => (
              <div
                className="support-card"
                key={c.title}
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <h3>{c.title}</h3>
                <p style={{ color: "#6b5f68" }}>{c.text}</p>
                <button
                  style={{
                    background: "#7b2cbf",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "10px 15px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                  onClick={() => (window.location.href = `tel:${c.num}`)}
                >
                  Call Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "40px", textAlign: "center", color: "#6b5f68" }}>
        <p>You are never alone 💜. Reach out — help is always available 24/7.</p>
      </div>
    </main>
  );
}
