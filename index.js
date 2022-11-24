//let spy  = require("chai");

function receivesAFunction (spy) {
    return console.log(spy());
}
receivesAFunction(spy)
//receivesAFunction( ()=>{ spy ('spying')});

function returnsANamedFunction(spies){
    return function spying(){
       console.log(spying(" to not deeply equal "));
    }
}

//returnsANamedFunction( () => {spies('name')});
function returnsAnAnonymousFunction(){
return ()=>{
    return console.log(('name'))
} 
}