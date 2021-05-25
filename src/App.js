import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const today = new Date();
  // console.log(today.valueOf());
 // console.log(today.getMonth());

  const dateAsString = today.toString();
  // console.log(dateAsString);

  // const [month, setMonth] = useState('');
  // console.log(month);

  // const [day, setDay] = useState('');
  // console.log(day);

  const [birthday, setBirthday] = useState('');
  // console.log(typeof(birthday.slice(8,10)));

  // birthday is string, so we slice month from it and convert it to number,
  // than subtract 1 because JavaScript calculates months from 0 to 11,
  // convert it back to string and define it should have two characters,
  // and if there is only one character, it should add zero in front of it
  const monthOfBirth = String(Number(birthday.slice(5,7)) - 1).padStart(2, '0');
  // console.log(monthOfBirth);

  const birthdayForCalc = new Date(birthday.slice(0,4), monthOfBirth,  birthday.slice(8,10));
  // console.log(birthdayForCalc);
  // console.log(today.getMonth());
  // console.log(today.getFullYear());
  // console.log(birthdayForCalc.getMonth());

  let nextBirthday;


  if (today.getMonth() > birthdayForCalc.getMonth() || (today.getMonth() === birthdayForCalc.getMonth() && today.getDate() > birthdayForCalc.getDate())) {
    const nextBirthdayYear = String(today.getFullYear() + 1);
      nextBirthday = new Date(nextBirthdayYear, monthOfBirth,  birthday.slice(8,10));
      // console.log(nextBirthday);

  }
  else {
    const nextBirthdayYear = String(today.getFullYear());
      nextBirthday = new Date(nextBirthdayYear, monthOfBirth,  birthday.slice(8,10));
      // console.log(nextBirthday);

  }

  const daysTillBirthday = Math.ceil((nextBirthday.valueOf() - today.valueOf())/86400000);
  const howOld = Math.floor((nextBirthday.valueOf() - birthdayForCalc.valueOf())/(365*86400000));
  console.log(howOld);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Today is {dateAsString.slice(0,21)}</p>

        Enter your date of birth:
        <input type="date"
        onChange={(event) => {
          const newBday = event.target.value;
          setBirthday(newBday);
}}/>


        <p> Your next birthday is on {nextBirthday.toString().slice(0,16)}.</p>
        <p>There is {daysTillBirthday } days until your birthday.</p>
        <p>On that day you will be {howOld} years old.</p>

      </header>
    </div>
  );
}

export default App;
