class BookModel {
    id: number;
    title: string;
    author?: string;
    description?: string
    copies?: number;
    copiesAvailabale?: number;
    category?: string;
    img?: string;

    constructor(id: number, title: string, author: string,
        description: string,
        copies: number,
        copiesAvailabale: number,
        category: string,
        img: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.copies = copies;
        this.copiesAvailabale = copiesAvailabale;
        this.category = category;
        this.img = img;
    }
}

export default BookModel;   