import { useState } from 'react';
import './App.css';
import Button from './component/Button';
import CheckBox from './component/CheckBox';
import { numberArray,symbolsArray,lowerCaseArray,upperCaseArray } from './component/Constant';
import Length from './component/Length';
import PaswordGenerator from './component/PaswordGenerator';


function App() {

  const [copied, setCopied] = useState(false);
  
    const [password, setPassword] = useState({
      uppercase: false,
      lowercase: false,
      number: false,
      symbols: false,
      length: null,
    })

    const [handelText, sethandelText] =useState("")

    const handelUppercaseChange = () =>{
      // console.log("handelUppercaseChange");
      setPassword({
        ...password,
        uppercase:!password.uppercase
      })
    }
    const handelLowercaseChange = () =>{
      // console.log("handelLowercaseChange");
      setPassword({
        ...password,
        lowercase: !password.lowercase
      })
    }
    const handelNumberChange = () =>{
      // console.log("handelNumberChange");
      setPassword({
        ...password,
        number: !password.number
      })
    }
    const handelSymbolChange = () =>{
      // console.log("handelSymbolChange");
      setPassword({
        ...password,
        symbols: !password.symbols
      })
    }
    const handelLengthChange = (value) =>{
      // console.log("handelLengthChange");
      setPassword({
        ...password,
        length: value
      })
      // console.log(password);
    }

    const generatePasword = () =>{
      // console.log(handelText,password);
      
       const {uppercase,lowercase,number,symbols,length} = password

        const generateWords = (uppercase,lowercase,number,symbols,length) =>{

          const availableWords =[
            ...(uppercase ? upperCaseArray :[]),
            ...(lowercase ? lowerCaseArray : []),
            ...(number ? numberArray : []),
            ...(symbols ? symbolsArray : [])
          ]
          const shuffleArray = (array) =>{
            return array.sort(()=>
               Math.random() -0.5
            )
          }
          const char = shuffleArray(availableWords).slice(0,length);
          console.log(char.join(""))
          sethandelText(char.join(""))
          return char
        }
        generateWords(uppercase,lowercase,number,symbols,length)
    }



  return (
    <div className="App">
      <div className='header'><h1>Password Generator</h1></div>
      <PaswordGenerator handelText={handelText} sethandelText={sethandelText} copied={copied}  setCopied={setCopied} />
      <Length label={"Select Password length"} onchange={handelLengthChange}/>
      <CheckBox label={"Include uppercase letters"} onchange={handelUppercaseChange}/>
      <CheckBox label={"Include lowercase letters"} onchange={handelLowercaseChange}/>
      <CheckBox label={"Include number"} onchange={handelNumberChange}/>
      <CheckBox label={"Include symbols"} onchange={handelSymbolChange}/>
      {/* <CheckBox label={"length"} onchange={handelLengthChange}/> */}
      <Button onclick={generatePasword}/>
    </div>
  );
}

export default App;
