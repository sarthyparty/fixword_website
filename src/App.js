import logo from "./logo.svg";
import FadeIn from "react-fade-in";
import "./App.css";
import {useState} from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {get_alts} from "./Generator"



function App() {
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState([]);

  const handleChange = (password) => {
    setPassword(password)
    setOptions(get_alts(password,4))
  }


  return (
    <div className="App">
      <FadeIn>
        <h1>We make your passwords secure.</h1>
        <h2>While keeping them easy to remember.</h2>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Type Password"
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

export default App;
