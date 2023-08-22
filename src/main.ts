const hamBtn = document.querySelector('input');
const nav = document.querySelector('nav');
const lists = document.querySelectorAll('li');
const h1 = document.querySelector('h1');
let selected = 0;


hamBtn?.addEventListener('input', () => {
  nav?.classList.toggle('show');
})


document.body.addEventListener('click', e => {
  if (
    nav?.classList.contains('show') &&
    (e.target as HTMLInputElement).matches('body')
    && hamBtn
  ) hamBtn?.click();
});



lists.forEach((list, index) => {
  list.addEventListener('click', e => {
    if (!h1) return;
    lists[selected].classList.remove('selected');
    const element = e.target as HTMLLIElement;
    h1.textContent = element.textContent;
    element.classList.add('selected');
    hamBtn?.click();
    selected = index;
  })
})