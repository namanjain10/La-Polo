var t = document.querySelectorAll('.dropdown');
var busy = false;
var clicked = false;

t.forEach(function (foo) {
    foo.addEventListener('mouseover', function() {
        if (!busy && !clicked) {
            console.log("calling");
            busy = true;
            this.classList.add("open");
        }
    })
    foo.addEventListener('mouseout', function() {
        if (busy && !clicked) {
            console.log("oyt");
            busy = false;
            this.classList.remove("open");
        }
    })
    foo.addEventListener('click', function() {
        if (clicked) {
            clicked = false;
            this.classList.remove("open");
        }
        else clicked = true;
    });
});
