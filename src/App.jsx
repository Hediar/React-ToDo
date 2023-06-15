
import './App.css';
import { useEffect, useState } from 'react';

import Cards from './components/Cards';
import Input from './components/Input';

function App() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const [working, setworking] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("todokey");
    if(data) {
      setworking(JSON.parse(data));
    }
  }, []);


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
      isDone: false,
    }
    const updateWorking = [...working, newWorking];
    setworking(updateWorking);
    localStorage.setItem('todokey', JSON.stringify(updateWorking));
    setTitle('');
    setContent('');
  };

  const clickDeleteButtonHandler = (id) => {
    const updateWokrings = working.filter((work) => work.id !== id);
    setworking(updateWokrings);
    localStorage.setItem('todokey', JSON.stringify([...updateWokrings]));
  };

  const clickCompleteButtonHandler = (id) => {
    const updateWokrings = working.map((work) => {
      if(work.id === id) {
        return {...work, isDone: true};
      }
      return work;
    });
    setworking(updateWokrings);

    localStorage.setItem('todokey', JSON.stringify([...updateWokrings]));
  };

  const clickCancelButtonHandler = (id) => {
    const updateWokrings = working.map((work) => {
      if(work.id === id) {
        return {...work, isDone: false};
      }
      return work;
    });

    setworking(updateWokrings);
    localStorage.setItem('todokey', JSON.stringify([...updateWokrings]));
  };


  return (
    <div className='mytodo'>
      <div className='title'>
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className='input-form'>
        <form className='addform' onSubmit={clickAddButtonHandler}>
          <Input labelName={'제목'} value={title} Add={titleAddHandler}></Input>
          <Input labelName={'내용'} value={content} Add={contentAddHandler}></Input>
          <button className='add-btn'>추가하기</button>
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
                  return <Cards 
                  // key={item.id}
                  item={item}
                  fnc1={clickDeleteButtonHandler}
                  fnc2={clickCompleteButtonHandler}
                  c={'완료'}
                  ></Cards>
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
                  return <Cards 
                  // key={item.id}
                  item={item}
                  fnc1={clickDeleteButtonHandler}
                  fnc2={clickCancelButtonHandler}
                  c={'취소'}
                  ></Cards>
                })
              }
            </div>
          </div>
      </div>
    </div>
  );
}


export default App;
