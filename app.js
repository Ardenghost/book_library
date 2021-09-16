let colors = ['red', 'blue', 'yellow', 'green', 'pink'];


const text1 = document.getElementById("txt1");
const text2 = document.getElementById("txt2");
const pageNumber = document.getElementById('quantity');
const para = document.getElementById("demo");
const form = document.getElementById('form');
const switchBtn = document.getElementById('togBtn');
const removeBtn = document.querySelector('#remove')
// const clickBtn = document.getElementById('btn');
const showItems = document.getElementById('displayItems');

function convertToWord(letter){
  if (letter === true) return "Read";
  if (letter === false) return "Not Read";

}

//clear values
function clearBtn(){
  form.reset()
 }

function myFunction() {
   if(!text1.value || !text2.value || !pageNumber.value ){
     return alert('Fill in the fields');
   }


    let y = text1.value;
    let z = text2.value;
    let a = pageNumber.value;
    let b = switchBtn.checked;
  // let x = `Book name: ${y} <br> Author: ${z}`;
    let node = document.createElement('DIV');
    // node.style.background = 'red';
    node.innerText = 'Book title: ' + text1.value + '\n Author name: ' +text2.value + '\n Page Number: ' + pageNumber.value 
    + '\n Read:' + `${convertToWord(switchBtn.checked)}`;
    showItems.appendChild(node);
    node.className = 'child';
    
   //change cards colors
   let booksColors = document.createElement("backColors");
   booksColors.className = 'Colors'
   booksColors.innerHTML = "Colors"; 
   node.appendChild(booksColors);
   booksColors.addEventListener('click', function(){
    booksColors = colors[Math.floor(Math.random() * colors.length)];
    node.style.backgroundColor = booksColors;
   })


    //remove button
    let removeButton = document.createElement("button");
    removeButton.className = 'button'
    removeButton.innerHTML = "Remove"; 
    node.appendChild(removeButton);
    removeButton.addEventListener('click', function(){
      let myObj = node;
      myObj.remove();
    })
    //reset form
    form.reset();
        }
 
        let modal = document.getElementById("myModal");
        // Get the button that opens the modal
        let btn = document.getElementById("myBtn");  
        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];        
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
          modal.style.display = "block";
        }        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }       
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }



