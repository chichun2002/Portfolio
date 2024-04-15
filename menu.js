document.addEventListener('DOMContentLoaded', function(){
    const items = document.querySelectorAll('.menu ul li')
    items.forEach((item, index) => {
        
        var select = document.createElement('div');
        select.classList.add("select")
        item.appendChild(select);
        if (item.textContent != "HOME") {
            select.style.display = "none";
        }

        item.style.rotate = (Math.random()*25 - 10) + 'deg';
        item.style.skew = '20deg 20deg;'
        item.querySelector('span').addEventListener('mouseenter', (e) => Hover(e, item))
        item.querySelector('span').addEventListener('mouseleave', (e) => notHover(e, item))
        item.querySelector('span').addEventListener('click', (e) => Click(e, item))
    })
    const items2 = document.querySelectorAll('.project')
    items2.forEach((item, index) => {
        item.style.rotate = (Math.random()*5 - 2.5) + 'deg';
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

    if (item.textContent == "HOME") {
        document.querySelector('.menu').classList?.remove('menu-state2');
    }
    else {
        document.querySelector('.menu').classList?.add('menu-state2');
    }

    if (item.textContent == "PROJECTS") {
        document.querySelector(".projects").style.display = "block";
    }
    else {
        document.querySelector(".projects").style.display = "none";
    }

    document.querySelector('.side-text').textContent = item.textContent;
    item.querySelector('div').style.display = "block"
    item.classList.add('menu-active');
    
}

function DeleteChildID(item, id){
    const child = document.getElementById(id);
    item.removeChild(child);
}

