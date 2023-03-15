module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'cart_row',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      }, // Hur räknas amount ut?
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { underscored: true }
  );
};
