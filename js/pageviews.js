const range = document.getElementById('range');
const h2 = document.getElementById('price-h2');
const pageviews = document.getElementById('pageviews');
const checkbox = document.getElementById('checkbox');
const moy = document.getElementById('moy');
range.addEventListener('input', (e)=>{
    const value = parseInt(e.target.value);
    h2.textContent = `$${value}.00`;
    range.setAttribute('value',value);
    if(value >= 0 && value <=10){
        pageviews.textContent = "50k pageviews";
    }else if(value >= 11 && value <= 26){
        pageviews.textContent = "100k pageviews"
    }else{
        pageviews.textContent = "150k pageviews"
    }
});

checkbox.addEventListener('change', (e)=>{
    const checked = e.target.checked;
    const value = parseInt(range.value);
    const valueYear = value*12
    const porcejtaje = valueYear*0.25;
    if(checked){
        h2.textContent = `$${valueYear - porcejtaje}.00`;
        moy.textContent = "/year";
    }else{
        h2.textContent = `$${value}.00`;
        moy.textContent = "/month";
    }
});
