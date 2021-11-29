import Main from './main.js';

(function () {
  const main = new Main();

  main.render().then( () => console.log('Страница готова!') );
})();
