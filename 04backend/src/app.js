const express = require('express')
const noteModel = require("./models/note.model")

const app = express()
app.use(express.json())


app.post("/notes",async (req,res)=>{
  const data=req.body
  await noteModel.create({
    title:data.title,
    description:data.description
  })
  res.status(201).json({
    message:"Note created successfully"
  })
})

app.get("/notes",async (req,res)=>{
 const notes= await noteModel.find()
  res.status(200).json({
    message:"Fetched all notes successfully",
    data:notes
  })
})

app.delete("/notes/:id",async (req,res)=>{
  const id= req.params.id
  const deletedNote = await noteModel.findByIdAndDelete(id)

  if(!deletedNote){
    return res.status(404).json({
      message:"Note not found"
    })
  }

  res.status(200).json({
    message:"Note deleted successfully"
  })
})

app.put("/notes/:id",async (req,res)=>{
  const id= req.params.id
  const updateNote = await noteModel.findByIdAndUpdate(
    id, 
    req.body,
    { new: true }
  )
  if(!updateNote){
    return res.status(404).json({
      message:"Note not found"
    })
  }
  res.status(200).json({
    message:"Note updated successfully",
  })
})

module.exports=app