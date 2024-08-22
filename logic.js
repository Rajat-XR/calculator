const display_panel = document.querySelector("#display_panel");
const enterbtn = document.querySelector("#enter")
const delbtn = document.querySelector("#delete")
const display_panel2 = document.querySelector("#display_panel2")
const resetbtn = document.querySelector("#AC")
const display = document.querySelector(".display")

let a = "", aa = "", b = [], c = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button").forEach(button => {
        button.onclick = () => {
            // let arr = ["**", "%", "*", "/"];
            // for (let x in arr) {
            //     if (arr[x] == "**" || arr[x] == "%" || arr[x] == "*" || arr[x] == "/") {
            //         a = a + arr[x];
            //         aa = aa + button.dataset.value;
            //         b.push(arr[x]);
            //         c.push(button.dataset.value);
            //         break;
            //     }
            // }
            if (button.dataset.value == "**") {
                a = a + "^";
                aa = aa + button.dataset.value;
                b.push("^");
                c.push(button.dataset.value);
            }

            else if (button.dataset.value == "%") {
                a = a + button.dataset.value;
                aa = aa + "/100";
                b.push(button.dataset.value);
                c.push("/100");
            }
            else if (button.dataset.value == "*") {
                a = a + "×";
                aa = aa + button.dataset.value;
                b.push("×");
                c.push(button.dataset.value);
            }

            else if (button.dataset.value == "/") {
                a = a + "÷";
                aa = aa + button.dataset.value;
                b.push("÷");
                c.push(button.dataset.value);
            }

            else if (button.dataset.value == "3.14159265359") {
                a = a + "π";
                aa = aa + button.dataset.value;
                b.push("π");
                c.push(button.dataset.value);
            }

            else if (button.dataset.value == "2.71828183") {
                a = a + "e";
                aa = aa + button.dataset.value;
                b.push("e");
                c.push(button.dataset.value);
            }

            else {
                a = a + button.dataset.value;
                aa = aa + button.dataset.value;
                b.push(button.dataset.value);
                c.push(button.dataset.value);
            }
            display_panel.innerHTML = a;
            display_panel2.style.visibility = "visible";
            display_panel2.innerHTML = eval(aa).toFixed(2);
        }
    })

    enterbtn.onclick = () => {
        display_panel.innerHTML = eval(aa).toFixed(2)
        display_panel2.style.visibility = "hidden";
    }

    delbtn.onclick = () => {
        a = ""
        aa = ""
        b.pop()
        c.pop()
        for (let num of b) {
            a = a + num
        }
        for (let num of c) {
            aa = aa + num
        }

        if(a == ""){
            display_panel2.innerHTML = "";
        }
        display_panel.innerHTML = a;
        display_panel2.style.visibility = "visible";
        display_panel2.innerHTML = eval(aa).toFixed(2);
    }

    resetbtn.onclick = () => {
        display_panel.innerHTML = "";
        display_panel2.style.visibility = "hidden";
        a = ""
        aa = ""
        b = []
        c = []
    }

})