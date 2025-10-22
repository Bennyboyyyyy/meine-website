// let vorname = "Ben"
// let nachname = "Gloning"



// let listItems = document.querySelectorAll("li");

// console.log(listItems)

// for (let i = 0; i < listItems.length; i++) {
//     const element = listItems[i];
//     element.id = `element-${i+1} `



// element.innerText = element.innerText + i
// console.log(element)
// }
// const el1 = document.getElementById("el1")
// const el2 = document.getElementById("el2")
// const el3 = document.getElementById("el3")
// console.log(el1)

// el1.innerText = el1.innerText + ' 0'


// function send(event) {
//     const form = document.getElementById("contactForm");
//     const formElementEmail = document.getElementById("email");
//     const formElementThema = document.getElementById("thema");
//     const formElementNachricht = document.getElementById("nachricht");
//     if (!formElementEmail.value) {
//         alert("E-Mail Adresse darf nicht leer sein")
//         return
//     } else if (!formElementThema.value) {
//         alert("Betreff darf nicht leer sein")
//         return
//     } else if (!formElementNachricht.value) {
//         alert("Du musst eine Nachricht schreiben")
//         return
//     } else {
//         event.preventDefault();
//         alert("Das Formular wird versendet.");
//         form.reset();
//     }
// }


// let test = 0;
// const element = document.getElementById("button-change");
// function buttonchange() {
//     if (test === 0) {
//         test = 1;
//         element.classList.remove("btn-dark");
//         element.classList.add("btn-secondary");
//     } else if (test === 1) {
//         test = 2;
//         element.classList.remove("btn-secondary");
//         element.classList.add("btn-light");
//     } else if (test === 2) {
//         test = 3;
//         element.classList.remove("btn-light");
//         element.classList.add("btn-danger");
//     } else if (test === 3) {
//         test = 4;
//         element.classList.remove("btn-danger");
//         element.classList.add("btn-warning");
//     } else if (test === 4) {
//         test = 5;
//         element.classList.remove("btn-warning");
//         element.classList.add("btn-success");
//     } else if (test === 5) {
//         test = 6;
//         element.classList.remove("btn-success");
//         element.classList.add("btn-info");
//     } else if (test === 6) {
//         test = 7;
//         element.classList.remove("btn-info");
//         element.classList.add("btn-primary");
//     } else if (test === 7) {
//         test = 0;
//         element.classList.remove("btn-primary");
//         element.classList.add("btn-dark");
//     }
// }

// function changeText() {
//     const rainyDay = document.getElementById("rainy-day");
// rainyDay.outerHTML = `Mein Vorname ist ${vorname}`
// rainyDay.innerHTML = `<h1 style="color: yellow">Dies ist ein Test ${vorname}</h1>`

//     rainyDay.innerHTML = 'trest';
//     rainyDay.outerHTML = 'hallo'

// }

const homeC = document.getElementById("navbar-item-1");
const newsC = document.getElementById("navbar-item-2");
const contactC = document.getElementById("navbar-item-3");
const aboutC = document.getElementById("navbar-item-4");
const calcC = document.getElementById("navbar-item-5");
const miscC = document.getElementById("navbar-item-6");

function home() {
    homeC.classList.add("active");
    newsC.classList.remove("active");
    contactC.classList.remove("active");
    aboutC.classList.remove("active");
    calcC.classList.remove("active");
    miscC.classList.remove("active")
}

function news() {
    homeC.classList.remove("active");
    newsC.classList.add("active");
    contactC.classList.remove("active");
    aboutC.classList.remove("active");
    calcC.classList.remove("active");
    miscC.classList.remove("active")
}

function contact() {
    homeC.classList.remove("active");
    newsC.classList.remove("active");
    contactC.classList.add("active");
    aboutC.classList.remove("active");
    calcC.classList.remove("active");
    miscC.classList.remove("active")
}

function about() {
    homeC.classList.remove("active");
    newsC.classList.remove("active");
    contactC.classList.remove("active");
    aboutC.classList.add("active");
    calcC.classList.remove("active");
    miscC.classList.remove("active")
}

function calc() {
    homeC.classList.remove("active");
    newsC.classList.remove("active");
    contactC.classList.remove("active");
    aboutC.classList.remove("active");
    calcC.classList.add("active");
    miscC.classList.remove("active")
}

function misc() {
    homeC.classList.remove("active");
    newsC.classList.remove("active");
    contactC.classList.remove("active");
    aboutC.classList.remove("active");
    calcC.classList.remove("active");
    miscC.classList.add("active")
}


const inputList = document.getElementById("input")

function input() {
    const node = document.createElement("li");
    const textNode = document.createTextNode(inputList.value);
    // console.log(inputList.value)

    if (inputList.value != "") {
        node.className = "flex-node"
        node.appendChild(textNode);

        const image = document.createElement("img")
        image.src = "./assets/svg/delete.svg"
        image.className = "delete-button"
        image.role = "button"
        image.onclick = function () {
            node.remove()
        }

        node.appendChild(image)
        document.getElementById("ul1").appendChild(node);
        // document.getElementById("ul1").appendChild(image);
    }
    else {
        return
    }
    inputList.value = ""
}

const inputList2 = document.getElementById("input2");
const array = [];

function input2() {

    const textNode2 = document.createTextNode(inputList2.value);
    console.log(inputList2.value)

    if (inputList2.value != "") {
        const uL2 = document.getElementById("ul2")
        uL2.innerText = ""
        array.push(textNode2.textContent)

        array.forEach(element => {
            const node2 = document.createElement("li");
            node2.innerText = element
            uL2.appendChild(node2)
        })

    }
    else {
        return
    }
    inputList2.value = ""
}

const fruits = ["Apfel", "Banane", "Kirsche", "Mango"];

// const input3V = document.getElementById("input3")
// const pokemonNameInput = document.getElementById(input3V.value)

function inputPokemon() {
    const pokeInput = document.getElementById("input3")
    const pokeInfo = document.getElementById("input-slct")
    input3(pokeInput.value, pokeInfo)
}

async function input3(pokeInput, pokeInfo) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`);
    const pokemon = await response.json();

    const node3 = document.createElement("li");
    let textNode3;

    if (pokeInfo.value == "name") {
        textNode3 = document.createTextNode(pokemon.name);
    }
    else if (pokeInfo.value == "types[0].type.name") {
        textNode3 = document.createTextNode(pokemon.types[0].type.name)
    }
    else {
        textNode3 = document.createTextNode("Error")
        console.log(`Unexpected error detected. Dropdown selected: ${pokeInfo.value}`)
    }

    console.log(textNode3)

    node3.appendChild(textNode3);
    document.getElementById("ul3").innerHTML = ""
    document.getElementById("ul3").appendChild(node3);
}

function calcStart() {
    //Variables
    const inputCalc1Raw = document.getElementById("input-calc-1");
    const inputCalcOp = document.getElementById("input-calc-op");
    const inputCalc2Raw = document.getElementById("input-calc-2");
    const nodeCalc = document.createElement("li");
    const regex = /^[+-]?[0-9]+\.?[0-9]*$/;
    const bypassRegex = /^\s+$/
    // Root check
    if (inputCalcOp.value == "√") {
        if (inputCalc2Raw.value == "" || bypassRegex.test(inputCalc2Raw.value)) {
            inputCalc2Raw.value = "2"
            document.getElementById("calc-check-2").checked = true
        }
    }
    const calcCheck1 = document.getElementById("calc-check-1").checked
    const calcCheck2 = document.getElementById("calc-check-2").checked
    //Variables 2
    const inputCalc1 = parseFloat(inputCalc1Raw.value)
    const inputCalc2 = parseFloat(inputCalc2Raw.value)
    let error = false
    let result;
    let textNodeCalc;

    if (regex.test(inputCalc1Raw.value) && regex.test(inputCalc2Raw.value)) {
        if (inputCalcOp.value == "+") {
            result = inputCalc1 + inputCalc2
        }
        else if (inputCalcOp.value == "-") {
            result = inputCalc1 - inputCalc2
        }
        else if (inputCalcOp.value == "*") {
            result = inputCalc1 * inputCalc2
        }
        else if (inputCalcOp.value == "/") {
            if (inputCalc2 != 0) {
                result = inputCalc1 / inputCalc2
            }
            else {
                console.log(`Error: Can't divide by 0`)
                console.log(`Input: ${inputCalc1} / 0`)
                error = true
                inputCalc2Raw.value = ""
            }
        }
        else if (inputCalcOp.value == "%") {
            if (inputCalc2 != 0) {
                result = inputCalc1 % inputCalc2
            }
            else {
                console.log(`Error: Can't calculate remainder with 0`)
                console.log(`Input: ${inputCalc1} % 0`)
                error = true
                inputCalc2Raw.value = ""
            }
        }
        else if (inputCalcOp.value == "^") {
            result = Math.pow(inputCalc1, inputCalc2)
        }
        else if (inputCalcOp.value == "√") {
            if (inputCalc2 > 0 && inputCalc1 >= 0) {
                result = Math.pow(inputCalc1, 1 / inputCalc2)
            }
            else if (inputCalc2 > 0 || inputCalc1 >= 0) {
                if (inputCalc1 >= 0) {
                    if (inputCalc2 == 0) {
                        console.log(`Error: Can't root with index 0`)
                        console.log(`Input: 0√ ${inputCalc1}`)
                        error = true
                        inputCalc2Raw.value = ""
                    }
                    else if (inputCalc2 < 0) {
                        console.log(`Error: Can't root with negative index`)
                        console.log(`Input: ${inputCalc2}√ ${inputCalc1}`)
                        error = true
                        inputCalc2Raw.value = ""
                    }
                    else {
                        console.log("Unexpected Error at root index")
                        console.log(`First input: ${inputCalc1}`)
                        console.log(`Second input: ${inputCalc2}`)
                        inputCalc1Raw.value = ""
                        inputCalc2Raw.value = ""
                        error = true
                    }
                }
                else if (inputCalc2 > 0) {
                    if (inputCalc1 < 0) {
                        console.log(`Error: Can't root with negative radicand`)
                        console.log(`Input: ${inputCalc2}√ ${inputCalc1}`)
                        error = true
                        inputCalc1Raw.value = ""
                    }
                    else {
                        console.log("Unexpected Error at root radicand")
                        console.log(`First input: ${inputCalc1}`)
                        console.log(`Second input: ${inputCalc2}`)
                        inputCalc1Raw.value = ""
                        inputCalc2Raw.value = ""
                        error = true
                    }

                }
                else {
                    console.log("Unexpected Error at root error detection")
                    console.log(`First input: ${inputCalc1}`)
                    console.log(`Second input: ${inputCalc2}`)
                    inputCalc1Raw.value = ""
                    inputCalc2Raw.value = ""
                    error = true
                }
            }
            else {
                console.log(`Error: Both values invalid`)
                console.log(`Input: ${inputCalc2}√ ${inputCalc1}`)
                error = true
                inputCalc1Raw.value = ""
                inputCalc2Raw.value = ""
            }
        }
        else if (inputCalcOp.value == "lt=gt") {
            if (inputCalc1 < inputCalc2) {
                result = `${inputCalc1} < ${inputCalc2}`
            }
            else if (inputCalc1 == inputCalc2) {
                result = `${inputCalc1} = ${inputCalc2}`
            }
            else if (inputCalc1 > inputCalc2) {
                result = `${inputCalc1} > ${inputCalc2}`
            }
            else {
                console.log(`Error: Comparing failed`)
                console.log(`First input: ${inputCalc1}`)
                console.log(`Second input: ${inputCalc2}`)
                error = true
                inputCalc1Raw.value = ""
                inputCalc2Raw.value = ""
            }
        }
        else {
            console.log(`Error: Invalid Operator`)
            console.log(`Operator: ${inputCalcOp.value}`)
            error = true
        }
    }
    else if (regex.test(inputCalc1Raw.value) || regex.test(inputCalc2Raw.value)) {
        if (regex.test(inputCalc2Raw.value)) {
            console.log(`Error: First Value is NOT a valid number`)
            console.log(`First input: ${inputCalc1Raw.value}`)
            inputCalc1Raw.value = ""
            error = true
        }
        else if (regex.test(inputCalc1Raw.value)) {
            console.log(`Error: Second Value is NOT a valid number`)
            console.log(`Second input: ${inputCalc2Raw.value}`)
            inputCalc2Raw.value = ""
            error = true
        }
        else {
            console.log("Unexpected Error at regex else-else")
            console.log(`First input: ${inputCalc1Raw.value}`)
            console.log(`Second input: ${inputCalc2Raw.value}`)
            inputCalc1Raw.value = ""
            inputCalc2Raw.value = ""
            error = true
        }
    }
    else {
        console.log(`Error: Both Values are NOT valid numbers`)
        console.log(`First input: ${inputCalc1Raw.value}`)
        console.log(`Second input: ${inputCalc2Raw.value}`)
        inputCalc1Raw.value = ""
        inputCalc2Raw.value = ""
        error = true
    }

    if (error == false) {
        if (calcCheck1 == false) {
            inputCalc1Raw.value = ""
        }
        else if (calcCheck1 == true) { }
        else {
            console.log(`Error: Checkbox 1 invalid output`)
            console.log(`Output: ${calcCheck1}`)
            inputCalc1Raw.value = ""
            error = true
        }

        if (calcCheck2 == false) {
            inputCalc2Raw.value = ""
        }
        else if (calcCheck2 == true) { }
        else {
            console.log(`Error: Checkbox 2 invalid output`)
            console.log(`Output: ${calcCheck2}`)
            inputCalc2Raw.value = ""
            error = true
        }
    }

    if (error == false) {
        textNodeCalc = document.createTextNode(result)
        nodeCalc.appendChild(textNodeCalc);
        document.getElementById("calc-result").appendChild(nodeCalc);
    }
}

function calcReset() {
    document.getElementById("calc-result").innerText = ""
}

const eventListenerBtn = document.getElementById("event-listener-btn");
const eventListenerInput = document.getElementById("event-listener-input");

eventListenerBtn.addEventListener("click", (event) => {
    console.log(event)
})

//https://pokeapi.co/api/v2/pokemon/ditto

let lifetime = 0
document.getElementById("lifetime").innerHTML = lifetime

setInterval(function count() {
    lifetime += 1
    let s = 0
    let m = 0
    let h = 0
    let time
    s = lifetime
    while (s >= 60) {
        s -= 60
        m += 1
    }
    while (m >= 60) {
        m -= 60
        h += 1
    }
    if (h == 0 && m == 0) {
        time = s
    }
    else if (h == 0) {
        if (s < 10) {
            s = `0${s}`
        }
        time = `${m}:${s}`
    }
    else {
        if (s < 10) {
            s = `0${s}`
        }
        if (m < 10) {
            m = `0${m}`
        }
        time = `${h}:${m}:${s}`
    }
    document.getElementById("lifetime").innerHTML = time
},1000)