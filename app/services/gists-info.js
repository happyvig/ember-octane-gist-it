import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class GistsInfoService extends Service {

  @service localStore;
  @tracked gists = [];

  constructor() {
    super(...arguments);
    window.log("GistsInfo service - loaded");
  }

  get numberOfGists() {
    return this.gists.length;
  }

  getAllGists() {
    this.gists = this.localStore.getData() || [];
  }

  addGist(gist) {
    this.gists.unshift(gist);
    this.localStore.save(this.gists);
  }

  removeGist(gist) {
    this.gists = this.gists.filter((g) => g.fileName !== gist.fileName );
    this.localStore.save(this.gists);
  }

}
