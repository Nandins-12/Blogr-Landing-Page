const toggle_menu = document.querySelector('.toggle-menu');
const area_nav = document.querySelector('.area-nav');
const header_content = document.querySelector('.header-content');
const li_topics = document.querySelectorAll('.product, .company, .connect');

toggle_menu.addEventListener('click', () => {
    toggle_menu.classList.toggle('active');
    area_nav.classList.toggle('active');

    if (area_nav.classList.contains('active')) {
        header_content.style.opacity = '0';
        header_content.style.position = 'absolute';
        header_content.style.left = '-9999px';
        header_content.style.transform = 'translateY(-30px)'
    } else { 
        header_content.style.opacity = '1';
        header_content.style.position = 'initial';
        header_content.style.transform = 'translateY(0)'
    }
});

li_topics.forEach((li) => {
    li.querySelector('button').addEventListener('click', () => {
        li.classList.toggle('active');

        for(let x = 0; x < 3; x++) {
            if(li_topics[x] != li) {
                li_topics[x].classList.remove('active');
            }
        }
    });
});