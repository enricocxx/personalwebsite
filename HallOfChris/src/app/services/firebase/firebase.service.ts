import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private afs: AngularFirestore) { }

  createBlogPost(value: any) {
    return this.afs.collection('blog_post').add({
      title: value.title,
      content: value.content,
      date: value.date,
      author: value.author
    });
  }

  readBlogPosts() {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('blog_post').get()
      .subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

  updateBlogPost(key, value){
    // value.nameToSearch = value.name.toLowerCase();
    return this.afs.collection('blog_post').doc(key).set(value);
  }

  deleteBlogPost(key){
    return this.afs.collection('blog_post').doc(key).delete();
  }

}
