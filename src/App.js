
import { useState } from 'react';
import './App.css';
import { data } from './data';



function App() {
  const [person,setPerson] = useState(0)
  const {id, name, description,image,age} = data[person]
  
  const nextPerson = () => {
    setPerson(person => {
      person++;
      if(person > data.length -1){
         person=0;
      }
      return person
    })

  }
  const previousPerson = () => {
    setPerson(person => {
      person--;
      if(person < 0){
        return data.length -1
      }
      return person
    })
  }
  

    

  
  return(  
      <div>
        <div className='container'>
            <h1>{id} - { name}, {age} years old</h1>
            <img className='person'src={image} alt="photo"width='300'/>
            <h3>{description}</h3>
        </div>
        <div className='btn'>
           <button onClick={previousPerson}>Previous</button>
           <button onClick={nextPerson}>Next</button>
        </div>

      
      </div>
  )
}

export default App;
