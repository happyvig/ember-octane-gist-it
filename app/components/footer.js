import Component from '@glimmer/component';

// Native class
export default class FooterComponent extends Component {

  constructor() {
    super(...arguments);
    log("Footer component - loaded");
  }

  willDestroy() {

  }
}
