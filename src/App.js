import Quiz from "./components/Quiz";
import Button from "./components/Quiz/Button";

function App() {
  const questions = [
    {
      id: 1,
      question: "Колко бързо бягат тигрите?",
      answered: false,
      answers: [
        {
          value: "20 км/ч",
          correct: false
        },
        {
          value: "64 км/ч",
          correct: true
        },
        {
          value: "80 км/ч",
          correct: false
        }
      ]
    },
    {
      id: 2,
      question: "Колко са дълги опашките на тигрите?",
      answered: false,
      answers: [
        {
          value: "30 см",
          correct: false
        },
        {
          value: "80 см",
          correct: false
        },
        {
          value: "120 см",
          correct: true
        }
      ]
    }
  ]

  const checkIfCorrect = (event) => {
    const button = event.currentTarget; // currentTarget prevents us to get the child element if it's clicked

    const question = questions.find(question => question.id === +button.parentElement.dataset.id);

    if (question.answered) {
      window.alert("Вече е отговорено на този въпрос");
      return;
    }

    if(button.dataset.iscorrect === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }

    question.answered = true;
  }

  const renderAnswers = (answers) => {
    return answers.map((answer, i) => {
      return <Button key={i} isCorrect={answer.correct} onClick={checkIfCorrect}>{answer.value}</Button>
    });
  }

  const renderQuestions = () => {
    return questions.map((question, i) => {
      return <Quiz key={i} id={question.id} vapros={question.question}>
        {renderAnswers(question.answers)}
      </Quiz>
    });
  }

  return <>
    <h1 className="heder-h1">Quiz App</h1>
    {renderQuestions()}
  </>;
}

export default App;
