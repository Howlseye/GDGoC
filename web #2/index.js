let notes = [
    {
      id: 1,
      heading: "Mempelajari Javascript",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
      created_by: "John Doe",
      created_at: 1738146027613
    }
  ]
  
  const createNote = (task, description, creator) => {
    // const id = notes.length + 1
    const id = Date.now() + Math.floor(Math.random() * 1000)
    notes.push({
        id: id,
        heading: task,
        description: description,
        created_by: creator,
        created_at: Date.now()
    })
  }
  
  const readNote = () => {
    notes.forEach(note => {
      console.log(`ID: ${note.id}`)
      console.log(`Task: ${note.heading}`)
      console.log(`Description: ${note.description}`)
      console.log(`Created By: ${note.created_by}`)
      console.log(`Created At: ${note.created_at}`)
      console.log("\n")
    })
  }
  
  const updateNote = (id, task, description) => {
    notes = notes.map(note => note.id === id ? {...note, heading: task, description: description} : note)
  }
  
  const deleteNote = (id) => {
    notes = notes.filter(note => note.id !== id)
  }
  
  // mengetes kode (diharapkan untuk tidak diganti): 
  createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe")
  readNote();
  console.log("=================================================================================================================")
  updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.");
  readNote();
  console.log("=================================================================================================================")
  deleteNote(1)
  readNote()