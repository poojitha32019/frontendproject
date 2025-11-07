import dash from '../assets/dashboard.jpg'

export default function Dashboard(){
  return (
    <main className="container hero">
      <div className="hero-grid">
        <section>
          <h1>Welcome, Powerful You! ✨</h1>
          <p>You are not defined by your past. You are strong, whole, and worthy of love and respect.</p>
          <p>SafeHeaven is your space to heal, grow, and rise again.</p>
          <div className="card" style={{marginTop:16}}>
            ✨ You are Power. You are Hope. You are Unbreakable. ✨
            <br/>
            Every step you take is a step towards your brightest future. We believe in you!
          </div>
        </section>
        <aside className="illus"><img src={dash} alt="Confident woman with curly hair" /></aside>
      </div>

      <div className="footer-space" />
      <section style={{ marginTop: "40px" }}>
        <h2>Contact Support</h2>
        <div className="grid" style={{ marginTop: "20px" }}>
          <div className="support-card">
            <h3>WhatsApp Support 💬</h3>
            <p>Chat with us directly for quick help.</p>
            <button
              className="call"
              onClick={() => window.open("https://wa.me/918143110637", "_blank")}
            >
              Chat on WhatsApp
            </button>
          </div>

          <div className="support-card">
            <h3>Call Support 📞</h3>
            <p>We’re here to listen and guide you.</p>
            <button
              className="call"
              onClick={() => (window.location.href = "tel:8143110637")}
            >
              Call Now
            </button>
          </div>

          <div className="support-card">
            <h3>Email Support 📧</h3>
            <p>Write to us anytime. We respond within hours.</p>
            <button
              className="call"
              onClick={() =>
                (window.location.href = "mailto:vutlapallipoojitha@gmail.com")
              }
            >
              Send Email
            </button>
          </div>
        </div>
      </section>

      {/* --- STORIES SECTION --- */}
      <section style={{ marginTop: "60px" }}>
        <h2>Real Stories That Inspire 💬</h2>
        <p style={{ color: "#6b5f68", maxWidth: "700px" }}>
          These real experiences remind us that courage and compassion can change lives.
        </p>

        <div
          className="grid"
          style={{
            marginTop: "25px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <div className="support-card">
            <h3>🚨 Fraud Awareness</h3>
            <p>
              A young student reported an online fraud through SafeHeaven. She was guided to the right authorities and got her funds back. Always report suspicious links or calls.
            </p>
          </div>

          <div className="support-card">
            <h3>👩‍🦰 Harassment Case</h3>
            <p>
              A woman reported workplace harassment through SafeHeaven. The case was escalated confidentially and resolved with proper action.
            </p>
          </div>

          <div className="support-card">
            <h3>💬 Student Helpline</h3>
            <p>
              A college student dealing with anxiety connected with the helpline. With help, she’s now mentoring others on campus.
            </p>
          </div>

          <div className="support-card">
            <h3>🐾 Animal Welfare</h3>
            <p>
              A resident rescued an injured puppy using SafeHeaven’s animal helpline. The pet was safely taken to a shelter and treated fully.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
