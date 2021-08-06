import './index.css';

function PersonaSelectAnswer() {
  const handleAnswer = (answer: number) => {
    console.log(answer);
  }

  return (
    <div className="persona-select">
      <div className="persona-row">
        <span className="persona" onClick={() => handleAnswer(1)}>1</span>
        <span className="persona" onClick={() => handleAnswer(2)}>2</span>
      </div>
      <div className="persona-row">
        <span className="persona"onClick={() => handleAnswer(3)}>3</span>
        <span className="persona"onClick={() => handleAnswer(4)}>4</span>
      </div>
    </div>
  );
}
export default PersonaSelectAnswer;
