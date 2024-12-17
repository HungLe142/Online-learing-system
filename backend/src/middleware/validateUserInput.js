const validateUserInput = (req, res, next) => {
  const { username, email, password, userMail, phoneNumber } = req.body;

  // Kiểm tra userMail nếu có
  if (userMail) {
      const userMailRegex = /^[a-zA-Z0-9._%+-]+@hcmut\.edu\.vn$/;
      if (!userMailRegex.test(userMail)) {
          return res.status(400).json({ message: 'userMail must have the domain @hcmut.edu.vn.' });
      }
  }

  // Kiểm tra email nếu có
  if (email) {
      // Kiểm tra định dạng email hợp lệ
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!emailRegex.test(email)) {
          return res.status(400).json({ message: 'Invalid email format.' });
      }
  }

  // Kiểm tra mật khẩu nếu có
  if (password) {
      // Kiểm tra độ dài của mật khẩu (ít nhất 6 ký tự)
      if (password.length < 6) {
          return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
      }
  }

  // Kiểm tra phoneNumber nếu có
  if (phoneNumber) {
      const phoneNumberRegex = /^0\d{9}$/;
      if (!phoneNumberRegex.test(phoneNumber)) {
          return res.status(400).json({ message: 'phoneNumber must be a valid 10-digit number starting with 0.' });
      }
  }

  // Nếu tất cả hợp lệ, tiếp tục xử lý
  next();
};


  const validateRequiredFields = (requiredFields) => {
    return (req, res, next) => {
      for (let field of requiredFields) {
        if (!req.body[field]) {
          return res.status(400).json({ message: `${field} is required.` });
        }
      }
    
      next();
    };
  };