function speak(book) {
    console.log("title: " + book.title + "/n " + "author: " + book.author +
        "/n " + "published: " + book.published + "/n " + "pages: " + book.pages + ".");
}
var d = new Date();
// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var firstbook = {
    title: "ice cream",
    author: "hamza",
    published: d,
    pages: 230
};
speak(firstbook);
//# sourceMappingURL=IBooks.js.map