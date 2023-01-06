// document.addEventListener('contextmenu', event => event.preventDefault());
let prefix = document.getElementById('pre');
let postfix = document.getElementById('post');
let out = document.getElementById('out');
let output = document.getElementById('output');
let input = document.getElementById('input');
function pre() {
    postfix.style.backgroundColor = 'rgba(5, 97, 154, 0.422)';
    prefix.style.backgroundColor = '#faae9773';
    out.innerHTML = "Prefix Expression :";
    const data1 = [];
    let size1 = data1.length;
    if (input.value != "") {
        output.innerHTML = "";
    }
    else {
        output.innerHTML = "No Input";
    }
}

function post() {
    prefix.style.backgroundColor = 'rgba(5, 97, 154, 0.422)';
    postfix.style.backgroundColor = '#faae9773';
    out.innerHTML = "Postfix Expression :";
    const data = [];
    let size = data.length;
    if (input.value != "") {
        output.innerHTML = "";
        const infix = Array.from(input.value);
        let i=0;
        while(infix[i] !=undefined){
            if (!operator(infix[i])) {
                output.innerHTML += infix[i];
                i++;
            }
            else if(precedence(infix[i])> precedence(data[size-1])){
                data[size]=infix[i];
                size++;
                i++;
            }
            else{
                output.innerHTML+= data[size-1];
                size--;
            }
        }
        while(size>0){
            output.innerHTML+=data[size-1];
            size--;
        }
    }
    else {
        output.innerHTML = "No Input";
    }
}

function precedence(ch) {
    if (ch == '*' || ch == '/')
        return 3;
    else if (ch == '+' || ch == '-')
        return 2;
    else
        return 0;
}

function operator(ch) {
    if (ch == '*' || ch == '/' || ch == '+' || ch == '-')
        return 1;
    else
        return 0;
}
