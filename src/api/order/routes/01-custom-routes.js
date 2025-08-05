module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'GET',
        path: '/orderById/:id', 
        handler: 'order.orderById',
      }
      
    ]
  }