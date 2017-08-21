
NightLight Calendar
================

An visually enhanced bootstrap calendar

### Notice
Package under construction, DOESN'T WORK.

Live example coming soon

This calendar is intended to be used with angularjs 1.x

Pure javascript implementation comming soon

### Installation and usage
#### Download
Using good ol' npm

`npm install --save nightlight-calendar angular-ui-bootstrap`

Or <a href="https://github.com/HugoCapitan/NightLight/archive/master.zip">download</a>, unzip and place it in your project folder

#### Install
Add the styles and js files to your html

`<link rel="stylesheet" href="[path_to_nightlight]/dist/nightlight.css">`

Add the templates and calendar scripts in your html

    <script src="../dist/nightlight-tpls.js"></script>
    <script src="../dist/nightlight.js"></script>
   
And inject the dependency to your app module

`angular.module('myApp', ['NightLight']);`

#### Use
There are two different ways of using the calendar, depending on the way you like the month selection to be

For a single calendar view:

`<nl-calendar></nl-calendar>`

For side to side calendars

 `<nl-fancy-calendar></nl-fancy-calendar>`

#### Dependencies
https://www.npmjs.com/package/angular-ui-bootstrap

### Todos
- Testing suite
- Finish normal calendar
- Add fancy calendar


