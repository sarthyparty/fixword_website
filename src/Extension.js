import FadeIn from "react-fade-in";
import "./App.css";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { get_alts, StrengthChecker } from "./fixword";
import ReactSlider from "react-slider";

function Extension() {
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState([]);
  const [strength, setStrength] = useState("");
  const [percent, setPercent] = useState(0);

  const handleChange = (password) => {
    setPassword(password);
    setOptions(get_alts(password, 4, percent/100));
    if (password != "") {
      setStrength(StrengthChecker(password));
    } else {
      setStrength("");
    }
  };

  const handleDrag = (percent) => {
    setPercent(percent);
    setOptions(get_alts(password, 4, percent/100));
  };

  return (
    <div className="ext">
      <FadeIn>
        <h1>Generate unique usernames.</h1>
        <div class="headline">
          <h2>While keeping them easy to remember.</h2>
        </div>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Type here..."
          autocomplete="off"
          onChange={(e) => handleChange(e.target.value)}
        />
        <div class="slider">
          <div class="slidecontainer">
            <input
              type="range"
              min="1"
              max="100"
              defaultValue={25}
              class="slider"
              id="myRange"
              onChange={(e, val) => handleDrag(e.target.value)}
            />
          </div>
        </div>

        {options.map((option) => (
          <Option option={option} />
        ))}
      </FadeIn>
    </div>
  );
}

function Option(props) {
  return (
    <div class="option">
      <CopyToClipboard
        text={props.option}
        onCopy={() => this.setState({ copied: true })}
      >
        <h3>{props.option}</h3>
      </CopyToClipboard>
    </div>
  );
}

export default Extension;
