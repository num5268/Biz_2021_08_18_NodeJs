/**
 * MySQL table 구조체 파일
 * 이 파일은 models/index.js가 실행되면서ㅏ
 * 자동으로 scan되고, 설정된 코드에 따라
 *
 */
module.exports = (sequelize, DataTypes) => {
  const bbs = sequelize.define("tbl_bbs", {
    b_id: {
      type: DataTypes.INTEGER,
      // 자동 증가값 칼럼으로 설정하기
      autoIncrement: true,
      // 기본키 칼럼으로 설정하기
      primaryKey: true,
    },
    b_date: {
      type: DataTypes.STRING(10),
      // Null값 금지
      allowNull: false,
    },
    b_time: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    b_writer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b_subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // BLOB : text보다 겁나게 큰 칼럼
    b_text: {
      type: DataTypes.BLOB,
    },
    b_count: {
      type: DataTypes.INTEGER,
    },
  });
  return bbs;
};
