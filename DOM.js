      //DOM of javsccript
//Text change       

// let heading =document.getElementById("title");
// console.log(heading);

// heading.textContent="Welcome to the javascript";


// let head=document.getElementById("heading");
// console.log(head);

// head.textContent="JavaScript DOM";

// let message=document.getElementById("message");
// console.log(message);
// message.textContent="I am learing an javscript";

// let h2=document.getElementById("name");
// console.log(h2);
// h2.textContent="dnyaneshwar";

// let course=document.getElementById("course");
// console.log(course);
// course.textContent="computer Engineering";


// let title = document.getElementById("title");
// let description = document.getElementById("description");

// title.textContent = "JavaScript Learning";
// description.textContent = "I am learning DOM manipulation";

  //Query Selctor

// let button=document.querySelector("#title");
// button.textContent="JavaScript DOM";
// console.log(button);

// let class1=document.querySelector(".message");
// class1.textContent="I am learning querySelector";
// console.log(class1);

// let button1=document.querySelector("#btn");
// button1.textContent="Start Learning";
// console.log(button1);

// let heading = document.querySelector("h1");

// heading.textContent = "DOM Practice";

// console.log(heading);

// let message1 = document.querySelector(".message");

// message1.textContent = "First message changed!";

// console.log(message1);

//Query Selector

// let subject1=document.querySelectorAll(".subject");
// console.log(subject1);

// let subject2=document.querySelectorAll(".subject")
// subject2.forEach(message=>message.textContent="Learing");
// console.log(subject2);

// let subject3=document.querySelectorAll(".subject");
//  subject3.forEach((subjects,index)=>{
//   subjects.textContent=`subject ${index+1}`;
// });

// console.log(subject3);
 
// let classes = document.querySelectorAll(".price");

// classes.forEach((price) => {
//     let value = Number(price.textContent);
//     price.textContent = value + 50;
// });

// console.log(classes);

let students=document.querySelectorAll(".student");
 students.forEach((student)=>{

     student.textContent=`${student.textContent } is learning javascript`;
});
console.log(students);
