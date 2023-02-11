import Quiz from "./components/Quiz";
import Button from "./components/Quiz/Button";

function App() {
  return <>
    <h1 className="heder-h1">Quiz App</h1>
    <Quiz vapros="Колко бързо бягат тигрите?">
      <Button isCorrect={false}>20 км/ч</Button>
      <Button isCorrect={true}>64 км/ч</Button>
      <Button isCorrect={false}>80 км/ч</Button>
    </Quiz>

    <Quiz vapros="Колко са дълги опашките на тигрите?">
      <Button isCorrect={false}>30 см</Button>
      <Button isCorrect={false}>80 см</Button>
      <Button isCorrect={true}>120 см</Button>
    </Quiz>
  </>;
}

export default App;
