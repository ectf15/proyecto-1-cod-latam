const menuItems = document.querySelectorAll("nav > div.menu-item")

menuItems.forEach(function(item){
    item.addEventListener('click',function(e){ 
const currentItem = document.querySelector('.active');
currentItem.classList.remove('active');
e.target.classList.add('active');
     });
});