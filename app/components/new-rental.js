import Ember from 'ember';

export default Ember.Component.extend ({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set("addNewRental", true);
    },
    save1() {
      var params = {
        owner: this.get("owner"),
        type: this.get("type"),
        city: this.get("city"),
        bedrooms: this.get("bedrooms"),
        image: this.get("image")
      };
      this.set("addNewRental", false);
      this.sendAction("save2", params);
    }
  }
});
