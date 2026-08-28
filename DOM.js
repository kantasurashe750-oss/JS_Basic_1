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

// let students=document.querySelectorAll(".student");
//  students.forEach((student)=>{

//      student.textContent=`${student.textContent } is learning javascript`;
// });
// console.log(students);

// let title =document.querySelector("#title");
// //title.style.color="red";
// title.style.background="yellow";
// title.style.fontSize="40px";

//changin css with javascript

// let title=document.querySelector("#title");
// let paragrapgh=document.querySelector("#message");
// title.style.color="red";
// title.style.fontsize="40px";
// paragrapgh.style.color="blue";
// paragrapgh.style.backgroundxolor="yellow";

// let title=document.querySelectorAll(".student");
// title.forEach(element => {
//    element.style.color="purple";
//    element.style.fontsize="25px";
// });
// console.log(title);

// let button=document.querySelector("#btn");
// button.addEventListener("click",function(){
//    console.log("Button clicked!");
   
// });


// let title = document.querySelector("#title");
// let button = document.querySelector("#btn");

// button.addEventListener("click", () => {
//     title.textContent="Welcome to Javascript";
//     title.style.color = "red";
//     title.style.fontSize = "40px";
// });

// let title=document.querySelector("#title");
// let message1=document.querySelector(".message");
// let tempid=document.querySelector("#btn");

// tempid.addEventListener("click",()=>{
//   title.textContent="button was clicked!";
//   title.style.color="blue";
//   title.style.fontSize="40px";
//   title.textContent="javascript is Amazing";
// });

// let button=document.querySelector("#nameBtn");
// let tempid=document.querySelector("#name");

// tempid.addEventListener("click",()=>{
//   tempid.textContent=="Dnyaneshwar";
// });

// let button=document.querySelector("#btn");
//  button.addEventListener("click",(event)=>{
//    console.log(event);
//    console.log(event.type);
//    console.log(event.target);
   
// });

//Key Event
// let button=document.querySelector("#btn");
// button.addEventListener("click",(event)=>{
//    console.log(event);
//    console.log(event.key);
//    console.log(event.code); 
//    if(event.key === "arrow Up"){
//     console.log("moving up");
//    }

// });

// let username=document.querySelector("#username");
// let output=document.querySelector("#output");

// username.addEventListener("input",()=>{
//   output.textContent=username.value;
// });

// let temp=document.querySelector("#name");
// let message=document.querySelector("#message");

// temp.addEventListener("input",()=>{
//    message.textContent=`hello ${temp.value}`;
// });

// let city1=document.querySelector("#city");
// let result1=document.querySelector("#result");

// city1.addEventListener("input",()=>{
//   result1.textContent=`You live in ${city1.value}`;
// });

// let num = document.querySelector("#number");
// let res = document.querySelector("#result");

// num.addEventListener("input", () => {
//     let value = Number(num.value);

//     res.textContent = `Input: ${value * 2}`;
// });

//Form + Event Submit

// let form=document.querySelector("#myForm");
// let name=document.querySelector("#name");
// let result=document.querySelector("#result");

// form.addEventListener("submit",(event)=>{
//   event.preventDefault();
//   result.textContent=`Hello ${name.value}`;
// });




// let Cform=document.querySelector("#cityForm");
// let city=document.querySelector("#city");
// let res=document.querySelector("#result");

// Cform.addEventListener("submit",(event)=>{
//   event.preventDefault();
//   res.textContent=`you live in ${city.value}`;
// });


// let login=document.querySelector("#loginForm");
// let user=document.querySelector("#username");
// let result=document.querySelector("#result1");

// login.addEventListener("submit",(event)=>{
//   event.preventDefault();
//   if(user.value === ""){
//      result.textContent="please enter user name";
//   }else{
//     result.textContent=`welcome, ${user.value}`;
     
//   }
// });

//Form Validation

// let formIn =document.querySelector("#form");
// let nameIn =document.querySelector("#name");
// let emailIn =document.querySelector("#email");
// let resultIn =document.querySelector("#result");

// formIn.addEventListener("submit",(event)=>{
//   event.preventDefault();
//   if(nameIn.value === "" || 
//     emailIn.value === "" )
//     {resultIn.textContent="please fill the form";
//     }else{
//       resultIn.textContent="form submiited successfully";
//     }
// });

// let formIn =document.querySelector("#form");
// let nameIn =document.querySelector("#name");
// let ageIn =document.querySelector("#age");
// let resultIn =document.querySelector("#result");

// formIn.addEventListener("submit",(event)=>{
//   event.preventDefault();
//   if(nameIn.value === "" || 
//      ageIn.value === "" )
//     {resultIn.textContent="please fill the form";
//     }else if(Number(ageIn.value) < 18){
//        resultIn.textContent="You must be age 18 or above";
//     } else{
//       resultIn.textContent="form submiited successfully";
//     }
// });


// let formIn =document.querySelector("#form");
// let nameIn =document.querySelector("#name");
// let emailIn =document.querySelector("#email");
// let ageIn =document.querySelector("#age");
// let resultIn =document.querySelector("#result");

// formIn.addEventListener("submit",(event)=>{
//   event.preventDefault();
//   if(nameIn.value === "" ){
//        resultIn.textContent="please enter your name";
//     }else if(emailIn.value === "" ){
//        resultIn.textContent=" please enter your email";
//     }else if(ageIn.value === "" ){
//       resultIn.textContent="Please enter your age "
//     }else if (Number(ageIn.value) < 18){
//        resultIn.textContent="You must be age 18 or above";
//     } else{
//       resultIn.textContent="form submiited successfully";
//     }
// });

// let form=document.querySelector("#formIn");
// let name=document.querySelector("nameIn");
// let age=document.querySelector("#ageIn");
// let city=document.querySelector("#cityIn");
// let result=document.querySelector("#result");

// form.addEventListener("submit", (event)=>{
//  event.preventDefault();
//  if(name.textContent === "" ||
//     age.textContent === "" ||
//     age.textContent === ""){
//       result.textContent ="please fill the form";
//     }else{
//     result.textContent =`Welcome ${name.value}! You are live in ${age.value} and live in ${city.value}`;
// }});

//toggle()

// let notice = document.querySelector("#notice");

// notice.classList.add("important");

// console.log(notice);

// let notice = document.querySelector("#notice");

// notice.classList.contains("important");

// console.log(notice);

  
// let heading=document.querySelector("#heading");  
// let button=document.querySelector("#btn");

//  button.classList.toggle(".actvie");
//  console.log(button);

let nickname =document.querySelector("#nickname");
let  saveBtn=document.querySelector("#saveBtn");
let showbtn =document.querySelector("showBtn");
let deletebtn =document.querySelector("#deleteBtn");
let result =document.querySelector("#result");

saveBtn.addEventListener('click',()=>{
  localStorage.setItem("nickname",nickname.value);
});

showbtn.addEventListener('click',()=>{
  
});
