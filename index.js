 function receivesAFunction(callback){
    return (callback());
 }
 function returnsANamedFunction(namedFunc){
    return function namedFunc(){
        return "Hi Me";
    }
 }
 function returnsAnAnonymousFunction(){
    return function (){
        return "me"
    }
 }