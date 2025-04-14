
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn submit mặc định

  // Lấy giá trị từ form và loại bỏ khoảng trắng ở đầu/cuối
  const fullname = document.getElementById('fullname').value.trim();
  const firstname = document.getElementById('firstname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const terms = document.getElementById('terms').checked;

  // Các thẻ hiển thị lỗi và thông báo thành công
  const fullnameError = document.getElementById('fullnameError');
  const firstnameError = document.getElementById('firstnameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const confirmError = document.getElementById('confirmError');
  const termsError = document.getElementById('termsError');
  const successMessage = document.getElementById('successMessage');

  // Xóa nội dung lỗi cũ
  fullnameError.textContent = '';
  firstnameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmError.textContent = '';
  termsError.textContent = '';
  successMessage.textContent = '';

  // Biến kiểm tra hợp lệ
  let isValid = true;

  // Kiểm tra các trường
  if (!fullname) {
    fullnameError.textContent = 'Họ và tên đệm không được để trống.';
    isValid = false;
  }
  if (!firstname) {
    firstnameError.textContent = 'Tên không được để trống.';
    isValid = false;
  }
  if (!email) {
    emailError.textContent = 'Email không được để trống.';
    isValid = false;
  } else {
    // Regex kiểm tra định dạng email đơn giản
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Email phải đúng định dạng.';
      isValid = false;
    }
  }
  if (!password) {
    passwordError.textContent = 'Mật khẩu không được để trống.';
    isValid = false;
  } else if (password.length < 8) {
    passwordError.textContent = 'Mật khẩu tối thiểu 8 ký tự.';
    isValid = false;
  }
  if (!confirmPassword) {
    confirmError.textContent = 'Xác nhận mật khẩu không được để trống.';
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmError.textContent = 'Mật khẩu xác nhận không trùng khớp.';
    isValid = false;
  }
  if (!terms) {
    termsError.textContent = 'Bạn phải đồng ý với chính sách và điều khoản.';
    isValid = false;
  }
  // Nếu mọi trường hợp lệ, hiển thị thông báo thành công và chuyển hướng
  if (isValid) {
    let contact = JSON.parse(localStorage.getItem('contact')) || [];




    // Đây là phần lưu thông tin người dùng (gồm mật khẩu)
    const userInfo = {
      fullname: fullname,
      firstname: firstname,
      email: email,
      password: password,
      // Lưu ý: mật khẩu không nên lưu trên localStorage để đảm bảo bảo mật
      timestamp: new Date().toISOString()
    };
    contact.push(userInfo);

    // Lưu đối tượng userInfo dưới dạng JSON string vào localStorage
    localStorage.setItem('contact', JSON.stringify(contact));





    // Hiển thị thông báo thành công
    successMessage.textContent = 'Đăng ký thành công! Đang chuyển hướng...';
    // Giả lập chuyển hướng sau 2 giây
    setTimeout(() => {
      window.location.href = '../pages/login.html';
    }, 2000);
  }
});