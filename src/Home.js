import Extension from "./Extension";
import FadeIn from "react-fade-in";

function Home() {
  return (
    <div class="Home">
      <FadeIn>
        <h1>Make your passwords secure.</h1>
        <div class="headline">
          <h2>While keeping them easy to remember.</h2>
        </div>
      </FadeIn>
      <Extension />
      <FadeIn>
        <div class="links">
          <a
            href="https://github.com/sarthyparty/fixword_ext"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chrome Extension
          </a>

          <a
            href="https://github.com/sarthyparty/fixword"
            target="_blank"
            rel="noopener noreferrer"
          >
            NPM Package
          </a>
        </div>
      </FadeIn>
    </div>
  );
}

export default Home;
