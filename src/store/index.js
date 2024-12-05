import {createStore as _createStore} from 'vuex';

export function createStore(){
  return _createStore({

    state: {
      images: [
        'THANK-YOU.jpg',
        'poster.jpg'
      ]
    },

    mutations: {

    },

    strict: true
  })
}
