import Route from '@ember/routing/route';
import { Promise }  from 'rsvp';

export default Route.extend({
  model() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
  }
});
