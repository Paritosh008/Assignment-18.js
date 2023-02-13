//2. What is the syntax of a generator?

function *disp()
{
    console.log("hey");
    console.log("How");
    yield "second pause";
    console.log("are");
    console.log("you?");
}

let result = disp();
console.log(result.next());
console.log(result.next());

