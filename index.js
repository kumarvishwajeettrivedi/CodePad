
let output = document.querySelector("#output");
let htmlTextarea = document.querySelector("#html");
let cssTextarea = document.querySelector("#css");
let jsTextarea = document.querySelector("#js");

let html = '', css = '', js = '';

function updateOutput() {
    output.contentDocument.body.innerHTML = html;
    output.contentDocument.head.innerHTML = `<style>${css}</style>`;
    output.contentDocument.body.innerHTML += `<script>${js}<\/script>`;
}

htmlTextarea.addEventListener("input", (e) => {
    html = e.target.value;
    updateOutput();
});

cssTextarea.addEventListener("input", (e) => {
    css = e.target.value;
    updateOutput();
});

jsTextarea.addEventListener("input", (e) => {
    js = e.target.value;
    updateOutput();
});

htmlTextarea.addEventListener("keydown", (e) => {
    if (e.key === '>' && htmlTextarea.value.endsWith('<')) {
        e.preventDefault();
        htmlTextarea.value += '/>';
    }
    html = htmlTextarea.value;
    updateOutput();
});
