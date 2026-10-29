import React from 'react'

const App = () => {

  // Method to store data
  localStorage.setItem("course", "AIML")

  // Method to clear all stored data
  localStorage.clear()

  // Method to store data
  localStorage.setItem("Name", "Neha sri")
  localStorage.setItem("Age", "20")

  // Method to retrieve data
  console.log(localStorage.getItem("Age"))
  console.log(localStorage.getItem("Name"))

  // Creating a JavaScript object
  const user = {
    Course: "AIML",
    Skills: "React"
  }

  // Method to convert object into JSON string and store it
  localStorage.setItem("userDetails", JSON.stringify(user))

  // Method to retrieve data and convert JSON string into object
  let Details = JSON.parse(localStorage.getItem("userDetails"))

  // Method to display the complete object in the console
  console.log(Details)

  // Accessing object properties
  console.log(Details.Course)
  console.log(Details.Skills)

  // JSX to display content on the webpage
  return (
    <div>App</div>
  )
}

export default App