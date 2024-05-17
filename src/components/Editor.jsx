import { useRef, useState } from 'react'
import "./Editor.css"

const Editor = ({onCreate})=>{
  const [con, setCon] = useState("");
  const conRef = useRef();
  
  const onChangCon = (e)=>{
    setCon(e.target.value);
  };

  const onKeydown = (e)=>{
    if(e.keyCode === 13){
      onSubmit();
    }
    
  }

  const onSubmit = ()=>{
    if(con === ""){
      conRef.current.focus();
      return
    }
    onCreate(con);
    setCon("")
  }
  return (
    <div className='Editor'>
      <input onKeyDown={onKeydown} ref={conRef} onChange={onChangCon} value={con} placeholder='새로운 Todo...'/>
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;