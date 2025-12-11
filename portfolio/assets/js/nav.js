// nav.js - mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  const hamb = document.getElementById('hamb');
  const nav = document.querySelector('nav.nav');
  if(!hamb || !nav) return;
  hamb.addEventListener('click', function(){
    if(getComputedStyle(nav).display === 'none' || nav.style.display === 'none'){
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '16px';
      nav.style.top = '72px';
      nav.style.background = '#fff';
      nav.style.padding = '16px';
      nav.style.borderRadius = '12px';
      nav.style.border = '1px solid var(--color-border)';
      nav.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
    } else {
      nav.style.display = 'none';
    }
  });
});
