function createCounter(){
    var count = 0;
    function counter(){
        count++;
        console.log(count);
    }
    counter.reset = function(){
        count=0;
    }
    return counter;
}

var myCounter = createCounter();
//console.log(myCounter);
myCounter();
myCounter();
myCounter.reset();
myCounter();