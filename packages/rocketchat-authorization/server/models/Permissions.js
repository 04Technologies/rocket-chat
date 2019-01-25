import { RocketChat } from 'meteor/rocketchat:lib';

class ModelPermissions extends RocketChat.models._Base {
	constructor(...args) {
		super(...args);
	}

	// FIND
	findByRole(role, options) {
		const query = {
			roles: role,
		};

		return this.find(query, options);
	}

	findOneById(_id) {
		return this.findOne(_id);
	}

	createOrUpdate(name, roles) {
		this.upsert({ _id: name }, { $set: { roles } });
	}

	addRole(permission, role) {
		this.update({ _id: permission }, { $addToSet: { roles: role } });
	}
	// Add Permissions
	addPermission(permission, role = '') {
		if (permission != null) {
			this.upsert({ _id: permission }, { $set: { roles: role } });
			return 'success: Added permission: ' + permission;
		} else {
			return "Error: can't insert null values.";
		}
	}
	removeRole(permission, role) {
		this.update({ _id: permission }, { $pull: { roles: role } });
	}
}

RocketChat.models.Permissions = new ModelPermissions('permissions');
