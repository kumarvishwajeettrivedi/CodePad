let output = document.querySelector("#output");
let everything = document.querySelectorAll(".leftside .container textarea");
let html = '', css = '', js = '';

everything.forEach((item, index) => {
    item.addEventListener("keyup", () => {
        if (index == 0) {
            html = item.value;
        }
        if (index == 1) {
            css = item.value;
        }
        if (index == 2) {
            js = item.value;
        }
        output.contentDocument.body.innerHTML = html;
        output.contentDocument.head.innerHTML = `<style>${css}</style>`;
        output.contentDocument.body.innerHTML += `<script>${js}</script>`;
    });
});
