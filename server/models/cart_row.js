module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'cart_row',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      }, // Hur räknas amount ut?
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { underscored: true }
  );
};
