// write a function called foo() which prints "foo" and function called "bar" call function bar(), in the foo() function after printing.what will be the output ? now call the foo() to see the output.
function foo(){
    console.log("foo")
}

function bar(){
    console.log("bar")
}


function foo(){
    console.log("foo");
    bar();
    foo();
}
