import Component from '@glimmer/component';
import { action } from '@ember/object';

// Native class + Decorators
export default class CreateGistComponent extends Component {

  constructor() {
    super(...arguments);
    log("Create gist component loaded");
  }

  @action editorReady() {
  }

  willDestroy() {

  }

}
