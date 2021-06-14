const scrollToElement = (selector) => {
    const target = document.querySelector(selector);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
};
