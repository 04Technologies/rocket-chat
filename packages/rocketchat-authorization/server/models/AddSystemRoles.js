import { RocketChat } from 'meteor/rocketchat:lib';

class ModelAddSystemRoles extends RocketChat.models._Base {
	constructor(...args) {
		super(...args);
		this.tryEnsureIndex({ name: 1 });
		this.tryEnsureIndex({ scope: 1 });
	}
    createOrUpdate(newRole) {
		console.log(newRole);
		return newRole;
	}
	// findUsersInRole(name, scope, options) {
	// 	const role = this.findOne(name);
	// 	const roleScope = (role && role.scope) || 'Users';
	// 	const model = RocketChat.models[roleScope];

	// 	return model && model.findUsersInRoles && model.findUsersInRoles(name, scope, options);
	//
}
RocketChat.models.Roles = new ModelAddSystemRoles('roles');
