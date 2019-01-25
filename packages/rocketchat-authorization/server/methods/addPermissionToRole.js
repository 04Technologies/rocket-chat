import { Meteor } from 'meteor/meteor';
import { RocketChat } from 'meteor/rocketchat:lib';


Meteor.methods({
	'authorization:addPermissionToRole'(permission, role) {
		if (!Meteor.userId() || !RocketChat.authz.hasPermission(Meteor.userId(), 'access-permissions')) {
			throw new Meteor.Error('error-action-not-allowed', 'Adding permission is not allowed', {
				method: 'authorization:addPermissionToRole',
				action: 'Adding_permission',
			});
		}

		return RocketChat.models.Permissions.addRole(permission, role);
	},
	'addSystemRole'(role, desc, scope) {
		const someValue = RocketChat.models.Roles.addSystemRole(role, desc, scope);
		return 'result = '+ someValue;
	},
	'addPermission'(permission, roles) {
		const someValue = RocketChat.models.Permissions.addPermission(permission, roles);
		return 'result = '+ someValue;
	},
});