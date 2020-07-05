//global variable to keep track of number of images
var count = 0;
//function to create a new element without a text node
function CreateElement(elem_name, parent_elem, parent_index){
  var elem = document.createElement(elem_name);
  var parent = document.getElementsByTagName(parent_elem)[parent_index];
  parent.appendChild(elem);
}
//function to set an attribute to an element
function SetAttribute(elem_name, elem_index, attr_name, attr_value){
 var elem = document.getElementsByTagName(elem_name)[elem_index];
 elem.setAttribute(attr_name, attr_value);
}
//function to insert new image 
function insertImage(){
 var val = document.getElementsByTagName('input')[0].value;
 CreateElement('img','div',0);
 SetAttribute('img',count,'src',val);
 count++; //index for next image
}
//functions to toggle menu options
function showMenu(){
 var block = document.getElementsByClassName('img-upload')[0];
 block.className = "img-upload show";
}
function closeMenu(){
 var block = document.getElementsByClassName('img-upload')[0];
 block.className = "img-upload hide";
}
//adding event listeners to buttons
window.addEventListener('load',function(){
 document.getElementsByTagName('button')[1].addEventListener('click',function(){
  insertImage();
 });
 document.getElementsByTagName('button')[0].addEventListener('click',function(){
  showMenu();
 });
 document.getElementsByTagName('span')[0].addEventListener('click',function(){
  closeMenu();
 });
});