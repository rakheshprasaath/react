import React from 'react';
import { useState } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {

  const [items, newItems] = useState([{
    id:1,
    check:false,
    content: "learn"
},{
    id:2,
    check:true,
    content:"handson"
},{
    id:3,
    check: true,
    content:"implement"
},{
    id:4,
    check: true,
    content: "earn"
}]);


const [newItem, setNewItem] = useState('');
const [search,setSearch] = useState('');

const handleChange = (id) =>{
    const updateItem = items.map(item =>
        item.id === id ? { ...item, check: !item.check } : item
      );
      newItems(updateItem) 
}


const deleteItem= (id) => {
    const updateItem = items.filter(item => item.id !== id)
    newItems(updateItem)
}

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!newItem) return;

  addItem(newItem)
  console.log(newItem)
  setNewItem('')
}

const addItem=(newitem) =>{
  const id = items.length? ( items[items.length -1].id) +1 : 1
  const addNewItem ={id, check:true,content:newItem }

  const updateItem =[...items, addNewItem]
  console.log(updateItem)
  newItems(updateItem)
}
  
  return (
    <div className='App'>
      <Header />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem search={search} setSearch={setSearch}></SearchItem>
      <Content items={items.filter(item =>((item.content).toLowerCase()).includes(search.toLowerCase()))} handleChange={handleChange} deleteItem={deleteItem}/>
      <Footer length= {items.length} />
    </div>
  );
}

export default App;
