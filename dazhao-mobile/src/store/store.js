import {observable, autorun} from 'mobx';

class Store {
  @observable showBottom = false;

  changeBottom(value) {
    this.showBottom = value;
  }
}

export default Store;
