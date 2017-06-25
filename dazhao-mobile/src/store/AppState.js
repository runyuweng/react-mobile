import { observable } from 'mobx';

class AppState {
  @observable bottomState = false;
  @observable messageContent = '';

  changeBottomState = (value) => {
    this.bottomState = value;
  }

  changeMessageContent = (value) => {
    this.messageContent = value;
  }
}

export default AppState;
