module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        // FUNDERA OM VI VILL HA VALIDATOR
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING(255),
      },
    },
    { underscored: true }
  );
};
