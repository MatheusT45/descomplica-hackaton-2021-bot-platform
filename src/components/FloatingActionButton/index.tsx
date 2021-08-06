import './index.css';
import ChatOpenIcon from './chat-open-icon.png';
import ChatCloseIcon from './chat-close-icon.png';

export default function FloatingActionButton(props: any) {
  const { isChatOpen, onClick } = props;

  return (
    <div className="fab">
      <img className={isChatOpen ? `chat-open-img` : `chat-close-img`} onClick={onClick} src={isChatOpen ? ChatOpenIcon : ChatCloseIcon } alt={isChatOpen ? 'Ícone da Cacá para o chat aberto' : 'Ícone da Cacá para o chat fechado'} />
    </div>
  );
};