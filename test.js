const notes = ["do", "re", "me"]

notes.forEach((not) => console.log(not));

notes.forEach(function(note) {
    console.log(note); 
  });
  
  // This one is tricky, but will make more sense later
  notes.forEach(console.log); 