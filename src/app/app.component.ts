import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDCb5UTMFjb_wnNvqMS8OkrL-28hiQt5ls",
      authDomain: "blog-ff07c.firebaseapp.com",
      databaseURL: "https://blog-ff07c-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "blog-ff07c",
      storageBucket: "blog-ff07c.appspot.com",
      messagingSenderId: "332295536246",
      appId: "1:332295536246:web:f52b28fda81beb0c30a957",
      measurementId: "G-XPSE4B0QS3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
