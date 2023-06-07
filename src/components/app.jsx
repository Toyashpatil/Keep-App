import React,{useState} from "react";
import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import CreateArea from "./createArea";




function App(){

    const [notes,setNotes]=useState([]);

    function addNote(newNote){
        setNotes(prevNotes=>{
            return [...prevNotes,newNote];
        })
    }
    function DelNote(id){
        //console.log("hwllo");
        setNotes(prevValues=>{
            return prevValues.filter((note,index)=>{
                return index !== id;
            })
            
        })
    }

    return(
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((note,index)=>{
                return <Note key={index} id={index} onChange={DelNote} title={note.title} content={note.content} />
            })}
            <Footer />
        </div>
    );
}

export default App;