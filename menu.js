document.addEventListener('DOMContentLoaded', function(){
    const items = document.querySelectorAll('.menu ul li')
    items.forEach((item, index) => {
        
        var select = document.createElement('div');
        select.classList.add("select")
        item.appendChild(select);
        select.style.display = "none";

        var select = document.createElement('div');
        select.classList.add("select2")
        item.appendChild(select);
        select.style.display = "none";


        item.style.rotate = (Math.random()*25 - 10) + 'deg';
        item.style.skew = '20deg 20deg;'
        item.querySelector('span').addEventListener('mouseenter', (e) => Hover(e, item))
        item.querySelector('span').addEventListener('mouseleave', (e) => notHover(e, item))
        item.querySelector('span').addEventListener('click', (e) => Click(e, item))
    })
});

function Hover(e, item){
    item.classList.add('menu-hover');
    
    // target.style.transform = target.style.transform + 'scale(1.5)'
}

function notHover(e, item){
    item.classList.remove('menu-hover');
    // target.style.transform = target.style.transform.replace(' scale(1.5)', '')
}

function Click(e, item){
    const items = document.querySelectorAll('.menu ul li')
    items.forEach((item, index) => {
        item.classList.remove('menu-active');
        item.querySelector('div').style.display = "none"
    })

    item.querySelector('div').style.display = "block"
    item.classList.add('menu-active');
    
}

function DeleteChildID(item, id){
    const child = document.getElementById(id);
    item.removeChild(child);
}

