import { useEffect, useState  } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList ({ name, initialList}) {

    const[input, setInput] = useState("");
    const[counter, setCounter] = useState(0)

    const [list, setList] = useState(() => {
        const storedList = localStorage.getItem(name);
        if (JSON.parse(storedList)){
            return JSON.parse(storedList)
        } else {
            return [] 
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(list))
    }, [list])

    useEffect(() => {
        setCounter(list.filter(item => item.done).length)
    },[list])

    




    function handleInputChange(event) {
        setInput([event.target.value]);
    }

    function handleAddclick() {
        setList([...list, {id: uuidv4() ,  name: input, done: false}]);
        console.log("Click")
    }

    function updadteDoneStatus(event) {
        const updatedList = list.map((item) => {
            console.log(event.target.id)
            if (item.id == event.target.id) { 
                console.log("checkbox")
                console.log({...item, done: !item.done})
                return {...item, done: !item.done}
            } 
            return item
        })
        setList(updatedList)
    }


    return(
        <>
            <h1>{name} </h1>
            has to do {counter} todos
            <ul>
                {list.map((element)=> (
                    <li>{element.name} 
                        <input type="checkbox" onChange={updadteDoneStatus}  id={element.id} checked={element.done}></input>
                    </li>
                ))}

            </ul>
            <input type="text"  onChange={handleInputChange} value={input}></input>
            <button  onClick={handleAddclick}>Add</button>
        </>
    )

}


