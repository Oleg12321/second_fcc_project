import React from 'react';
import { useState } from 'react';
import MarkdownPreview from '../MarkdownPreview';
import { IconName, AiOutlineArrowsAlt } from "react-icons/ai";

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {

  const [text, setText] = useState('')
  const [isActive, setIsActive] = useState(false);
  const [isActiveMark, setIsActiveMark] = useState(false)

  const handleClick = event => {
    setIsActive(current => !current);
  };

  const handleClickMark = event => {
    setIsActiveMark(current => !current)
  };


  return (
    <>
     <div id='content_block'>
        <div className={`editorWrap ${isActive ? ' maximized' : ''} ${isActiveMark ? ' d_none' : ''}`}>
          <div className="toolbar">
            <AiOutlineArrowsAlt onClick={handleClick}></AiOutlineArrowsAlt>
          </div>
          <textarea 
          className='textar mt-0' 
          id="editor" 
          value={text}
          onChange={e => setText(e.target.value)} />
        </div>
        <div className={`previewWrap ${isActive ? 'd_none' : ''} ${isActiveMark ? ' maximized' : ''}`}>
            <div className="toolbar">
              <AiOutlineArrowsAlt onClick={handleClickMark}></AiOutlineArrowsAlt>
            </div>
           <MarkdownPreview className="content " markdown={text} />
        </div>
       
      </div>
    </>
  )
}

export default App