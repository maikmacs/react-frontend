import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAh6T9mcsCf-hwDY3ddEnzcrMAH-8p8oKE',
  authDomain: 'airbnb-a92b8.firebaseapp.com',
  databaseURL: 'https://airbnb-a92b8.firebaseio.com',
  projectId: 'airbnb-a92b8',
  storageBucket: 'airbnb-a92b8.appspot.com',
  messagingSenderId: '333142464171'
};

export default firebase.initializeApp(config);
