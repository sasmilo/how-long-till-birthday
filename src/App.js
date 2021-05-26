/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';


const darkGray =  '#282c34';
const teal = '#61dafb';

const appStyles = css`
  text-align: center;

  p {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  h1 {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

`;

const headerStyles = css`
  background-color: ${darkGray};
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${teal};
    padding-top: 20px;
    padding-bottom: 20px;
  }

  img {
    height: 25vmin;
    pointer-events: none;
    padding-bottom: 20px;
    animation: App-logo-spin infinite 20s linear;
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
}
  }
`;

const appBodyStyles = css `
  background-color: ${darkGray};
  font-size: calc(10px + 2vmin);
  color: white;


  p {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  input {
    margin-left: 10px;
    padding-left: 5px;

    ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${darkGray};

    font-size: calc(5px + 2vmin);
    opacity: 1; /* Firefox */

  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${darkGray};
    font-size: calc(5px + 2vmin);


  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${darkGray};
    font-size: calc(5px + 2vmin);


  }

  }
`;

function App() {
  const today = new Date();
  // console.log(today.valueOf());
  // console.log(today.getMonth());

  const dateAsString = today.toString();
  // console.log(dateAsString);

  const [birthday, setBirthday] = useState('');
  // console.log(typeof(birthday.slice(8,10)));

  // birthday is string, so we slice month from it and convert it to number,
  // than subtract 1 because JavaScript calculates months from 0 to 11,
  // convert it back to string and define with padStart that it should have two
  // characters, and if there is only one character, it should add zero in front of it
  const monthOfBirth = String(Number(birthday.slice(5, 7)) - 1).padStart(
    2,
    '0',
  );
  // console.log(monthOfBirth);

  const birthdayForCalc = new Date(
    birthday.slice(0, 4),
    monthOfBirth,
    birthday.slice(8, 10),
  );
  // console.log(birthdayForCalc);
  // console.log(today.getMonth());
  // console.log(today.getFullYear());
  // console.log(birthdayForCalc.getMonth());

  let nextBirthday;

  if (
    today.getMonth() > birthdayForCalc.getMonth() ||
    (today.getMonth() === birthdayForCalc.getMonth() &&
      today.getDate() > birthdayForCalc.getDate())
  ) {
    const nextBirthdayYear = String(today.getFullYear() + 1);
    nextBirthday = new Date(
      nextBirthdayYear,
      monthOfBirth,
      birthday.slice(8, 10),
    );
    // console.log(nextBirthday);
  } else {
    const nextBirthdayYear = String(today.getFullYear());
    nextBirthday = new Date(
      nextBirthdayYear,
      monthOfBirth,
      birthday.slice(8, 10),
    );
    // console.log(nextBirthday);
  }

  const daysTillBirthday = Math.ceil(
    (nextBirthday.valueOf() - today.valueOf()) / 86400000,
  );
  const howOld = Math.floor(
    (nextBirthday.valueOf() - birthdayForCalc.valueOf()) / (365 * 86400000),
  );
  console.log(howOld);

  return (
    <div css={appStyles}>
      <header css={headerStyles}>
        <h1>HOW LONG TILL MY BIRTHDAY?</h1>
        <img src="/cake.png" alt="cake" />
      </header>
      <div css={appBodyStyles}>
      <p>Today is {dateAsString.slice(0, 21)}</p>
        Enter your date of birth:
        <input
          type="date"
          onChange={(event) => {
            const newBday = event.target.value;
            setBirthday(newBday);
          }}
        />
        <p> Your next birthday is on {nextBirthday.toString().slice(0, 16)}.</p>
        <p>There is {daysTillBirthday} days until your birthday.</p>
        <p>On that day you will be {howOld} years old.</p>
      </div>
    </div>
  );
}

export default App;
