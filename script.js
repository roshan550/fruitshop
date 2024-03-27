var listItems = document.querySelectorAll('.fruit');
 listItems.forEach(function(listItem) {
   var editButton = document.createElement('button');
        editButton.textContent = 'Edit'; // Set the text content of the button
        editButton.classList.add('edit-btn');
      listItem.appendChild(editButton);
    });
// Implement the code as in video but with one extra 'Edit' button in 'li'
const form=document.querySelector('form')
const fruits=document.querySelector('.fruits')
form.addEventListener('submit',function(event){
  event.preventDefault();
  const fruitToadd=document.getElementById('fruit-to-add')
  const lis=document.createElement('li')
  const listext=document.createTextNode(fruitToadd.value)
  lis.appendChild(listext)
  const deletebtn=document.createElement('button')
  const deletetxt=document.createTextNode('x')
  deletebtn.className='delete-btn'
  deletebtn.append(deletetxt)
  lis.appendChild(deletebtn)
  const editbtn=document.createElement('button')
  const edittxt=document.createTextNode('Edit')
  editbtn.className='edit-btn'
  editbtn.append(edittxt)
  lis.append(editbtn)
  fruits.append(lis)

  fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
      const delitem=event.target.parentElement
      fruits.removeChild(delitem)
    }
  })
  
})