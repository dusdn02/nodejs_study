const a= [3,1,2];

a.sort(function(a,b){return b-a});
console.log(a);

const testCallback = function (callback) {
    console.log("inside of testCallback func");
    callback()
  };
   
  testCallback(function(){console.log("this is callback")});