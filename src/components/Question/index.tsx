import './index.css';

type Prop = {
  title: string,
  subtitle: string,
}

function Question(props: Prop) {

  return (
    <div>
      <h1 className="question-title">{props.title}</h1>
      <h3 className="question-subtitle">{props.subtitle}</h3>
    </div>
  );
}
export default Question;
