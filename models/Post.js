module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'Post', {
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        }
    );

    Post.associate = (models) => {
        // relação N:1 (varios posts de 1 usuário só)
        Post.belongsTo(models.Usuario, { as: "usuario", foreignKey: "usuarios_id"})
        Post.hasMany(models.Comentario, { as: "comentarios", foreignKey: "posts_id"  })
        
        Post.belongsToMany(models.Usuario, {
            as: "curtiu",
            through: "curtidas",
            foreignKey: "posts_id",
            otherKey: "usuarios_id",
            timestamps: false
        })
    }

    return Post;
}
