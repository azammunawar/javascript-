            ​ What are the recommendations to create new object
It is recommended to avoid creating new objects using new Object(). Instead you can initialize values based on it's type to create the objects.
    i. Assign {} instead of new Object()
    ii. Assign "" instead of new String()
    iii. Assign 0 instead of new Number()
    iv. Assign false instead of new Boolean()
    v. Assign [] instead of new Array()
    vi. Assign /()/ instead of new RegExp()
    vii. Assign function (){} instead of new Function()

            ​ What is a polyfill
A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it. For example, Silverlight plugin polyfill can be used to mimic the functionality of an HTML Canvas element on Microsoft Internet Explorer 7.

            ​ What is same-origin policy
The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries.

            ​ What is event capturing
Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the desce

            ​ What is event bubbling
Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element.

            ​ Strict mode 

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression "use strict"; instructs the browser to use the javascript code in the Strict mode.
Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.
NameSpacing
Namespacing is the act of wrapping a set of entities, variables, functions, objects under a single umbrella term
            ​ Unary function
Unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.
            ​ First order function
First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.
            ​ First class function
First-class functions means when functions in that language are treated like any other variable.
            ​ 
            ​ JSON
It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json
JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.
            ​ Prototype chain
Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

Inheritance

In JavaScript, inheritance is supported by using prototype object. Some people call it "Prototypal Inheriatance" and some people call it "Behaviour Delegation".

Example
function Person(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";            
}

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}
function Student(firstName, lastName, schoolName, grade)
{
    Person.call(this, firstName, lastName);
    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}
//Student.prototype = Person.prototype;
Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("James","Bond", "XYZ", 10);
            
alert(std.getFullName()); // James Bond
alert(std instanceof Student); // true
alert(std instanceof Person); // true


Execution context
Execution context (EC) is defined as the environment in which the JavaScript code is executed. By environment, I mean the value of this, variables, objects, and functions JavaScript code has access to at a particular time.

Dynamice scope vs Lexical scope

Lexical scope is write-time, whereas dynamic scope is run-time.


Hoisting ? 
Hoisting is JavaScript's default behavior of moving declarations to the top.

arguemnts spread operator

Scope
Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript

Global scope
Variables declared outside of any function become global variables. Global variables can be accessed and modified from any function.

Local scope
Variables declared inside any function with var keyword are called local variables. Local variables cannot be accessed or modified outside the function declaration.
block scope

iife
An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created.

One typical use case of an IIFE and closure combination is to create a private state for any variable.
Example
(function(){})();

Closure
 A closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.
 
 
This keyword

This” keyword refers to an object that is executing the current piece of code. 

Call, Apply and Bind

    • Bind return new function with new this keywords and arguments. It  also does partial currying

    • Ball invokes function with new this keywords and arguments 

    • Apply invokes function with new this keywords and arguments as array

currying

Currying is a function that accepts multiple arguments. It will transform this function into a series of functions, where every little function will accept one argument

It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence. 

Currying is a checking method to make sure that you get everything you need before you proceed
It helps you to avoid passing the same variable again and again
It divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
It is used in functional programming to create a higher-order function
This could be personal preference, but I love that it makes my code readable

For patial currying bind is ued

Prototype
prototype is default object associated with every object and fucntions
Prototypes allow you to easily define methods to all instances of a particular object. The beauty is that the method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it


Arrow function’s “this” keywords value is same as the value of outer function

Regular function this refers to callee of function which is also called dynamic scoping

New Keyword
New keyword creates instance of object and this keywords and performs these actions

    • A new empty object is created.
    • The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
    • The ‘this’ variable is made to point to the newly created object. It binds the property which is declared with ‘this’ keyword to the new object.
    • A newly created object is returned when the constructor function returns a non-primitive value (custom JavaScript object). If the constructor function returns a primitive value, it will be ignored. At the end of the function, ‘this’ is returned if there is no return statement in the function body.

High Order Function
A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

Pure Function
A function is called pure function if it always returns the same result for same argument values and it has no side effects like modifying an argument (or global variable) or outputting something.

