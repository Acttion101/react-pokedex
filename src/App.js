import React,{ useState } from 'react'
import Modal from 'react-modal';
import styled from "./styled/index.css";
import { Image } from 'react-bootstrap';
import Data from "./mock/card.json"



function App() {

  
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return(
  <>
    <Modal 
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal">
          <h2 >Pokemon List</h2>
          <input type="text" placeholder="Search.." name="search"></input>
          <button type="submit">go</button>
          <button onClick={closeModal}>close</button><br></br>
          <div className="listPokemon">
            {Data.cards.map(post => {
                return(
                 <div key={post.id}>
                   <li>{post.name}</li>
                   <Image src={(post.imageUrl)} />
                   <button >ADD</button>
                   </div>

                )})
            }
          </div>
          
        
        </Modal>
    <div className="footer">
    <button className="btn_plus" onClick={openModal}> + </button>
    </div>

  </>
    );
 }


export default App;
