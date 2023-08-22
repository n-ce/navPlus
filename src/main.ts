const hamBtn = document.querySelector('input');
const nav = document.querySelector('nav');
const navFg = document.getElementById('navFG');
const anchors = document.querySelectorAll('a');
const h1 = document.querySelector('h1');
let selected = 0;


hamBtn?.addEventListener('click', () => {
  nav?.classList.toggle('show');
  navFg?.classList.toggle('active');

})


navFg?.addEventListener('click', () => {
  if (
    nav?.classList.contains('show')
    && hamBtn
  ) hamBtn?.click();
});



anchors.forEach((anchor, index) => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    if (!h1 || selected === index) return;
    anchors[selected].classList.remove('selected');
    const element = e.target as HTMLLIElement;
    h1.textContent = element.textContent;
    element.classList.add('selected');
    hamBtn?.click();
    selected = index;
  })
})