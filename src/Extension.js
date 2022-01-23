import FadeIn from "react-fade-in";
import "./App.css";
import {useState} from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {get_alts, StrengthChecker} from "./fixword"

function Extension() {
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState([]);
  const [strength, setStrength] = useState("");

  const handleChange = (password) => {
    setPassword(password)
    setOptions(get_alts(password,4))
    if (password != "") {
      setStrength(StrengthChecker(password))
    } else {
      setStrength("")
    }
  }


  return (
    <div className="App">
      <FadeIn>
        <h1>Make your passwords secure.</h1>
        <h2>While keeping them easy to remember.</h2>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Type Password"
          autocomplete="off"
          onChange={(e) => handleChange(e.target.value)}
        />
        {options.map((option) => (
          <Option option={option}/>
        ))}
      </FadeIn>

    </div>
  );
}

function Option(props) {
  return (
    <div class="option">
      <CopyToClipboard text={props.option}
          onCopy={() => this.setState({copied: true})}>
          <h3>{props.option}</h3>
        </CopyToClipboard>
    </div>
  );
}

export default Extension;