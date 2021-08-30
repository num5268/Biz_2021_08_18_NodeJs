module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define(
      "tbl_product",
      {
        p_code : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        p_name :{

        },
        p_price :{

        },
        p_rem :{

        },

      // createAt, updateAt 만들지 않기
      { timestamps: false }
    );
  
    // bbs(tbl_bbs table)과 tbl_replay 를 1:N 관계로 설정하기
    // 이때 tbl_bbs.b_id 칼럼과 tbl_replay.r_postId 칼럼을
    // 연관지어 FK 설정하라
    bbs.associate = (models) => {
      bbs.hasMany(models.tbl_reply, { foreignKey: "r_postId" });
    };
    return bbs;
  };
  