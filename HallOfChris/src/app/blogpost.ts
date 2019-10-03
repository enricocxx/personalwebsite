export class Blogpost {
    // use this to instantiate a blogpost entity from firestore
    constructor(dbEntry: any) {
        this.title = dbEntry.title;
        this.content = dbEntry.content;
        this.date = dbEntry.date;
        this.author = dbEntry.author;
    }

    title: string;
    content: any;
    date: any;
    author: string;
}
