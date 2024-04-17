document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('mousemove', (e) => MouseMove(e))
    document.addEventListener('scroll', (e) => ScrolleMove(e))
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
        item.style.rotate = (Math.random()*10 - 5) + 'deg';
        // item.querySelector('video').style.scale = 1.1;
        // item.style.scale = "1.1";
    })

});

setInterval(function() {
    updateProjects(document.querySelectorAll('.project'))
}, 10)

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

    if (item.textContent == "ABOUT") {
        document.querySelector(".about").style.display = "block";
    }
    else {
        document.querySelector(".about").style.display = "none";
    }

    if (item.textContent == "PROJECTS") {
        document.querySelector(".projects").style.display = "block";
    }
    else {
        document.querySelector(".projects").style.display = "none";
    }

    if (item.textContent == "CONTACT") {
        document.querySelector(".contact").style.display = "block";
    }
    else {
        document.querySelector(".contact").style.display = "none";
    }

    document.querySelector('.side-text').textContent = item.textContent;
    item.querySelector('div').style.display = "block"
    item.classList.add('menu-active');
    
}

function DeleteChildID(item, id){
    const child = document.getElementById(id);
    item.removeChild(child);
}

function updateProjects(item){
    var items = document.querySelectorAll(".project")
    items.forEach((item, index) => {
        rect = item.getBoundingClientRect()
        number = Math.sqrt(distance(0, (rect.y+rect.height/2), 0, -100))
        number2 = Math.sqrt(distance(0, (rect.y+rect.height/2), 0, window.innerHeight + 100))
        number = Math.min(number, number2)
        number = linearmap(number,0, 20, -20, 30)
        item.style.left=  number + "vw"
        // document.querySelector('.side-text').textContent = number
        
    })
}
function getMousePos(e) {
    return {x:e.pageX,y:e.pageY};
}

function distance(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2-x1, 2)+Math.pow(y2-y1, 2))
}

function linearmap(value,inlow, inhigh, low, high){
    output = low + ((high - low) / (inhigh - inlow)) * (value - inlow)
    if (output > high){return high}
    if (output < low){return low}
    else {return output}
}

