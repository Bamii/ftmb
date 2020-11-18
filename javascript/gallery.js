(function($){
  const masterImage = document.getElementById("master-media-image");
  const mediaImages = document.getElementsByClassName("media-image");
  const thumbnails = document.getElementsByClassName("thumbnail-image");
  const paginations = document.getElementsByClassName("page");
  const mediaHeader = document.getElementById("media-header");
  const mediaSubtext = document.getElementById("media-subtext");
  const pagesContainer = document.getElementById("pages-container");
  const data = [
    { 
      header: " FirstTrust celebrates Customer Week in style",
      text: `
        At FirstTrust, we go beyond the regular delivery of mortgage and real estate
        financial services leveraging disruptive technology and our people.              
      `,
      images: [
        '/assets/Media_Images/1.jpg',
        '/assets/Media_Images/2.jpg',
        '/assets/Media_Images/3.jpg',
        '/assets/Media_Images/4.jpg',
        '/assets/Media_Images/5.jpg',
        '/assets/Media_Images/6.jpg',
      ]
    },
    { 
      header: " FirstTrust celebrates another Customer Week in style!!!",
      text: `
        At FirstTrust, we go beyond the regular delivery of mortgage and real estate
        financial services leveraging disruptive technology and our people.              
      `,
      images: [
        '/assets/Media_Images/1.jpg',
        '/assets/Media_Images/1.jpg',
        '/assets/Media_Images/1.jpg',
        '/assets/Media_Images/1.jpg',
        '/assets/Media_Images/1.jpg',
        '/assets/Media_Images/1.jpg',
      ]
    },
    { 
      header: " FirstTrust celebrates a third Customer Week in style!!!",
      text: `
        At FirstTrust, we go beyond the regular delivery of mortgage and real estate
        financial services leveraging disruptive technology and our people.              
      `,
      images: [
        '/assets/Media_Images/5.jpg',
        '/assets/Media_Images/6.jpg',
        '/assets/Media_Images/1.jpg',
        '/assets/Media_Images/2.jpg',
        '/assets/Media_Images/4.jpg',
        '/assets/Media_Images/3.jpg',
      ]
    },
  ];

  let currentPage = 0;

  // INIT!
  (function(){
    const { header, text, images } = data[0];
    
    // populate the pagination table
    data.forEach((media, index) =>{
      index = index;
      const el = document.createElement("div");

      index === 0 && el.classList.add("active");
      el.classList.add("page");
      el.dataset.pagination = index;
      el.textContent = index + 1;

      pagesContainer.append(el);
    });

    // replace Images.
    Array.from(mediaImages).forEach((image, index) => {
      image.style.backgroundImage = `url(${images[index]})`;
    })
    
    // replace text
    mediaHeader.textContent = header;
    mediaSubtext.textContent = text;
  })();

  // image viewing
  Array.from(thumbnails).forEach(thumbnail => {
    thumbnail.onclick = function() {
      const temp = thumbnail.style.backgroundImage;
      const masterTemp = masterImage.style.backgroundImage;

      masterImage.style.backgroundImage = temp;
      thumbnail.style.backgroundImage = masterTemp;
    }
  });

  // pagination.
  Array.from(paginations).forEach(page => {
    page.onclick = function({ target }) {
      const index =  target.dataset.pagination;
      const { header, text, images } = data[index];
      const prev = document.querySelector(`[data-pagination="${currentPage}"]`);
      
      // replace Images.
      Array.from(mediaImages).forEach((image, index) => {
        image.style.backgroundImage = `url(${images[index]})`;
      })
      
      // replace text
      mediaHeader.textContent = header;
      mediaSubtext.textContent = text;
      
      // update pagination.
      prev.classList.remove("active");
      target.classList.add("active");
      currentPage = index;
    }
  });
})($);