// Computing the area of a triangle
function computingArea() {
    let base = Number(document.getElementById('base').value);
    let height = Number(document.getElementById('height').value);

    let areaOfTriangle = (base * height) / 2;

    document.getElementById('output').innerHTML = 
        'The area of a triangle is ' + areaOfTriangle;
}
