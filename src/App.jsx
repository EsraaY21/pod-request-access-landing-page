import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Oops! Please add your email");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Oops! Please check your email");
    } else {
      setError("");
      console.log("Email submitted:", email);
    }
  };

  return (
    <main>
      <div className="logo_container">
        <img src="/assets/desktop/logo.svg" alt="Logo" className="logo" />
      </div>
      <div className="content">
        <div className="text_content">
          <h1 className="text-1">
            Publish your podcasts <span>everywhere.</span>
          </h1>
          <p className="text-2">
            Upload your audio to Pod with a single click. We’ll then distribute
            your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket
            Casts and more!
          </p>
        </div>

        {/* Form ********** */}
        <form className="cta" id="cta" onSubmit={handleSubmit}>
          <input
            name="email"
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? "error" : ""}
          />
          <button type="submit" className="text-3" form="cta">
            Request access
          </button>

          {error && <p className="error text-4">{error}</p>}
        </form>

        <div className="sponsors">
          <img src="/assets/desktop/spotify.svg" alt="spotify" />
          <img src="/assets/desktop/apple-podcast.svg" alt="apple" />
          <img src="/assets/desktop/google-podcasts.svg" alt="google" />
          <img src="/assets/desktop/pocket-casts.svg" alt="pocket" />
        </div>
      </div>

      <img src="/assets/desktop/bg-pattern-dots.svg" className="dots_pattern" />
    </main>
  );
}

export default App;
