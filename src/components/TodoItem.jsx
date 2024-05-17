import './TodoItem.css';

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete})=>{
  const onChangeBox = ()=>{
    onUpdate(id)
  }
  const onClickDel = ()=>{
    onDelete(id);
  }
  
  return (
    <div className='TodoItem'>
      <input onChange={onChangeBox} checked={isDone} type='checkbox' />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onDelete(id)}>삭제</button>
    </div>
  )
}

export default TodoItem;