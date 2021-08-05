import './index.css';

export default function FloatingActionButton(props: any) {;
  return (
    <div className="fab">
      <button onClick={props.onClick}>
        👋
      </button>
    </div>
  );
};