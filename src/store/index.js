import {createStore as _createStore} from 'vuex';

// import image1 from '@/assets/images/gallery/poster.jpg';
// import image2 from '@/assets/images/gallery/THANK-YOU.jpg';

export function createStore(){
  return _createStore({

    state: {
      images: [
        'https://picsum.photos/id/18/900/500',
        'https://picsum.photos/id/19/900/500',
        'https://picsum.photos/id/20/900/500',
        'https://picsum.photos/id/21/900/500',
        'https://picsum.photos/id/22/900/500',
        'https://picsum.photos/id/23/900/500'
      ]
    },

    mutations: {

    },

    strict: true
  })
}
