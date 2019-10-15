export class Article {
  author:String  
  title:String
  date:Date
  summary:String

  constructor(author:String, title:String, date:Date, summary:String) {
    this.author = author;
    this.title = title;
    this.date = date;
    this.summary = summary;
  }
}
