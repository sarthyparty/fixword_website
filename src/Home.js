import Extension from "./Extension";
import FadeIn from "react-fade-in";

function Home() {
  return (
    <div class="Home">
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
