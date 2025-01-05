import { useState } from "react"


function App() {
  const [color,SetColor]=useState("black")

  return (
    <>
    <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}} >
    <div className="flex justify-center items-center h-full outline-none px-2 py-1 rounded-full text-white shadow-lg">
     <div classname="flex justify-center items-center h-full text-4x font-bold outline-none px-4 py-1 rounded-full text-white shadow-lg">Color Changer</div></div>
    <div className=" flex flex-wrap justify-center bottom-13 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>SetColor("red")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}>Red</button> 
        <button onClick={()=>SetColor("green")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"green"}}>Green</button> 
        <button onClick={()=>SetColor("BLue")}className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Blue"}}>Blue</button> 
      
      </div>
    </div>
   
   </div>
  
    </>
  )
}

export default App
