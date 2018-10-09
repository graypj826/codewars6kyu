//Format a string of names like 'Bart, Lisa & Maggie'.

function list(names){
    let namesToBeString = []
    let namesAsString = ""
     for (let i = 0; i < names.length; i++){
       if (names[i].name === names[names.length-1].name ){
         namesAsString = namesAsString + " & " + names[i].name
         console.log(namesAsString)
         return namesAsString
      } else {
        namesToBeString.push(names[i].name)
        namesAsString = namesToBeString.join(", ")
        console.log(namesAsString)
      }
       
     }
     
  }

  list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])
  