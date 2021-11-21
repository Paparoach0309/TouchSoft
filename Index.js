function f1(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.substr(1).toLowerCase();
  }
  
  console.log( f1("ВиКтОР") ); // Виктор

//--------------------------------------

function greetings(name) {
    if (name === 'Mark') {
        console.log('Hi ' + name + '!');
    } else {
    console.log('Hello ' + name + '!');
    }
}
greetings('Bob');
greetings('Mark');

//--------------------------------------
  

function filterStrings(value, limit) {
    let longWords = value.filter(word => word.length <= limit);
    console.log(longWords);
}

filterStrings(['I love JS', 'some very long string', 'hell'], 9);
filterStrings(['a', 'ab', 'abc'], 2);