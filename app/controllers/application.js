import Controller from '@ember/controller';

export default class ApplicationController extends Controller {

  constructor() {
    super(...arguments);
    log("Application controller - loaded");
  }


}
