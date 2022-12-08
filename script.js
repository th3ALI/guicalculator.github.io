'use strict';

//elements
let btn = document.querySelectorAll(".number");
let input = document.querySelector(".input");
let zero = document.querySelector(".zero");
let answer = document.querySelector(".answer");

//ops
let div = document.querySelector(".div");
let mul = document.querySelector(".mul");
let min = document.querySelector(".min");
let plus = document.querySelector(".plus");
let rem = document.querySelector(".rem ");
let sqrt = document.querySelector(".sqrt");
let pow = document.querySelector(".pow");
let dot = document.querySelector(".dot");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let sign = document.querySelector(".sign");
let backspace = document.querySelector(".backspace");
// let op = document.querySelector(".op");
dot.addEventListener("click", () => {
    input.value +=
        input.value === ""
            ? "0" + dot.textContent
            : input.value.includes(".")
                ? ""
                : dot.textContent;
});
// functions
let pushToHistory = () => {
    input.value != "" ? history.push(Number(input.value)) : console.log("Enter numbers!");
    input.value = "";
};

let showHistory = () => {
    let str = "";
    history.map((cur) => {
        str += cur + " ";
    });
    answer.textContent = str;
    console.log(str);
};

let showAnswer = () => {
    answer.textContent = eval(answer.textContent);
};

let equalArray = () => {
    let str = "";
    history.map((cur) => {
        str += cur + " ";
    });
    history = [eval(str)];
    console.log(history);
};

let ifValid = () => {
    if (typeof history[history.length - 1] == "number" && history[history.length - 1] !== ("+" || "-" || "*" || "/" || "") || input.value !== "") {
        return true;
    } else { return false; }
};

let operators = (op) => {
    if (ifValid()) {
        pushToHistory();
        showHistory();
        equalArray();
        showAnswer();
        if (ifValid()) {
            addop(op);
            showHistory();
        } else { console.log("cannot enter multiple operators"); }
    }
};

let addop = (arr) => {
    if (history == []) {
        console.log("Enter a number first!");
    } else if (answer.textContent = "") {
        console.log("Enter a number first!");
    } else { history.push(arr); }
};

let resetI = () => {
    i = 0;
};

//variables
let history = [];
let i = 0;
let j = 0;
let activeNumber;


//event listener for nums
Array.from({ length: btn.length }, (_, i) => i).map((i) =>
    btn[i].addEventListener("click", () => (input.value += btn[i].textContent))
);

zero.addEventListener("click", () => {
    input.value += input.value === "" ? "" : zero.textContent;
});

// event listener for operators
plus.addEventListener("click", () => {
    operators("+");
    // console.log(history, typeof history[0]);
});

min.addEventListener("click", () => {
    operators("-");
    // console.log(history, typeof history[0]);
});

mul.addEventListener("click", () => {
    operators("*");
}
    // console.log(history, typeof history[0]);
);

div.addEventListener("click", () => {
    operators("/");
}
    // console.log(history, typeof history[0]);
);

equal.addEventListener("click", () => {
    if (input.value !== "" && (history[history.length - 1] == "*" || history[history.length - 1] == "/" || history[history.length - 1] == "-" || history[history.length - 1] == "+")) {
        pushToHistory();
        showHistory();
        equalArray();
        console.log(history);
        showAnswer();
    } else { input.value = ""; }
}
    // console.log(str);
);

clear.addEventListener("click", () => {
    input.value = "";
    history = [];
    answer.textContent = "";
    // console.log(history);
});

dot.addEventListener("click", () => {
    input.value +=
        input.value === ""
            ? "0" + dot.textContent
            : input.value.includes(".")
                ? ""
                : dot.textContent;
});

sign.addEventListener("click", () => {
    if (input.value == "") {
        history[0] = history[0] * -1;
    } else { input.value = input.value * -1; }
    showHistory();
    showAnswer();
});

rem.addEventListener("click", () => {
    if (input.value == "") {
        history[0] = history[0] / 100;
    } else { input.value = input.value / 100; }
    showHistory();
    showAnswer();
});

backspace.addEventListener("click", () => {
    input.value = input.value.slice(0, input.value.length - 1);
    console.log(input.value, typeof input);

});