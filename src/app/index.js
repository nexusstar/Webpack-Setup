// src/app/index.js

// using babel-loader
class TestClass {
  constructor() {
    let msg = "Using ES2015+ syntax";
    console.log(msg);
  }
}

let test = new TestClass();

// using raw-loader
import angular from 'angular';
import template from './index.tpl.html';

let component = {
  template
}

let app = angular.module('app', [])
  .component('app', component)

// using style-loader
import '../style/app.scss';
