import mongoose from "mongoose";
import {Book} from './models/bookModel.js'//double dot because we are in seeds directory and we have to back out to get to models directory

const titles = ["The Silent Patient", "The Great Gatsby", "To Kill a Mockingbird", "1984", "The Catcher in the Rye", "The Hobbit", "Pride and Prejudice", "The Alchemist", "Harry Potter and the Sorcerer's Stone", "Brave New World",
"The Book Thief", "The Girl with the Dragon Tattoo", "The Da Vinci Code", "Gone Girl", "The Kite Runner", "Lord of the Flies", "The Shining", "The Hunger Games", "The Road", "The Grapes of Wrath",
"Dune", "The Hitchhiker's Guide to the Galaxy", "A Song of Ice and Fire", "The Stand", "The Handmaid's Tale", "Sapiens: A Brief History of Humankind", "Thinking, Fast and Slow", "Educated", "The Outsiders", "The Goldfinch",
"Where the Crawdads Sing", "Becoming", "The Immortal Life of Henrietta Lacks", "The Martian", "Thinking, Fast and Slow", "Educated", "The Outsiders", "The Goldfinch", "Sapiens: A Brief History of Humankind", "Educated",
"The Book Thief", "The Girl with the Dragon Tattoo", "The Da Vinci Code", "Gone Girl", "The Kite Runner", "The Lovely Bones", "The Help", "The Girl on the Train", "The Fault in Our Stars", "The Road"]
const authors = ["Agatha Christie", "J.K. Rowling", "George Orwell", "Harper Lee", "F. Scott Fitzgerald", "J.R.R. Tolkien", "Paulo Coelho", "Jane Austen", "J.D. Salinger", "Aldous Huxley",
"Stephen King", "Dan Brown", "Khaled Hosseini", "William Golding", "J.D. Salinger", "Herman Melville", "Leo Tolstoy", "Mark Twain", "H.G. Wells", "Fyodor Dostoevsky",
"Ernest Hemingway", "Virginia Woolf", "Gabriel Garcia Marquez", "Toni Morrison", "J.R.R. Tolkien", "George R.R. Martin", "Philip K. Dick", "Kazuo Ishiguro", "John Steinbeck", "Neil Gaiman",
"Kurt Vonnegut", "Erich Maria Remarque", "F. Scott Fitzgerald", "J.K. Rowling", "Ray Bradbury", "Margaret Atwood", "Jane Austen", "T.S. Eliot", "Charles Dickens", "H.P. Lovecraft",
"Gabriel Garcia Marquez", "Toni Morrison", "J.R.R. Tolkien", "George R.R. Martin", "Philip K. Dick", "Kazuo Ishiguro", "John Steinbeck", "Neil Gaiman", "Kurt Vonnegut", "Erich Maria Remarque"]
const years = [2017, 1953, 1960, 1949, 1951, 1937, 2005, 1813, 1951, 1932,
    2010, 2003, 2009, 2012, 2005, 1954, 1974, 2011, 2004, 1936,
    2008, 2000, 2001, 1989, 2010, 2018, 1982, 2006, 1963, 1952,
    2003, 2009, 2012, 2005, 1954, 1974, 2011, 2004, 1936, 2008,
    2000, 2001, 1989, 2010, 2018, 1982, 2006, 1963, 1952, 2003]

import { mongoDBURL} from "./config.js";

mongoose.connect(mongoDBURL)   //27017 is the standard port number for mongoDB if db doesn't exist it is created
    .then(() => {
        console.log('Mongo connection open');
    })
    .catch(err => {
        console.log('Oh no, Mongo express error');
        console.log(err);
    })




const seedBooks = async () => {
    await Book.deleteMany({});
    for (let i = 0; i < 10; i++) {  
        const random = Math.floor(Math.random() * 50);
        const book = new Book({
            author:authors[random],
            title: titles[random],
            publishYear: years[random]
        });
        await book.save();
        console.log(`Book ${i+1} made, Id:  ${book._id}`);
    }
}

seedBooks();
console.log('Seeding completed');