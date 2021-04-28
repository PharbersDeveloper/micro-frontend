import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
// import HelloWorld from './components/HelloWorld';
import sassTest from './components/sassTest';

const CustomElement = wrap(Vue, sassTest);

window.customElements.define('vue-example-component', CustomElement);
