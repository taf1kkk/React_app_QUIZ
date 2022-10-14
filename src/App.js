import './index.scss';
import React from "react"

const questions = [
  {
    title: 'React - is ... ?',
    variants: ['Library', 'Framework', 'App'],
    correct: 0,
  },
  {
    title: 'Component - is ... ',
    variants: ['App', 'Part of App or Page', 'IDK'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'Its ligth HTML',
      'Its Function',
      'Its the same HTML, but you can also use JS-code',
    ],
    correct: 2,
  },
  {
    title: 'What is SCSS?',
    variants: [
      'Its ligth and better form of CSS',
      'Its update for CSS',
      'Its something like JS',
    ],
    correct: 0,
  }
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You got {correct} answers of {questions.length}</h2>
      <a href = "/">
      <button>Try Again</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round(step / questions.length * 100);


  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const question = questions[step]

  const onClickVariant = (index) => {
    setStep(step + 1);
    if(index === question.correct){
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant} />)
          : (<Result correct = {correct}/>)
      }

    </div>
  );
}

export default App;
