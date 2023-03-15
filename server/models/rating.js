module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'rating',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rating: {
        //Fundera på validator 1-10
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    { underscored: true }
  );
};
