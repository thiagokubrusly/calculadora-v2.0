const outputEl = document.querySelector(".text");
const valEl = document.querySelectorAll(".val");
const ClearEl = document.querySelector(".AC");
const deleteEl = document.querySelector(".DEL");
const equalEl = document.querySelector(".equal");

valEl.forEach((val)=>{
    val.addEventListener("click",()=>{
        outputEl.value += val.value ;
    })
})

ClearEl.addEventListener("click",()=>{
    outputEl.value = "";
})

deleteEl.addEventListener("click",()=>{
    outputEl.value = outputEl.value.slice(0,-1);
})

equalEl.addEventListener("click",()=>{
    try{
        outputEl.value = eval(outputEl.value);
    }catch(e){
        alert(e);
    }
})

const keyboardMap = {
    'c': 'cleanDisplay',
    Backspace: 'del',
    '%': 'percentage',
    '/': 'opDivision',

    7: 'key7',
    8: 'key8',
    9: 'key9',
    '*': 'opMultiplication',

    4: 'key4',
    5: 'key5',
    6: 'key6',
    '-': 'opSubtraction',

    1: 'key1',
    2: 'key2',
    3: 'key3',
    '+': 'opSum',

    '.': 'decimal',
    0: 'key0',
    '=': 'opEqual',
    Enter: 'opEqual',
};

const mappingKeyboard = (event) => {
    
    const keyBtn = event.key;
    const keyAllowed = () => Object.keys(keyboardMap).indexOf(keyBtn) !== -1;
    if (keyAllowed()) document.getElementById(keyboardMap[keyBtn]).click();
};

document.addEventListener('keydown', mappingKeyboard);