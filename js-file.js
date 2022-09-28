//declare some variables
const slider = document.getElementById('myRange')
const sliderlabel = document.querySelectorAll('.slider-label')
let slidervalue = slider.value
let totalboxes = slidervalue * slidervalue

//make slider label display slider value
    slider.addEventListener('change', () => {
        slidervalue = slider.value
        sliderlabel.forEach(element => {
            element.innerHTML = slidervalue
            totalboxes = slidervalue * slidervalue
        container.innerHTML = "";
        container.style.setProperty(
            "grid-template-columns",
            `repeat(${slidervalue}, 2fr)`
          );
        container.style.setProperty(
            "grid-template-rows",
            `repeat(${slidervalue}, 2fr)`
        )
        for (i=0; i<totalboxes; i ++) {
            let newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'box')
            const container = document.querySelector('#container')
            container.appendChild(newDiv)
            newDiv.addEventListener('mouseover', () => {
                newDiv.setAttribute('class', 'hoveredbox')
            })
        }
        })
    });

//make grid using slidervalue
for (i=0; i<totalboxes; i ++) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'box')
    const container = document.querySelector('#container')
    container.appendChild(newDiv)
    newDiv.addEventListener('mouseover', () => {
        newDiv.setAttribute('class', 'hoveredbox')
    })
}