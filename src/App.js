import React from 'react';
import { useState } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useEffect } from 'react';

function App() {
const API_URL="http://localhost:3500/items"

const [items, newItems] = useState([]);
const [newItem, setNewItem] = useState('');
const [search,setSearch] = useState('');
const [fetchError, setFetchError]=useState(null)
const [isLoading, setIsLoading]=useState(true)

useEffect( ()=>{
  const fetchItem = async () => {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) throw Error("not received");
      const listItem=await response.json();
      newItems(listItem)
    } catch (error) {
      console.log(error.stack)
      setFetchError(error.message)
    } finally{
      setIsLoading(false)
    }
    
  }

  setTimeout(()=> (async() => await fetchItem()) (),2000)
}, [])

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

      <main>
        {isLoading && <p>Loading.......</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError &&
        <Content items={items.filter(item =>((item.content).toLowerCase()).includes(search.toLowerCase()))} handleChange={handleChange} deleteItem={deleteItem}/>
        }
      </main>

      <Footer length= {items.length} />
    </div>
  );
}

export default App;
