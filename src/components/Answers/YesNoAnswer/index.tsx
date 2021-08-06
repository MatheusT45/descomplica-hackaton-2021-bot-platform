import './index.css';

function YesNoAnswer(props: any) {

  return (
    <div className="yes-no-answer">
      <span className="yes-answer">{props.yesAnswer}</span>
      <span className="no-answer">{props.noAnswer}</span>
    </div>
  );
}
export default YesNoAnswer;
