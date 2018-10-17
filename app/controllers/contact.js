import Controller from '@ember/controller';

export default Controller.extend({

  queryParams: ['qp'],

  qp: '',

  actions: {
    setQp() {
      this.set('qp', 'contact');
    }
  }
});
