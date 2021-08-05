import './index.css';

export default function FloatingActionButton(props: any) {;
  return (
    <div className="fab">
      <button className="main" onClick={props.onClick}>
        👋
      </button>
    </div>
  );
};