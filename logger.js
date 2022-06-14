
const EventEmitter  = require('events');

var url='http://mylogger.io/log';

class Logger extends EventEmitter {
 log(himanshu) {
        //send an http request
        console.log(himanshu); 
    
    //raise an event
    this.emit('messagelogged', {id:1,url: 'http://'});
    }
    
}


module.exports=Logger;



