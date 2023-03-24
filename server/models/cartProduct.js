module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'cartProduct',
    {
      amount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    },
    { underscored: true }
  );
};
