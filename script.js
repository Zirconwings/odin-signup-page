const p2 = document.querySelector('#confirm');
const p1 = document.querySelector('#password');
const btn = document.querySelector('button');
btn.addEventListener("click", function (e){
    if (p1.value !== p2.value){
        e.preventDefault();
        p2.value = '';
    }
});