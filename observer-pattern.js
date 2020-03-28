function Subject(){
  this.observers = []
}

Subject.prototype = {
  
  subscribe : function(obj) {
    this.observers.push( obj )
  },
  
  unsubscribe : function(obj) {
    this.observers = this.observers.filter( prop => {
      if(prop != obj)
        return prop
    })
  },
  
  fire : function(obj) {
    this.observers.forEach( prop => {
      prop()
    })    
  }
  
}

const subject = new Subject()

function observer1(){
  console.log("Fire observer 1")
}

function observer2(){
  console.log("Fire observer 2")
}

subject.subscribe(observer1)
subject.subscribe(observer2)
subject.unsubscribe(observer1)

subject.fire()