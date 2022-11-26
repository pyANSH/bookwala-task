import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTag, removeAllTags, removeTag, toggleTagOption } from './features/tagSlice';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
function App() {

  const [newTag, setNewTag] = useState('')
  const tags = useSelector(state => state.tags.tags);
  const tagSize = useSelector(state => state.tags.tagSize);
  const tagMenu = useSelector(state => state.tags.tagMenu);
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <div className="input_box">
        <div className="tag_container">
          <div className="tag">
            {tags.map((tag) =>
              <p key={tag.id} style={{ backgroundColor: `${tag.color}` }} >
                {tag.name}
                <AiOutlineClose className='cross' onClick={() => {
                  dispatch(removeTag(tag.id))
                }} />
              </p>
            )}
            <input type="text" className='input' placeholder="add new Tags" value={newTag} onChange={(e) => { setNewTag(e.target.value) }} />
          </div>
          <div className="btn_container">
            {
              newTag.length > 0 ?
                <button className='btn' onClick={() => { if (newTag.length > 0) { dispatch(addTag({ id: tagSize + 1, name: newTag, color: '#FCF0D5' })); setNewTag('') } }}>
                  <AiOutlinePlus />
                </button>
                :
                <button className="btn" onClick={() => { }}>
                  <AiOutlineClose onClick={() => {
                    dispatch(removeAllTags())
                  }} />
                </button>
            }
          </div>
        </div>
        <MdKeyboardArrowDown onClick={() => {
          dispatch(toggleTagOption(!tagMenu))
        }} />
      </div>


      <div className={`menu ${tagMenu ? '' : 'hidden'}`}>

      </div>
    </div>
  );
}

export default App;



