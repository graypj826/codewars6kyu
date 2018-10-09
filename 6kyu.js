//Format a string of names like 'Bart, Lisa & Maggie'.

function list(names){
    let namesToBeString = []
    let namesAsString = ""
    if (names.length < 1){
         console.log(names)
         return namesAsString
    } else if (names.length === 1){
         return names[0].name
    } else {
       for (let i = 0; i < names.length; i++){ 
         if (names[i].name === names[names.length-1].name ){
           namesAsString = namesAsString + " & " + names[i].name
           return namesAsString
          } else {
          namesToBeString.push(names[i].name)
          namesAsString = namesToBeString.join(", ")
          }
       }  
     }
     
  }
  

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])
  
