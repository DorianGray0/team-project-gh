function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    } else {
        change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0.3] };
let observer = new IntersectionObserver(onEntry, options);
let title = document.querySelectorAll('.hero-title');
let text = document.querySelectorAll('.hero-text');
let headingitworks = document.querySelectorAll('.heading-it-works');
let textitworks = document.querySelectorAll('.it-work-text');
let proposetext = document.querySelectorAll('.propose-text');
let vegetablestitle = document.querySelectorAll('.vegetables-title');
let vegetablestext = document.querySelectorAll('.vegetables-text');
let reviewslogo = document.querySelectorAll('.reviews-logo');
let reviewstext = document.querySelectorAll('.reviews-text');
let ordertitle = document.querySelectorAll('.order-title');
let ordertext = document.querySelectorAll('.order-text');
let vegetablesitem = document.querySelectorAll('.vegetables-item');
for (let elm of title) {
  observer.observe(elm);
}
for (let elm of text) {
  observer.observe(elm);
}
for (let elm of headingitworks) {
  observer.observe(elm);
}
for (let elm of textitworks) {
  observer.observe(elm);
}
for (let elm of proposetext) {
  observer.observe(elm);
}
for (let elm of vegetablestitle) {
  observer.observe(elm);
}
for (let elm of vegetablestext) {
  observer.observe(elm);
}
for (let elm of reviewslogo) {
  observer.observe(elm);
}
for (let elm of reviewstext) {
  observer.observe(elm);
}
for (let elm of ordertitle) {
  observer.observe(elm);
}
for (let elm of ordertext) {
  observer.observe(elm);
}
for (let elm of vegetablesitem) {
  observer.observe(elm);
}
