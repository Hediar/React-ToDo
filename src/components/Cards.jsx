import Button from './Button';
import { useEffect, useState } from 'react';
// import UpdateContent from './UpdateContent';

const Cards = (props) => {
  const [newTitle, setnewTitle] = useState(props.item.work);
  const [newContent, setnewContent] = useState(props.item.content);

  const newTitleHandler = (event) => {
      setnewTitle(event.target.value);
  };
    
  const newContentHandler = (event) => {
    setnewContent(event.target.value);
  };

    return (
      <div key={props.item.id} className='todo-box'>
        <div className='todo-text'>
          <h2 className='work-title'>{props.item.work}</h2>
          {props.item.content}
        </div>
        <div className='update-box hidden'>
          <input className='update-title'
            type='text'
            value={newTitle}
            onChange={(event) => newTitleHandler(event)}
            ></input>
            <textarea className='update-content'
            value={newContent}
            onChange={(event) => newContentHandler(event)}
            ></textarea>
        </div>
        <div className='buttons'>
          <Button role={'delete'} name={'삭제하기'} fnc={props.fnc1} para={props.item}></Button>
          <Button role={'update-complete hidden'} name={'수정완료'} fnc={props.fnc4} para={props.item}></Button>
          <Button role={'update'} name={'수정'} fnc={props.fnc3} para={props.item}></Button>
          <Button role={'complete'} name={props.children} fnc={props.fnc2} para={props.item}></Button>
        </div>
      </div>
    )
};

export default Cards;