import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ProfileComponent extends Component {

  @tracked _name = '';

  get name() {
    return  (this._name || '').split(' ').join('-');
  }
  set name(value) {
    this._name = value;
  }
}
