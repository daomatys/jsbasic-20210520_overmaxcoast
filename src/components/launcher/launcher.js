import Carousel from '@components/carousel/carousel.js';
import slides from '@components/carousel/__slides/carousel__slides.js';

import RibbonMenu from '@components/ribbon-menu/ribbon-menu.js';
import categories from '@components/ribbon-menu/__categories/ribbon-menu__categories.js';

import ProductsGrid from '@components/products-grid/products-grid.js';
import productsArray from '@components/products-grid/products-grid.json' assert { type: "json" };

import StepSlider from '@components/step-slider/step-slider.js';
import CartIcon from '@components/cart-icon/cart-icon.js';
import Cart from '@components/cart/cart.js';


export default class Launcher {

  constructor() {
    this.blockCarousel = new Carousel( slides );
    this.blockRibbon = new RibbonMenu( categories );
    this.blockSlider = new StepSlider({ steps: 5, value: 3 });
    this.blockCartIcon = new CartIcon();
    this.blockCart = new Cart( this.blockCartIcon );
    this.productsArray = productsArray;
  }

  async render() {
    const incrust = ( block, suffix ) => document
      .querySelector(`[data-${ suffix }-holder]`)
      .append( block.elem );

    incrust( this.blockCarousel, 'carousel' );
    incrust( this.blockRibbon, 'ribbon' );
    incrust( this.blockSlider, 'slider' );
    incrust( this.blockCartIcon, 'cart-icon' );
    
    this.initProductsGrid();
    
    document.querySelector('.products-grid').remove();
    incrust( this.blockGrid, 'products-grid' );
    
    this.initFilterDefaults();
    this.initEventListeners();
  }
  
  async initProductsGrid() {
    this.blockGrid = new ProductsGrid( this.productsArray );
  }
  
  initFilterDefaults() {
    this.blockGrid.updateFilter({
      
      noNuts: document.getElementById('nuts-checkbox').checked,
      vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
      
      maxSpiciness: this.blockSlider.value,
      category: this.blockRibbon.value
    });
  }
  
  initEventListeners() {
    
    document
      .body
      .addEventListener(
        'product-add', 
        ({ detail: id }) => {
          const product = this.productsArray.find( item => item.id == id );
          this.blockCart.addProduct( product );
        }
      );
    
    document
      .querySelector('#nuts-checkbox')
      .addEventListener(
        'change',
        ({ target }) => this.blockGrid.updateFilter({ noNuts: target.checked })
      );
    
    document
      .querySelector('#vegeterian-checkbox')
      .addEventListener(
        'change',
        ({ target }) => this.blockGrid.updateFilter({ vegeterianOnly: target.checked })
      );
    
    this.blockSlider
      .elem
      .addEventListener(
        'slider-change',
        ({ detail: value }) => this.blockGrid.updateFilter({ maxSpiciness: value })
      );
    
    this.blockRibbon
      .elem
      .addEventListener(
        'ribbon-select',
        ({ detail: id }) => this.blockGrid.updateFilter({ category: id })
      );
  }
}
