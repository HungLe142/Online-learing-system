const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "Vui lòng đăng nhập." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token không hợp lệ." });
    }
    req.user = user; 
    next();
  });
};

exports.checkAdmin = (req, res, next) => {
  if (req.user.quyen !== "admin") {
    return res.status(403).json({ error: "Bạn không có quyền truy cập." });
  }
  next();
};
