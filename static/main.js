'use strict'



const deleBtn = document.querySelectorAll('.content__btn--delete');
const changeBtn = document.querySelectorAll('.content__btn--change');
const confirmBtn = document.querySelectorAll('.content__btn--confirm');

const checkBox = document.querySelectorAll('.content__check')
const content = document.querySelector('.content');
const input = document.querySelector('.content__input')
const  contentItem = document.querySelector('.content__item')

function deleteItem(e) {
  /* console.log(e.target) */
  let id = e.target.dataset.delete || null;
  if (id) {
    fetch(`/${id}`, {
      method: "delete",
    })
  }
}

deleBtn.forEach((btn)=>{
 btn.addEventListener('click',deleteItem)
})


function ChangeItem(e) {
 if (e.target.closest('.content__btn--change')) {
  e.target.closest('.content__item').querySelector('.content__input').removeAttribute("readonly")
  e.target.closest('.content__item').querySelector('.content__btn--confirm').style.display = "block";
  e.target.style.display = "none";
 }

}
content.addEventListener('click',ChangeItem)


function putFetch(e) {
  let id = e.target.dataset.confirm || null;
  let data = e.target.closest('.content__item').querySelector('.content__input').value

 const body = {
    name: data
  }
  if(id){
    fetch(`/${id}`, {
      method: 'PUT', // или 'PUT'
      body: JSON.stringify(body), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(location.reload())
  }
}

confirmBtn.forEach((btn)=>{
  btn.addEventListener('click',putFetch)
})



function checked(e) {
e.target.classList.toggle('checked')
if (e.target.classList.contains('checked')) {
  e.target.value = "true";
}
else{
  e.target.value = "false";
}
}

checkBox.forEach((item)=>{
 
  item.addEventListener('click',checked)
  item.addEventListener('click',checkFetch)
})

function checkFetch(e) {
  let id = e.target.dataset.id || null;
  let data = e.target.closest('.content__check').value

 const  body = {
    checked:data
  }
  if(id){
    fetch(`/check/${id}`, {
      method: 'PUT', // или 'PUT'
      body: JSON.stringify(body), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } 
}

content.addEventListener('click',deleteAnimation)

function deleteAnimation(event) {
 if( event.target.classList.contains("content__btn--delete"))  {
      event.target.closest(".content__item").style.transform = "translateX(-1000%)"
      event.target.closest(".content__item").style.position = "absolute";
   
  }
}






const checkDone = document.querySelectorAll('.label__check-done')
const labelDone = document.querySelectorAll('.label__done')

labelDone.forEach((item)=>{
  
})



function isDone(e) {

  e.target.classList.toggle('checked')
  if (e.target.classList.contains('checked')) {
    e.target.value = "true";
  }
  else{
    e.target.value = "false";
  }
  }

checkDone.forEach((item)=>{
  item.addEventListener('click',isDone)
  item.addEventListener('click',isDoneFetch)


})



function isDoneFetch(e) {
  let id = e.target.dataset.id || null;
  let data = e.target.closest('.label__check-done').value


 const  body = {
    done:data
  }
  if(id){
    fetch(`/isCheckDone/${id}`, {
      method: 'PUT', // или 'PUT'
      body: JSON.stringify(body), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(location.reload())
  } 
}