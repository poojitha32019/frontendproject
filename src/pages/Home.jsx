import hero from "../assets/hero.jpg";

export default function Home() {
  return (
    <main className="container hero" role="main">
      {/* --- HERO SECTION --- */}
      <div className="hero-grid">
        <section>
          <h1>You Are Not Alone</h1>
          <p>
            SafeHeaven is your companion in silence, your space of strength,
            and your bridge to healing. We believe in your power to rise again.
          </p>
          <button className="cta" onClick={() => (window.location.href = "/login")}>
            Get Started
          </button>
        </section>
        <aside className="illus" aria-label="Hero Illustration">
          <img src={hero} alt="Empowered woman illustration" />
        </aside>
      </div>

      {/* --- FEATURES SECTION --- */}
      <section style={{ marginTop: "60px", textAlign: "center" }}>
        <h2 style={{ color: "#e24d7a" }}>Why Choose SafeHeaven?</h2>
        <p style={{ color: "#6b5f68", maxWidth: "700px", margin: "10px auto" }}>
          Because every soul deserves a safe space. Our mission is to guide,
          empower, and protect you through compassionate digital support.
        </p>

        <div
          className="grid"
          style={{
            marginTop: "30px",
            textAlign: "center",
            alignItems: "stretch",
          }}
        >
          <div className="support-card">
            <h3>🕊️ Confidential Reporting</h3>
            <p>Share your concerns safely without public exposure or judgment.</p>
          </div>
          <div className="support-card">
            <h3>💬 24/7 Support</h3>
            <p>Always there — via phone, email, or chat — whenever you need us.</p>
          </div>
          <div className="support-card">
            <h3>🤝 Trusted Community</h3>
            <p>Connect with survivors and supporters who understand your journey.</p>
          </div>
        </div>
      </section>

      {/* --- QUOTE / EMPOWERMENT SECTION --- */}
      <section
        style={{
          marginTop: "70px",
          background: "#ffeef4",
          padding: "30px",
          borderRadius: "18px",
          boxShadow: "var(--shadow)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#cc3c68" }}>Your Voice Matters 💖</h2>
        <p style={{ color: "#6b5f68", maxWidth: "700px", margin: "0 auto" }}>
          “You are not weak for needing help. You are strong for choosing to rise above pain.”  
          <br />Let SafeHeaven walk beside you on this journey of courage and healing.  
          <br /><br />
          🌸 Every small step you take is a victory — one that leads you closer to peace and strength.  
          <br />
          🌈 You deserve happiness, freedom, and safety — never forget that you matter.  
          <br />
          💖 The world is brighter because you are in it — let SafeHeaven be your light in the dark.  
        </p>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section style={{ marginTop: "60px", textAlign: "center" }}>
        <h3 style={{ color: "#e24d7a" }}>Need help right now?</h3>
        <button
          className="cta"
          onClick={() => (window.location.href = "/report")}
        >
          Report an Issue
        </button>
      </section>

      <div className="footer-space" />
    </main>
  );
}
