const snapSections = document.querySelectorAll('.snap');

const appearOptions = {
  rootMargin: "0px",
  threshold: .75
};

const appearOnScroll = new IntersectionObserver(
    (entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove('active');
        }
        else {
            entry.target.classList.add('active');
        }
    });
},
appearOptions);

snapSections.forEach(section => {
    appearOnScroll.observe(section);
});