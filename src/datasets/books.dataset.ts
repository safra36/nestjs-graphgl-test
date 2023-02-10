import { Injectable, NotAcceptableException } from "@nestjs/common";
import { Author } from "src/models/author.model";
import { Book } from "src/models/books.model";




@Injectable()
export class BooksDataSet {


    private books: Book[] = [];

    createBook(
        name: string,
        authors: Author[],
        serial: number
    ): Book {

        const currentBook = this.books.find((authorObject) => authorObject.name == name);

        if (currentBook) {
            throw new NotAcceptableException("Book already exists")
        } else {

            const book: Book = {
                authors,
                name,
                serial
            }

            this.books.push(book);

            return book;

        }

    }


    findBook(
        name: string
    ): Book {

        const book = this.books.find(bookObject => bookObject.name == name);
        if (book) return book;
        else throw new NotAcceptableException("Book not found")

    }

    deleteBook(
        name: string
    ): void {

        const book = this.findBook(name);
        const bookIndex = this.books.indexOf(book);
        this.books.splice(bookIndex, 1);

    }


    updateBook(
        name: string,
        authors: Author[],
        serial: number
    ): boolean {

        const book = this.findBook(name);
        book.authors = authors;
        book.serial = serial;
        return true;

    }


}