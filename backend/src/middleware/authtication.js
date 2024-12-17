import jwt from 'jsonwebtoken';
const SECRET_KEY = 'your_secret_key';

// Middleware kiểm tra token
export const authenticateToken = (req, res, next) => {
  const publicRoutes = ['/user/login', '/admin/login']; // Danh sách route không yêu cầu xác thực
  if (publicRoutes.includes(req.path)) {
    return next(); // Bỏ qua xác thực cho các route này
  }

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer token

  if (!token) return res.status(401).json({ message: 'Token not found' });
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid or expired token' });
    req.user = user; 
    next();
  });
};

export const authorizeRole = (requiredRoles) => {
  return (req, res, next) => {
    const { role } = req.user; 

    if (!requiredRoles.includes(role)) {
      return res.status(403).json({ message: 'Access denied: insufficient permissions' });
    }
    next(); 
  };
};