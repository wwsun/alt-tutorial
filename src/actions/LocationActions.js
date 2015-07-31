var alt = require('../alt');

class LocationActions {

  updateLocations(locations) {

    // you can use `this.dispatch` to dispatch your payload through
    // the Dispatcher and onto the store
    this.dispatch(locations);
  }

  fetchLocations() {
    this.dispatch();
  }

  locationsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  favoriteLocation(location) {
    this.dispatch(location);
  }
}

module.exports = alt.createActions(LocationActions);
