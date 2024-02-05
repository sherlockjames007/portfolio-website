'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class ProjectCategory extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			ProjectCategory.hasMany(models.Project);
		}
	}
	ProjectCategory.init({
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		value: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING(1000),
		}	
	}, {
		sequelize,
		freezeTableName: true,
	});
	return ProjectCategory;
};