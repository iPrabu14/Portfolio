let nav = document.querySelector('nav');
    
    window.addEventListener('scroll',()=>{
        nav.classList.toggle('nav.scroll',window.scrollY > 0);
    });

    let AllnavLinkA = document.querySelectorAll('.nav-links li a');

    AllnavLinkA.forEach(item=>{
      item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');
      })
    });

    const removeActive =()=> AllnavLinkA.forEach(item=>{
      item.classList.remove('active')
    });

    let menuBars = document.querySelector('nav button');
    let navlinks=document.querySelector('.nav-links')
    menuBars.addEventListener('click',()=>{
        navlinks.classList.toggle('nav-link-block');
    });

