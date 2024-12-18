import {createStore as _createStore} from 'vuex';

const images = import.meta.glob('@/assets/images/gallery/*.jpg');
const galleryImages = Object.keys(images);

export function createStore(){
  return _createStore({

    state: {
      gallery: galleryImages
    },

    mutations: {

    },

    strict: true
  })
}
