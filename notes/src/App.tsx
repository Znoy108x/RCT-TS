import React from 'react';
import './App.css';

// Components Imports
import Greet from './Components/Greet';
import Person from "./Components/Person"
import PersonList from "./Components/PersonList"
import Status from './Components/Status';
import Heading from './Components/Heading';
import Oscar from './Components/Oscar';
import Button from './Components/Button';
import Input from './Components/Input';
import Container from './Components/Container';
import Loggedin from './Components/hooks/Loggedin';
import User from './Components/hooks/User';
import Counter from './Components/hooks/Counter';
import Profile from './Components/auth/Profile';

// context
import { ThemeContextProvider } from './Components/context/ThemeContext';
import { Box } from './Components/context/Box';
import UseRef from './Components/hooks/UseRef';
import MutableRef from './Components/hooks/MutableRef';
import Private from './Components/auth/Private';
import List from './Components/generics/List';
import RandomNumber from './Components/restriction/RandomNumber';
import Toast from './Components/templateLiterals/Toast';
import ButtonHtml from './Components/html/ButtonHtml';
import InputHtml from './Components/html/InputHtml';
import CustomComponent from './Components/html/CustomComponent';

function App() {
  const NameList = [
    {
      first: "Abhay",
      last: "Bisht"
    },
    {
      first: "Anuj",
      last: "Bora"
    },
    {
      first: "Star",
      last: "Lord"
    },
  ]
  return (
    <div className="App">
      {/* string , number  , boolean props */}
      <Greet name="Abhay Bisht" age={21} isLoggedIn={true} />
      {/* Object Props */}
      <Person name={{
        first: "Abhay", last: "Bisht"
      }} />
      <Person name={{
        first: "Karan", last: "Pandey"
      }} />
      {/* Array Props */}
      <PersonList data={NameList} />
      <Status status={"loading"} />
      <Status status={"success"} />
      <Status status={"error"} />
      <Heading>Hello Abhay Bisht</Heading>
      <Oscar>
        <Heading>Hello Abhay React Component</Heading>
      </Oscar>
      <Greet name="Vishal" isLoggedIn={false} />
      {/* Button Click Props*/}
      <Button handleClick={() => console.log("Button Clicked")} />
      {/* <Button handleClick2={(e)=>console.log("Button Clicked")}/> */}
      {/* Input Change Props */}
      <Input value="Abhay Bisht" handleChange={(e) => console.log(e)} />
      {/* Css Props */}
      <Container styles={{
        color: "red",
        fontSize: "100px"
      }} />
      {/* Hooks Code */}
      <Loggedin />
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UseRef />
      <MutableRef />
      <Private isLoggedin={true} Component={Profile} />
      <List items={["Abhay", "Bisht", "Akshay"]} onClick={(item) => console.log(item)} />
      <List items={[10, 20, 30]} onClick={(item) => console.log(item)} />
      <RandomNumber
        value={10}
        isPositive={false}
        isNegative={false}
        isZero={true}
      />
      {/* Template Literals */}
      <Toast position='left-center'/>
      <Toast position='center'/>
      <ButtonHtml variant="primary" onClick={()=>console.log("Button Clicked")}>
        {/* gives error */}
        {/* <div>
          Primary Button
        </div> */}
        {/* Works fine for this code */}
        Primary Button
      </ButtonHtml>
      <InputHtml/>
      {/* Using props from one component to another components  */}
      <CustomComponent age={21} name={"Abhay Bisht"} isLoggedIn={true}/>
    </div>
  );
}

export default App;