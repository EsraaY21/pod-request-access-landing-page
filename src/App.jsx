function App() {
  return (
    <main>
      <img src="/assets/desktop/logo.svg" alt="Logo" className="logo" />
      <div className="content">
        <h1 className="text-1">
          Publish your podcasts <span>everywhere.</span>
        </h1>
        <p className="text-2">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>

        <form className="cta" id="cta">
          <input type="email" placeholder="Email address" />
          <button type="submit" className="text-3" form="cta">
            Request access
          </button>
        </form>

        <div className="sponsors">
          <img src="/assets/desktop/spotify.svg" alt="spotify" />
          <img src="/assets/desktop/apple-podcast.svg" alt="apple" />
          <img src="/assets/desktop/google-podcasts.svg" alt="google" />
          <img src="/assets/desktop/pocket-casts.svg" alt="pocket" />
        </div>
      </div>
    </main>
  );
}

export default App;
