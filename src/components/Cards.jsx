import Button from './Button';
import UpdateContent from './UpdateContent';

const Cards = ({item, fnc1, fnc2,fnc3,fnc4, c}) => {
    return (
      <div key={item.id} className='todo-box'>
        <div className='todo-text'>
          <h2 className='work-title'>{item.work}</h2>
          {item.content}
        </div>
        <div className='update-box hidden'>
          <UpdateContent item={item}></UpdateContent>
        </div>
        <div className='buttons'>
          <Button role={'delete'} name={'삭제하기'} fnc={fnc1} para={item}></Button>
          <Button role={'update-complete hidden'} name={'수정완료'} fnc={fnc4} para={item}></Button>
          <Button role={'update'} name={'수정'} fnc={fnc3} para={item}></Button>
          <Button role={'complete'} name={c} fnc={fnc2} para={item}></Button>
        </div>
      </div>
    )
};

export default Cards;