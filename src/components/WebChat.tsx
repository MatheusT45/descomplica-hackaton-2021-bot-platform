import { useMemo } from 'react';
import ReactWebChat, { createDirectLine, createStyleSet } from 'botframework-webchat';
import './WebChat.css';

export default function WebChat() {
  const styleSet: any = createStyleSet({
    rootHeight: '80%',
    rootWidth: '80%',
    backgroundColor: 'mediumseagreen'
 });
  const directLine = useMemo(() => createDirectLine({ token: 'F1mceHZdYRs.zMTThcDoFRJ6WzQ97xyL_R2u9ObTfKGymdaotQYcDgA' }), []);

  return <ReactWebChat directLine={directLine} styleSet={styleSet} userID="1" className="bot" />;
};