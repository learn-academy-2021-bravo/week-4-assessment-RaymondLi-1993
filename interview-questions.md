# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: An ***instance variable*** in ruby is something that belongs to a ruby class and I like to think of it as properties that are associated with that specific ruby class. It is different from other variables because other variables can be created by defining it and assigning it, while a class variable can only referenced through the class.

  Researched answer:
  An instance variable in ruby has a name starting with @ symbol, and its content is restricted to whatever the object itself refers to. Two separate objects, even though they belong to the same class, are allowed to have different values for their instance variables.
 

2. What is a block in Ruby?

  Your answer:
  A ***block*** in ruby is where the function executes, it groups the logic specifically in that defined area.


  Researched answer:
  A Ruby block is a way of grouping statements, and may appear only in the source adjacent to a method call; the block is written starting on the same line as the method call's last parameter (or the closing parenthesis of the parameter list). The code in the block is not executed at the time it is encountered.



3. Ruby has an implicit return. What does that mean?

  Your answer: 
  In ruby you do not have to use the keyword return to get a value from your method. Ruby attempts to automatically return whatever value that is within your method that is returnable.

  Researched answer: 
  when return isn't explicitly called within a method then Ruby returns the value of the last executed instruction in the method. In the implicit_return method, as if true is always evaluated as true (mister obvious) then the last executed instruction is 42.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: 
  ***Object oriented programming*** is the use of objects that encapsulate different properties and methods which makes it similar to the real world. It allows us to define objects that behave similarly to real world things. Functional programming creates functions that build upon/ call each other to make a big task work. I think conceptually functional programming is harder to understand because theres nothing really in the real world we can associate with it, while objects we can kind of put a face to it.

  Researched answer:
  Both Functional programming and object-oriented programming uses a different method for storing and manipulating the data. In functional programming, data cannot be stored in objects and it can only be transformed by creating functions. In object-oriented programming, data is stored in objects.



5. What is the difference between a class and an object?

  Your answer: A ***class*** is a blueprint for an object and it is the guidelines/rules on how we create that object. An ***object*** is the data structure itself that stores key value pairs, and can also store behavior inside it known as methods.

  Researched answer:
  Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
  Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics


6. STRETCH: What is `attr_accessor`?

  Your answer: 
  ***attr_accessor*** is a method on ruby classes that allows a developer to either set or get methods to directly act upon classes properties.

  Researched answer:
  attr_accessor automatically sets up getters and setters for those instance variables.  attr_accessor is the combined getter and setter method in one.





## Looking Ahead: Terms for Next Week

1. PostgreSQL: Is a relational database that allows for storage, grouping, retrieval, and other methods. It has its own keywords to perform certain actions and often used to store large amounts of data.
 
2. Ruby on Rails: Is a server-side web application framework. It helps with providing structure to the code, and helps with the development of website applications. 

3. CRUD: CRUD is an acronym that stands for CREATE, READ, UPDATE, and DESTORY. It usually refers to working with either an API or some type of database.

4. ORM: Is an Object Relational Mapper, that helps facilitate the calling of a database. I think its another layer that helps a progrmamer when calling data or inserting data into a database. 

5. Active Record: Is the M in MVC, it is a layer that represents the buisness/logic side of an application. It helps facilitate the creation of data and to help persist data to a database.
