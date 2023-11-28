let menu = document.getElementById('Menu');
let nav = document.getElementById('nav');
menu.addEventListener('click', () => {
  if (nav.style.display === 'none' || nav.style.display === '') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
});

// if(closeIcon){
//   closeIcon.addEventListener('click', ()=>{
//     if(nav.style.display === 'none' || nav.style.display ===''){
//       nav.style.display = 'block';
//     }else{
//       nav.style.display = 'none'
//     }
//   })
// }

