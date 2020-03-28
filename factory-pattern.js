function developer(name){
    this.name = name
    this.type = 'Developer'
}

function tester(name){
    this.name = name
    this.type = 'Tester'
}

function employeeFactory(){
  
    this.create = ( name, type ) => {
        
      switch(type){
        case 'Tester':
          return new developer(name)
          break;
        case 'Developer':
          return new tester(name)
          break;
      }
      
    }
}

const empFac = new employeeFactory()
const employees = []

employees.push( empFac.create('indika', 'Developer'))
employees.push( empFac.create('gayani', 'Tester'))

employees.forEach( emp =>{
    console.log(`Hi, I'm ${emp.name} and I'm a ${emp.type}`)  
})