import Component from '@glimmer/component';

// Native class
export default class FooterComponent extends Component {

  constructor() {
    super(...arguments);
    window.log("Footer component - loaded");
  }

  willDestroy() {

  }
}
