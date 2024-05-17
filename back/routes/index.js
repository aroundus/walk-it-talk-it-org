const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  createToken,
  join,
  kakaoLogin,
  refreshToken,
} = require("../controllers/auth");

// POST /api/auth/join
router.post("/auth/join", join);

router.post("/auth/login", createToken);

router.get("/auth/kakao", passport.authenticate("kakao"));
router.get("/auth/kakao/callback", kakaoLogin);
router.post("/auth/refresh", refreshToken);

module.exports = router;
