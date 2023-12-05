function makeBlogPost(file, blogTitle, blogDate, blogContent) {
    fetch(file)
    .then((res) => res.text())
    .then((text) => {
        var content = document.getElementById(blogContent);
        content.textContent = text.slice(8);
        var title = document.getElementById(blogTitle);
        title.textContent = file.toString().split("/")[1].split(".")[0];
        var date = document.getElementById(blogDate);
        date.textContent = text.slice(0, 8);
    })
    .catch((err) => console.log(err));
}

makeBlogPost("blogs/Adults are Aliens.txt", "blog1Title", "blog1Date", "blog1Content");
makeBlogPost("blogs/I'm Never Allowed Back Here.txt", "blog2Title", "blog2Date", "blog2Content");
makeBlogPost("blogs/My Exotic Vacation.txt", "blog3Title", "blog3Date", "blog3Content");
makeBlogPost("blogs/My Normal Christmas.txt", "blog4Title", "blog4Date", "blog4Content");
makeBlogPost("blogs/No One Believes Me.txt", "blog5Title", "blog5Date", "blog5Content");

