const TOGGLE_THEME_BTN = document.getElementById('toggle-theme-btn');
TOGGLE_THEME_BTN.addEventListener('click', function(){
    //alert('click');
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }
});
console.log('Hello, World!');
// alert('This is a test alert!');
