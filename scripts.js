let projectButtons = document.querySelectorAll('.project-button');
projectButtons.forEach(element => element.onclick = function() {
    element.parentElement.querySelector('dialog').setAttribute('open', '');
});

let projectCloseButtons = document.querySelectorAll('.project-close-button');
projectCloseButtons.forEach(element => element.onclick = function() {
    element.closest('dialog').removeAttribute('open');
});

let dialogBackground = document.querySelectorAll('.popup');
dialogBackground.forEach(element => element.onclick = function(e) {
    if(e.target.tagName == 'DIALOG') {
        element.removeAttribute('open');
    }
});
