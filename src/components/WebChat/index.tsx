import { useMemo } from 'react';
import ReactWebChat, { createDirectLine, createStyleSet } from 'botframework-webchat';
import './index.css';

export default function WebChat() {
  const styleSet: any = createStyleSet({
    rootHeight: '40%',
    rootWidth: '30%',
    backgroundColor: 'mediumseagreen',
    bubbleBorderRadius: 8,
    bubbleFromUserBorderRadius: 8,
 });
  const directLine = useMemo(() => createDirectLine({ token: process.env.REACT_APP_WEBCHAT_TOKEN }), []);

  return <ReactWebChat directLine={directLine} styleSet={styleSet} userID="1" className="bot" />;
};