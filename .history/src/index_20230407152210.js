import _ from 'lodash';
import './style.css';
import Icon from './github-mark.png';
import Data from '.data.xml';
import Notes from './data.csv';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], '-');
   element.classList.add('hello');

   const myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);


    console.log(Data);
    console.log(Notes);
    
   return element;
 }

 document.body.appendChild(component());