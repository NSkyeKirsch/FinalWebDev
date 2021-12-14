let leftHeaderElement;
let leftInfoElement;
let beginningElement;
let myspaceElement;
let facebookElement;
let metaElement;

document.addEventListener("DOMContentLoaded", function(){

  leftHeaderElement = document.querySelector(".leftHeader");
  leftInfoElement = document.querySelector(".leftInfo");
  beginningElement = document.querySelector("#Beginning-button");
  myspaceElement = document.querySelector("#MySpace-button");
  facebookElement = document.querySelector("#Facebook-button");
  metaElement = document.querySelector("#Meta-button");

  beginningElement.addEventListener("click", function(){

      createContentProper(contentLeftSide[0]);

  })

  myspaceElement.addEventListener("click", function(){

      createContentProper(contentLeftSide[1]);

  })
})





let contentLeftSide = [{
    "Header": "The First Social Media Website",
    "Content": "Hello World"
  },
  {
    "Header": "Myspace",
    "Content": "Hello World 2"
  },
  {
    "Header": "Facebook introduces Algorithm",
    "Content": "Hello World 3"
  },
  {
    "Header": "Facebook becomes Meta",
    "Content": "Hello World 4"
  }
];

function createContentProper(incomingJSON){
  leftHeaderElement.innerText = incomingJSON['Header'];
  leftInfoElement.innerText = incomingJSON['Content'];
}
