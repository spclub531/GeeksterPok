const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF57F7', '#F7FF57', '#57F7FF', '#7B57FF', '#57FF7E', '#FF7E57', '#57FFCD'];
const shapes = ['triangle', 'square', 'circle', 'rectangle', 'diamond'];

const shapeElement = document.getElementById('shape');
const changeColorBtn = document.getElementById('changeColorBtn');
const changeShapeBtn = document.getElementById('changeShapeBtn');

changeColorBtn.addEventListener('click', changeColor);
changeShapeBtn.addEventListener('click', changeShape);

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    shapeElement.style.backgroundColor = randomColor;
}

function changeShape() {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    shapeElement.style.borderRadius = ''; 
    shapeElement.className = 'shape ' + randomShape;
    
    if (randomShape === 'circle') {
        shapeElement.style.borderRadius = '50%';
    }
}
