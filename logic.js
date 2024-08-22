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

            if (a.length > 8) {
                display_panel.style.fontSize = "3.8em";

                if (a.length > 9) {
                    display_panel.style.fontSize = "3.5em";
                }
                if (a.length > 10) {
                    display_panel.style.fontSize = "3.2em";
                    display_panel2.style.fontSize = "2.3em";
                }
                if (a.length > 11) {
                    display_panel.style.fontSize = "2.9em";
                    display_panel2.style.fontSize = "2.1em";
                }
                if (a.length > 12) {
                    display_panel.style.fontSize = "2.7em";
                    display_panel2.style.fontSize = "2em";
                }
                if (a.length > 13) {
                    display_panel.style.fontSize = "2.5em";
                    display_panel2.style.fontSize = "1.8em";
                }
                if (a.length > 14) {
                    display_panel.style.fontSize = "2.3em";
                    display_panel2.style.fontSize = "1.6em";
                }
                if (a.length > 15) {
                    display_panel.style.fontSize = "2.2em";
                    display_panel2.style.fontSize = "1.4em";
                }
                if (a.length > 16) {
                    display_panel.style.fontSize = "2.1em";
                    display_panel2.style.fontSize = "1.4em";
                }
                if (a.length > 17) {
                    display_panel.style.fontSize = "1.9em";
                }
                if (a.length > 18) {
                    display_panel.style.fontSize = "1.6em";
                    display_panel2.style.fontSize = "1.2em";
                }
            }
            display_panel.innerHTML = a;
            display_panel2.style.visibility = "visible";
            display_panel2.innerHTML = eval(aa).toFixed(2);
        }
    })

    enterbtn.onclick = () => {
        display_panel.style.fontSize = "4.2em";
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

        if (a == "") {
            display_panel2.innerHTML = "";
        }

        if (a.length > 18) {
            display_panel.style.fontSize = "1.9em";
            display_panel2.style.fontSize = "1.2em";
        }
        else if (a.length > 17) {
            display_panel.style.fontSize = "2em";
        }
        else if (a.length > 16) {
            display_panel.style.fontSize = "2.1em";
            display_panel2.style.fontSize = "1.4em";
        }
        else if (a.length > 15) {
            display_panel.style.fontSize = "2.3em";
        }
        else if (a.length > 14) {
            display_panel.style.fontSize = "2.4em";
            display_panel2.style.fontSize = "1.7em";
        }
        else if (a.length > 13) {
            display_panel.style.fontSize = "2.6em";
        }
        else if (a.length > 12) {
            display_panel.style.fontSize = "2.7em";
        }
        else if (a.length > 11) {
            display_panel.style.fontSize = "2.9em";
            display_panel2.style.fontSize = "2em";
        }
        else if (a.length > 10) {
            display_panel.style.fontSize = "3.3em";
        }
        else if (a.length > 9) {
            display_panel.style.fontSize = "3.6em";
        }
        else if (a.length > 8) {
            display_panel.style.fontSize = "4em";
        }
        else if (a.length <= 8) {
            display_panel.style.fontSize = "4.2em";
            display_panel2.style.fontSize = "2.5em";
        }
        display_panel.innerHTML = a;
        display_panel2.style.visibility = "visible";
        display_panel2.innerHTML = eval(aa).toFixed(2);
    }

    resetbtn.onclick = () => {
        display_panel.innerHTML = "";
        display_panel2.innerHTML = "";
        display_panel.style.fontSize = "4.2em";
        display_panel2.style.fontSize = "2.5em";
        display_panel2.style.visibility = "hidden";
        a = ""
        aa = ""
        b = []
        c = []
    }
})