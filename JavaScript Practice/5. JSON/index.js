// JSON : JavaScript Object Notation.
// It is a format for storing & transporting data.
// It is used when data is sent from a server to a web page.

obj = { name : "harry", length : 1}

// stringyfy function
jso = JSON.stringify(obj); // it will convert above format into String
console.log(jso);

// parse function
parsed = JSON.parse(`{ "name" : "harry", "length" : 1}`);  // here we use back ticks (key above TAB key) and inside backticks we write our string
console.log(parsed);


// Template Literals - Backticks
a = 14;
console.log(`This is value of a ${a}`);
