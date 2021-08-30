const express = require("express");
const router = express.Router();

router.get("/my", (req, res) => {
  const html = "<div>Korea</div>";

  res.render("home", { nation: "대한민국", html });
});

router.get("/add", (req, res) => {
  const num1 = req.query.num1;
  const num2 = req.query.num2;

  const sum = parseInt(num1) + parseInt(num2);

  const result = {
    num1,
    num2,
    sum,
  };
  res.json(result);
});

router.get("/add", (req, res) => {
  res.render("input");
});

router.post("/input", (req, res) => {
  const 이름 = req.body.name;
  const 전화번호 = req.body.tel;
  const 나이 = req.body.age;

  res.json({ name, tel, age });
});

module.exports = router;
