
import './App.css';
import { useState } from 'react';

function App() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [isDone, setisDone] = useState(false);

  const [working, setworking] = useState([
    {
      id: 1,
      work: '리액트 공부하기',
      content: '리액트 기초를 공부해봅시다.',
      isDone,
    },
  ]);

  const titleAddHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentAddHandler = (event) => {
    setContent(event.target.value);
  };

  const clickAddButtonHandler = (event) =>{
    event.preventDefault();
    const newWorking = {
      id: working.length +1,
      work: title,
      content: content,
      isDone,
    }
    setworking([...working, newWorking]);
    setTitle('');
    setContent('');
  };
  const clickDeleteButtonHandler = (id) => {
    const newWorkings = working.filter((work) => work.id !== id);
    setworking(newWorkings);
  }

  const clickCompleteButtonHandler = (id) => {
    const updateWokrings = working.map((work) => {
      if(work.id === id) {
        return {...work, isDone: true};
      }
      return work;
    });
    setworking(updateWokrings);
  }

  const clickCancelButtonHandler = (id) => {
    const updateWokrings = working.map((work) => {
      if(work.id === id) {
        return {...work, isDone: false};
      }
      return work;
    });

    setworking(updateWokrings);
  }

  return (
    <div className='mytodo'>
      <div className='title'>
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className='input-form'>
        <form className='addform' onSubmit={clickAddButtonHandler}>
          <label>제목</label>
          <input 
          type='text'
          value={title}
          onChange={(event) => titleAddHandler(event)}
          className='add-input'
          ></input>
          <label>내용</label>
          <input 
          type='text'
          value={content}
          onChange={(event) => contentAddHandler(event)}
          className='add-input'
          ></input>
          <button className='add-btn'
          >추가하기</button>
        </form>
      </div>
        <div className='list'>
        <h1>Working..</h1>
          <div>
            <div className='working'>
              {
                working.filter((work) => {
                  return work.isDone === false
                }).map((item) => {
                  return (
                    <div key={item.id} className='todo-box'>
                      <h2 className='work-title'>{item.work}</h2>
                      {item.content}
                      <div className='buttons'>
                        <button className='delete' onClick={() => clickDeleteButtonHandler(item.id)}>삭제하기</button>
                        <button className='complete' onClick={() => clickCompleteButtonHandler(item.id)}>완료</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <h1>Done..!</h1>
          <div>
            <div className='done'>
              {
                working.filter((work) => {
                  return work.isDone === true
                }).map((item) => {
                  return (
                    <div key={item.id} className='todo-box'>
                      <h2 className='work-title'>{item.work}</h2>
                      {item.content}
                      <div className='buttons'>
                        <button className='delete' onClick={() => clickDeleteButtonHandler(item.id)}>삭제하기</button>
                        <button className='complete' onClick={() => clickCancelButtonHandler(item.id)}>취소</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;

/*
 * 입력칸 필요 -> 제목, 내용
 * 추가하기 버튼
 * 
 * Working 해야하는 것 
 * 카드1 
 * 삭제하기 버튼, 완료 버튼
 * 
 * 완료 버튼 누를 경우 -> Done으로 이동
 * 
 * Done
 * 삭제하기 버튼, 취소 버튼 
 * 취소 버튼 -> Working으로 이동 
 * 
 * 컴포넌트
 * 입력
 * 리스트 
 * 
 * isDone 상태가 true이면, 상태 버튼의 라벨을 취소, isDone이 false 이면 라벨을 완료
 * 
 */