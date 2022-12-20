// Меню бургер
const iconMenu = document.querySelector('.burger__icon');
const menuBody = document.querySelector('.navigation');
if(iconMenu){
  iconMenu.addEventListener("click", function(e)
  {
    document.body.classList.toggle('__lock');
    iconMenu.classList.toggle('burger__icon-active');
    menuBody.classList.toggle('navigation__active');

  })
}
// Якоря
const menuLinks = document.querySelectorAll('.navigation-link[data-goto]');
if (menuLinks.length > 0){
  menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e){
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

      if(iconMenu.classList.contains('burger__icon-active')){
        document.body.classList.remove('__lock');
        iconMenu.classList.remove('burger__icon-active');
        menuBody.classList.remove('navigation__active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}