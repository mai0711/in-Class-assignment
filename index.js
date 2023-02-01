// Q1: Use the setInterval() function to log "Hello, World!" to the console after every 6 seconds, and then use the clearInterval() function to stop the interval.
    let timer = setInterval(()=>{
        console.log("Hello World");
    }, 6000);

    setTimeout(()=>{
        clearInterval(timer);
    },30000);


// Q2: Use the find function to locate the first element in an array that satisfies a certain condition.
// Find that object whose age is 40
    let objectArr = [
        { name: "John", age: 25 },
        { name: "Jane", age: 30 },
        { name: "Jack", age: 35 },
        { name: "Jill", age: 40 },
        { name: "Joe", age: 45 },
    ];

    let result = objectArr.filter(function (value) {
        return value.age === 40;
    }); 

    console.log(result);


  //Q3: Use the some function to determine if any elements in an array satisfy a certain condition.
  // Use some function to check if any of the string has a length more than 5
    
    let array = ["hello", "world", "this", "is", "a", "string"];

    let wordsResult = array.filter(function (words) {
        return words.length >= 5 ;
    }); 

    console.log(wordsResult);
            


  //Q4: Use the reduce function to count the total number of characters in all strings for the above array.
    let stringArr = ["hello", "world", "this", "is", "a", "string"];
    
    let count = stringArr.map(function(array){
        return array.length;
    });
    
    console.log(count);



  //Q5: Use the reduce function to concatenate all elements in an array into a single string. Use above example , 
    let stringArray = ["hello", "world", "this", "is", "a", "string"];

    let concatenateResult = function(stringArray){
    return stringArray.reduce(function(pre, after) {
        return pre += after;
    });
    };
    console.log(concatenateResult(stringArray));