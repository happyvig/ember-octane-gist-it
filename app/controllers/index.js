import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

// Native class + Decorators
export default class IndexController extends Controller {

  @service gistsInfo;
  @tracked welcomeMessageSeen = false;

  constructor() {
    super(...arguments);
    log("Index controller - loaded")
  }

  @action initer() {
    this.gistsInfo.getAllGists();
  }

  @action removeFile(fileName) {
    this.gistsInfo.removeGist({ fileName });
  }

  @action toggleWelcomeMessage(){
    this.welcomeMessageSeen = !this.welcomeMessageSeen;
  }
}

// CLASSIC STYLE

// export default Controller.extend({
//   gistsInfo: service('gists-info'),

//   init() {
//     this._super(...arguments);
//     this.gistsInfo.getAllGists();
//   },

//   actions: {
//     removeFile(fileName) {
//       this.gistsInfo.removeGist({ fileName });
//     }
//   }
// });
