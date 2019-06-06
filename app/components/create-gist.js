import Component from '@glimmer/component';

// Native class + Decorators
export default class CreateGistComponent extends Component {

  constructor() {
    super(...arguments);
    window.log("Create gist component loaded");
  }

  willDestroy() {

  }

}
