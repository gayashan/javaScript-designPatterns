const DbConnector = (() => {
  
  function Connector(){
    this.path = ''
    this.username = 'test'
    this.password = 'password'
  }
  
  let connector
  
  function create(){
    if(!connector)
      connector = new Connector()
    return connector;           
  }
  
  return { 
    getConnection(){
     if(!connector)
       return create()
     else
       return connector      
    }
  }
  
})()

const connector1 = DbConnector.getConnection()
const connector2 = DbConnector.getConnection()

console.log( connector1 === connector2 )