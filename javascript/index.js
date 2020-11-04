window.onload = function () {
  const topBar = document.getElementById("top-strip-container");
  const menuLinks = document.getElementsByClassName('menu-link');
  const menuWrapper = document.getElementById("menu-wrapper");
  const mobileMenu = document.getElementById("mobile-menu-button");
  const menuCloseButtons = document.getElementsByClassName("menu-close-button");
  const mobileMenuLinks = document.getElementsByClassName("mobile-menu-header");
  const BANNER_ITEMS = 4;
  let currentLinkIndex = 0;
  let currentBannerIndex = 0;
  let previousBannerIndex = 0;
  let isMenuOpen = false;
  let currentInternetBankingTab = 0;

  const bannerControls = document.getElementsByClassName("slide-dot");
  const bannerSection = document.getElementById("banner-section");
  
  const searchButton = document.getElementById("search-button");
  const searchClose = document.getElementById("search-close");
  const searchWrapper = document.getElementById("search-wrapper");
  
  const internetBankingButton = document.getElementById("internet-banking-button");
  const internetBankingClose = document.getElementById("internet-banking-close");
  const internetBankingWrapper = document.getElementById("internet-banking-wrapper");
  const internetBankingModalButtons = document.getElementsByClassName("internet-banking-modal-button")
  
  const loanCalculatorCloseButton = document.getElementById("loan-calculator-close");
  const loanCalculatorModal = document.getElementById("loan-calculator-modal");
  const calculateLoan = document.getElementById("loan-calculate-button");
  const resetLoan = document.getElementById("loan-reset-button");

  const faqSearchModal = document.getElementById("faq-search-modal");
  const faqSearchButton = document.getElementById("faq-search-button");
  const faqSearchClose = document.getElementById("faq-search-close");

  const accordionTitles = document.querySelectorAll("[data-accordion-title]");

  /* menu related things */
  Array.from(menuLinks).forEach(link => {
    link.onclick = function(e) {
      openMenu(e);
    }
  });

  Array.from(menuCloseButtons).forEach(closeButton => {
    closeButton.onclick = function(e) {
      const currMenuContent = document.querySelector(`[data-menu-content-index="${currentLinkIndex}"]`);

      isMenuOpen = false;
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
  
  Array.from(accordionTitles).forEach(title => {
    title.onclick = function({ target }) {
      const index = target.dataset.accordionTitle;
      console.log(index)
      document.querySelector(`[data-accordion-content="${index}"]`).classList.toggle("visible");
    }
  });
  mobileMenu.onclick = function(e) {
    openMobileMenu();
  }

  searchClose.onclick = function() {
    searchWrapper.classList.remove("visible");
  }

  loanCalculatorCloseButton.onclick = function() {
    loanCalculatorModal.classList.remove("visible");
  }

  calculateLoan.onclick = function() {
    loanCalculatorModal.classList.add("visible");
  }

  faqSearchButton.onclick = function() {
    faqSearchModal.classList.add("visible");
  }

  faqSearchClose.onclick = function() {
    faqSearchModal.classList.remove("visible");
  }

  resetLoan.onclick = function() {

  }

  internetBankingClose.onclick = function() {
    internetBankingWrapper.classList.remove("visible");
  }

  internetBankingButton.onclick = function() {
    isMenuOpen = false;
    menuWrapper.classList.remove("visible");
    internetBankingWrapper.classList.toggle("visible");
    searchWrapper.classList.remove("visible");
  }

  searchButton.onclick = function() {
    isMenuOpen = false;
    menuWrapper.classList.remove("visible");
    internetBankingWrapper.classList.remove("visible");
    searchWrapper.classList.toggle("visible");
  }

  document.onscroll = function() {
    const { y } = bannerSection.getBoundingClientRect();

    if(y < 0) {
      topBar.classList.remove("transparent");
    } else {
      !isMenuOpen && topBar.classList.add("transparent");
    }
    // addAnimation();
  }

  // animate__animated animate__bounce
  /* banner related things */
  Array.from(bannerControls).forEach(indicator => {
    indicator.onclick = changeBannerIndicator;
  });

  setInterval(() => {
    previousBannerIndex = currentBannerIndex;
    currentBannerIndex = currentBannerIndex === BANNER_ITEMS-1 ? 0 : ++currentBannerIndex;
    const currentTextContainer = document.querySelector(`[data-slide='${currentBannerIndex}'] .banner-slide-description-container`);

    addAnimation(currentTextContainer);  
    updateBanner(currentBannerIndex);
  }, 8000);

  /* functionsssssssss */
  function openMobileMenu() {
    menuWrapper.classList.toggle("visible");
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
        topBar.classList.add("transparent")
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
    topBar.classList.remove("transparent")
    menuWrapper.classList.add("visible");
    return;
  }

  function changeBannerIndicator(event) {
    const element = event.target;
    const position = element.dataset.slideControlIndex;
    previousBannerIndex = currentBannerIndex;
    currentBannerIndex = position;
    updateBanner(currentBannerIndex);
  }
  
  function updateBanner(index) {
    const bannerSlides = document.getElementById("banner-slides");
    
    bannerSlides.scrollLeft = index * window.innerWidth;
    updateControls();
  }
  
  function updateControls() {
    document.querySelector(`[data-slide-control-index="${previousBannerIndex}"]`).classList.remove('selected');
    document.querySelector(`[data-slide-control-index="${currentBannerIndex}"]`).classList.add('selected');
  }

  function addAnimation(element) {
    element.classList.add("animate__animated");
    element.classList.add("animate__fadeIn");
    
    setTimeout(() => {
      element.classList.remove("animate__animated");
      element.classList.remove("animate__fadeIn");
    }, 3000);
  }

  // takes jQuery(element) a.k.a. $('element')
  function onScreen(element) {
    // window bottom edge
    var windowBottomEdge = $(window).scrollTop() + $(window).height();

    // element top edge
    var elementTopEdge = element.offset().top;
    var offset = 100;

    // if element is between window's top and bottom edges
    return elementTopEdge + offset <= windowBottomEdge;
  }
}


