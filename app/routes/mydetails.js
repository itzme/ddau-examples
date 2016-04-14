import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return {
			firstName : 'John',
			lastName : 'Doe',
			email : 'johnd@example.com',
			address : {
				street : '406 Goldner View',
				city : 'Newtown',
				code : '123-567'
			}
		};
	},

	actions : {
		changeName() {
			this.controller.set('model.firstName', 'James');
		}
	}
});
