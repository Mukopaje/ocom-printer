import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Printer, PrintOptions } from '@ionic-native/printer';
declare var cordova: any;

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private printer: Printer, private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  pick() {
    this.printer.pick().then((res)=>{
      console.log(JSON.stringify(res));
    }).catch((err) =>{
      console.log(JSON.stringify(err));
    })
  }

  print() {
    let content = `<html>
    <body>
    <h1>Hello Printer</h1>
    <p>The printer is able to print just fine!!</p>
    </body>
    </html>`;
    this.printer.print(content).then((res)=>{
      console.log(JSON.stringify(res));
    }).catch((err) =>{
      console.log(JSON.stringify(err));
    })
  }

  myToast() {
    this.platform.ready().then(() => {
     // var androidToast = new MyToast();
      cordova.plugins.AndroidToast.androidToast(
          'This is some nice toast popup!',
          function(msg) {
              console.log(msg);
          },
          function(err) {
              console.log(err);
          }
      );
  });
  }

  helloWorld() {
    let success = function(result) {
      alert(JSON.stringify(result, undefined, 2));
    }
    let failure = function(result) {
      alert(JSON.stringify(result, undefined, 2));
    }
    cordova.plugins.AndroidToast.coolMethod({
      _sMessage: "Hello World"
    }, success, failure);
  }

  testHelloOcom() {
    let success = function(result) {
      alert(JSON.stringify(result, undefined, 2));
    }
    let failure = function(result) {
      alert(JSON.stringify(result, undefined, 2));
    }
    cordova.plugins.OcomBtPrint.coolMethod({
      _sMessage: "Hello World"
    }, success, failure);
  }

  testOcomBtPrint() {
    this.platform.ready().then(() => {
     // var androidToast = new MyToast();
      cordova.plugins.OcomBtPrint.bTPrintTest(
          'This is a Test Print on BT',
          function(msg) {
              console.log(msg);
          },
          function(err) {
              console.log(err);
          }
      );
  });
  }

}
