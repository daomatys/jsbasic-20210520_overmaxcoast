import Main from './index.js';
import indexCss from './index.css' assert { type: 'css' };
import commonCss from '/assets/styles/common.css' assert { type: 'css' };

const main = new Main();

main.render().then( () => console.log('Страница готова!') );