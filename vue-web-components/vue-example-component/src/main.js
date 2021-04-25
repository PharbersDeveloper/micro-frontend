import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import HelloWorld from './components/HelloWorld';

const CustomElement = wrap(Vue, HelloWorld);

window.customElements.define('vue-example-component', CustomElement);
