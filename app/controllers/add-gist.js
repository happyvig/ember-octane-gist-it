import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

// Controller - to hold the temporary state, singleton, connected to route to send data tp template

// Native class + Decorators
export default class AddGistController extends Controller {
  @service gistsInfo;

  constructor() {
    super(...arguments);
    window.log("AddGist controller - loaded");
  }

  @action addFile(body, description, fileName) {
    if(body && description && fileName) {
      let language = fileName.indexOf(".") > -1 ? fileName.split(".").pop() : "";
      this.gistsInfo.addGist({ body, description, fileName, language });
      this.transitionToRoute("index");
    }
  }
}
