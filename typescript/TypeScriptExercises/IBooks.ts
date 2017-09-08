// Here we define our IBood interface, its properties, and their types.
interface IBook {
    title: string;
    author: string;
    published: Date;
    pages: number;
}

function speak(book: IBook): void{
    console.log("title: " + book.title + "/n " + "author: " + book.author + 
     "/n " + "published: " + book.published + "/n " + "pages: " + book.pages + ".");
  }
  var d = new Date();
  // We define an object that has all of the properties the Food interface expects.
  // Notice that types will be inferred automatically.
  var firstbook = {
    title: "ice cream", 
    author: "hamza",
    published : d,
    pages: 230 
  }
  
  speak(firstbook);

