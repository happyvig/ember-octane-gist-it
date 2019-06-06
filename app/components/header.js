import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

// Native class
export default class HeaderComponent extends Component {
  @service localStore;
  @tracked isDarkModeOn;

  constructor() {
    super(...arguments);
    this.isDarkModeOn = this.localStore.getData('isDarkModeOn');

    // First visit or user preference set to Auto,
    // so switch mode based on OS setting, if supported,
    // else default to light mode.
    if(!this.isDarkModeOn) {
      this.isDarkModeOn = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    log(`Header component - loaded`);
  }

  get title() { return this.args.title || "Gist it!"; }

  get tagline() { return this.args.tagline || "Your personal snippet manager"; }

  @action loadMode() {
    // hack to trigger toggle event on load to change styles.!
    this.isDarkModeOn && document.getElementById("mode-toggle").dispatchEvent(new MouseEvent('click'));
  }

  @action toggleMode(e) {
    let checked = e.target.checked;
    let cl = e.currentTarget.classList;
    checked ? cl.add("dark-mode") : cl.remove("dark-mode");
    this.localStore.save(checked, 'isDarkModeOn');
  }

  willDestroy() {
    // cleanups before destroy
  }
}
