

let perbtn  = document.getElementById('perbtn');
let sahbtn  = document.getElementById('sahbtn');



perbtn.addEventListener('click',hesablaPerimetri);
sahbtn.addEventListener('click',hesablaSaheni);


function hesablaPerimetri() {
    var en = parseFloat(document.getElementById("width").value);
    var uzunluq = parseFloat(document.getElementById("height").value);
    
    var perimetri = 2 * (en + uzunluq);
    
    document.getElementById("result").innerHTML = "Düzbucaqlının perimetri: " + perimetri;
}

function hesablaSaheni() {
    var en = parseFloat(document.getElementById("width").value);
    var uzunluq = parseFloat(document.getElementById("height").value);
    
    var sahe = en * uzunluq;
    
    document.getElementById("result").innerHTML = "Düzbucaqlının sahəsi: " + sahe;
}




































// let perbtn = document.getElementById('perbtn');
// let sahbtn = document.getElementById('sahbtn');

// perbtn.addEventListener('click', () => hesablaPerimetri());
// sahbtn.addEventListener('click', () => hesablaSaheni());

// const hesablaPerimetri = () => {
//     var en = parseFloat(document.getElementById("width").value);
//     var uzunluq = parseFloat(document.getElementById("height").value);
    
//     var perimetri = 2 * (en + uzunluq);
    
//     document.getElementById("result").innerHTML = "Düzbucaqlının perimetri: " + perimetri;
// };

// const hesablaSaheni = () => {
//     var en = parseFloat(document.getElementById("width").value);
//     var uzunluq = parseFloat(document.getElementById("height").value);
    
//     var sahe = en * uzunluq;
    
//     document.getElementById("result").innerHTML = "Düzbucaqlının sahəsi: " + sahe;
// };
