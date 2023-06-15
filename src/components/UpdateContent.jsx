import {useEffect, useState} from 'react';

const UpdateContent = ({item}) => {
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
    }

    useEffect(() => {
        newSetting(item.id);
    },);
    
    return(
        <>
        <input className='update-title'
          type='text'
          value={newTitle}
          onChange={(event) => newTitleHandler(event)}
          ></input>
          <textarea className='update-content'
          value={newContent}
          onChange={(event) => newContentHandler(event)}
          ></textarea>
        </>
    )
}

export default UpdateContent;