const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(items => {
  items.addEventListener("click", event => {

    items.classList.toggle("active");
    
    const accordionItemBody = items.nextElementSibling;
    
    if(items.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});