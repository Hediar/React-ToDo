import Button from './Button';

const Cards = ({item, fnc1, fnc2,c}) => {
    return (
      <div key={item.id} className='todo-box'>
        <h2 className='work-title'>{item.work}</h2>
        {item.content}
        <div className='buttons'>
          <Button role={'delete'} name={'삭제하기'} fnc={fnc1} para={item}></Button>
          <Button role={'complete'} name={c} fnc={fnc2} para={item}></Button>
        </div>
      </div>
    )
};

export default Cards;