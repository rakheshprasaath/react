import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = ({items, handleChange, deleteItem}) => {

    return(
        <main>
            {(items.length) ?(
            <ul>
                {items.map(item => (
                    <li className="item" key={item.id} onChange={() =>handleChange(item.id)}>
                        <input type="checkbox" checked={item.check} />
                        <label style={(item.check === true)? {textDecoration:'line-through'}:null}> {item.content}</label> <FaTrashAlt role="button" tabIndex={0} onClick={() => deleteItem(item.id)}/>
                    </li>
                ))}
            </ul>)
            : (<p>Empty list</p>)
}
        </main>
    )





    // function handleNameChange(){
    //     const name= ['grow', 'learn', 'earn'];
    //     const count = Math.floor(Math.random()*3);
    //     setName(nameValue => name[count])
    // }




    // const handleClick = (name) =>{
    //     handleNameChange()
        
    //     console.log(`thanks for clicking me ${name}`)
    // }

    // const handleEventClick = (e) =>{
    //     console.log(e.target.innerText )
    // }

    // const [nameValue,setName] = useState();




    // return(
    //     <main>
    //     <p>Lets {nameValue} money.</p>
    //     <button onClick={() => handleNameChange()}> Update</button>
    //     </main>
    // )

}

export default Content