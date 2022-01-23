import Extension from "./Extension";

function Home() {
  return (
    <div class="Home">
      <Extension />
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
    </div>
  );
}

export default Home;
