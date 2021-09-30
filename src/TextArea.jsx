import react, {useState} from 'react';


function TextArea(props) {
   const [note, setNote] = useState({
       title: "",
       content: ""
   })

   const handleChange = (event) => {
       const {name, value} = event.target;

       setNote(prevNote => {
           return {
               ...prevNote,
               [name] : value
           }
       })

    event.preventDefault();
       
   }
    return (
        <div className= "textArea">
            <form>
            
                <input type="text" onChange = {handleChange} name="title" value={note.title} placeholder="Title"/>
                <textarea row="3" type="text" onChange={handleChange} name="content" value={note.content} placeholder="Take a note"/>
                <button onClick = {(event) => {
                    props.onAdd(note)
                    event.preventDefault()}}>Add</button>
            </form>
            </div>
    )
}

export default TextArea;