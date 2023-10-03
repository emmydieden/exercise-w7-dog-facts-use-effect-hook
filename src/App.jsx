// Import required  hooks
import React, { useEffect, useState} from 'react'
import { DogFact } from "./components/DogFact";

export const App = () => {
  const [dogFact, setDogFact] = useState(null)

  useEffect(() => {
    fetch('https://dogapi.dog/api/v2/facts')
    .then(res => res.json())
    .then(json => {
        console.log(json)
        setDogFact(json.data)
        console.log(dogFact)
    }).catch ((error) => {
      console.error("Failed to fetch dog facts", error)
    })
  },[])
  // Hint: Initialize state for storing the dog fact
  // Hint: Define the API endpoint
  // Hint: Create a function to fetch the dog fact
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts

  return(
    <div>
      <div>{dogFact && <DogFact dogFact={dogFact}/>}</div>
    </div>
  )
}