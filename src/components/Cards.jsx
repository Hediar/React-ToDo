import Button from './Button';
import { useEffect, useState } from 'react';
// import UpdateContent from './UpdateContent';

const Cards = ({item, fnc1, fnc2,fnc3,fnc4, c}) => {
  const [newTitle, setnewTitle] = useState(item.work);
  const [newContent, setnewContent] = useState(item.content);

  const data = JSON.parse(localStorage.getItem("todokey"));

  const newTitleHandler = (event) => {
      setnewTitle(event.target.value);
  };
    
  const newContentHandler = (event) => {
    setnewContent(event.target.value);
  };

  const newSetting = (id) =>{
      const newWorking = data.map((data) => {
          if(data.id === id) {
              return {...data, work: newTitle, content: newContent}
          }
          return data;
      });

      localStorage.setItem('todokey', JSON.stringify([...newWorking]));
      setnewTitle(newTitle);
      setnewContent(newContent);
  }


    return (
      <div key={item.id} className='todo-box'>
        <div className='todo-text'>
          <h2 className='work-title'>{item.work}</h2>
          {item.content}
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
          <Button role={'delete'} name={'삭제하기'} fnc={fnc1} para={item}></Button>
          {/* <Button role={'update-complete hidden'} name={'수정완료'} fnc={fnc4} para={item}></Button> */}
          <button 
          className='update-complete hidden' 
          onClick={(event) => {
            fnc4(item.id,event); 
            newSetting(item.id);
            }}>수정완료</button>
          <Button role={'update'} name={'수정'} fnc={fnc3} para={item}></Button>
          <Button role={'complete'} name={c} fnc={fnc2} para={item}></Button>
        </div>
      </div>
    )
};

export default Cards;