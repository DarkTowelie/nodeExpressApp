import hiddenNavig from './hiddenMenu.js';
import createContactUs from './contactUsForm.js';


document.addEventListener('DOMContentLoaded', function() {
    let body = document.querySelector('body');
    hiddenNavig(body);
    createContactUs(body);
 }, false);