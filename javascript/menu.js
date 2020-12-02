(function ($) {
  const menuLinks = document.getElementsByClassName("menu-link");
  const menuWrapper = document.getElementById("menu-wrapper");
  const searchWrapper = document.getElementById("search-wrapper");
  const internetBankingWrapper = document.getElementById("internet-banking-wrapper");
  const mobileMenu = document.getElementById("mobile-menu-button");

  const ftmbModalOpen =  document.querySelectorAll("[data-modal-target]");
  const ftmbModalClose =  document.querySelectorAll("[data-modal-close]");

  const triggerSearch = document.getElementById("search");
  const mobileMenuLinks = document.getElementsByClassName("mobile-menu-header");
  const closeButtons = document.getElementsByClassName("menu-close-button");
  const internetBankingModalButtons = document.getElementsByClassName("internet-banking-modal-button");
  let currentLinkIndex = 0;
  let isMenuOpen = false;
  let currentInternetBankingTab = 0;

  $(".expgroup").hide();
  $(".share").click(function(){
    $(".expgroup").animate({height:'toggle'});
  });

  Array.from(menuLinks).forEach((link) => {
    link.onclick = function (e) {
      openMenu(e);
    };
  });

  Array.from(closeButtons).forEach(closeButton => {
    closeButton.onclick = function(e) {
      const currMenuContent = document.querySelector(`[data-menu-content-index="${currentLinkIndex}"]`);
    
      isMenuOpen = false;
      internetBankingWrapper.classList.remove("visible");
      searchWrapper.classList.remove("visible");
      currMenuContent.classList.remove("selected");
      menuWrapper.classList.remove("visible");
      return;
    }
  });

  Array.from(mobileMenuLinks).forEach(link => {
    link.onclick = function(e) {
      const el = e.target;
      const contents = el.nextElementSibling;
      contents.classList.toggle("show");
    }
  });

  Array.from(internetBankingModalButtons).forEach(button => {
    button.onclick = function(e) {
      const index = e.target.dataset.internetBankingModalButton;
      document.querySelector(`[data-internet-banking-modal-button="${currentInternetBankingTab}"]`).classList.remove("selected");
      e.target.classList.add("selected");
      currentInternetBankingTab = index;
    }
  });

  triggerSearch.onclick = function() {
    window.open("/search.html");
  }

  Array.from(ftmbModalOpen).map(el => {
    el.onclick = function(e) {
      e.stopPropagation();
      const { target, currentTarget } = e;
      const id = currentTarget.dataset.modalTarget;
      
      document.getElementById(id).classList.toggle("visible");
    }
  })
  
  Array.from(ftmbModalClose).map(el => {
    el.onclick = function(e) {
      e.stopPropagation();
      const { target, currentTarget } = e;
      const id = currentTarget.dataset.modalClose;
  
      document.getElementById(id).classList.remove("visible");
    }
  })

  mobileMenu.onclick = function(e) {
    openMobileMenu(e);
  }

  function openMenu(e) {
    internetBankingWrapper.classList.remove("visible");
    searchWrapper.classList.remove("visible");

    const index = e.target.dataset.menuIndex;
    const prevMenuContent = document.querySelector(`[data-menu-content-index="${currentLinkIndex}"]`);
    const currMenuContent = document.querySelector(`[data-menu-content-index="${index}"]`);

    if (isMenuOpen) {
      if (index === currentLinkIndex) {
        isMenuOpen = false;
        currMenuContent.classList.remove("selected");
        menuWrapper.classList.remove("visible");
        return;
      }

      prevMenuContent.classList.remove("selected");
      currMenuContent.classList.add("selected");
      currentLinkIndex = index;
      return;
    }

    currentLinkIndex = index;
    isMenuOpen = true;
    currMenuContent.classList.add("selected");
    menuWrapper.classList.add("visible");
    return;
  }

  function openMobileMenu() {
    menuWrapper.classList.toggle("visible");
  }
})($)
