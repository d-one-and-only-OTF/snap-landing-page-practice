/* 
  The code below creates 4 variables and the
  First Variable accesses all the tags containing a class called .arrow and turns it to an array
  Second Variable accesses all the tags containing a class called .arrow-text and turns it to an array
  Third Variable accesses the tag containing a class called .dropdown-content-1
  Fourth Variable accesses the tag containing a class called .dropdown-content-2
*/

const dropDownArrows = Array.from(document.querySelectorAll(".arrow")); 
const dropDownTxts = Array.from(document.querySelectorAll(".arrow-text")); 
const dropDownContent1 = document.querySelector(".dropdown-content-1"); 
const dropDownContent2 = document.querySelector(".dropdown-content-2"); 


/*
  The code below loops through the dropdown arrows and adds
  a click event listener to the dropdowntxts variable
  a conditional statement is then passed to it in order
  to add or remove a class called active
 */
dropDownArrows.forEach((arrow, index) => {
  dropDownTxts[index].addEventListener("click", () => {
    if (arrow.classList.contains("active")) {
      arrow.classList.remove("active");
    } else {
      arrow.classList.add("active");
    }
  });
});

/*
  The code below adds a click event listener to the dropdown txts respectively
  and toggles the class  called active-content on the dropdowncontent
*/

dropDownTxts[0].addEventListener("click", ()=>{
  dropDownContent1.classList.toggle("active-content");
});

dropDownTxts[1].addEventListener("click", ()=>{
  dropDownContent2.classList.toggle("active-content");
});


/*
  The code below adds a click event listener to the document 
  a variable called dropDownIsActive has also been declared
  and e.target is used to get the tag with an ancestor that has the
  data attribute of data-dropdown
  a conditional statement is also passed the first to
  ignore if !!dropDownIsActive is true and the second
  to remove active-content classes from the dropDownContent
  if it's equal to a false value
*/
document.addEventListener("click", (e)=>{
  const dropDownIsActive = e.target.closest("[data-dropdown]");
  if(!!dropDownIsActive) return
  if(!! dropDownIsActive === false){
    dropDownContent1.classList.remove("active-content");
    dropDownContent2.classList.remove("active-content");
  }
});

const openBtn = document.querySelector("[data-toggler-open]");
const closeBtn = document.querySelector("[data-toggler-close]");
const sideBarContent = document.querySelector("[data-toggler-content]");

openBtn.addEventListener("click", ()=>{
  sideBarContent.classList.toggle("active-bar");
});

closeBtn.addEventListener("click", ()=>{
  sideBarContent.classList.toggle("active-bar");
});


const featuresMobile = document.querySelector(".header-mobile .header-menu-content p");
const featuresContent = document.querySelector(".features-content");
const companyMobile = document.querySelector(".company");
const companyContent = document.querySelector(".company-content");


featuresMobile.addEventListener("click", ()=>{
  featuresContent.classList.toggle("active");
});

companyMobile.addEventListener("click", ()=>{
  companyContent.classList.toggle("active");
})
