
// // Khi trang được tải, kiểm tra nếu có thông báo đăng xuất lưu từ dashboard
// document.addEventListener("DOMContentLoaded", function () {
//     const logoutMessageDiv = document.getElementById("logoutMessage");
//     const logoutMsg = localStorage.getItem("logoutMessage");
//     if (logoutMsg) {
//       logoutMessageDiv.textContent = logoutMsg;
//       // Xóa thông báo sau khi hiển thị
//       localStorage.removeItem("logoutMessage");
//     }
//   });


// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Ngăn submit mặc định

//     // Lấy giá trị từ các trường nhập liệu
//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value;
//     const termsChecked = document.getElementById('terms').checked;
//     const errorMessageDiv = document.getElementById('errorMessageDiv');

//     // Xóa thông báo cũ
//     errorMessageDiv.textContent = '';

//     // Kiểm tra các trường nhập liệu
//     if (!email) {
//         errorMessageDiv.textContent = 'Email không được để trống.';
//       return;
//     }
//     if (!password) {
//         errorMessageDiv.textContent = 'Mật khẩu không được để trống.';
//       return;
//     }
//     if (!termsChecked) {
//         errorMessageDiv.textContent = 'Bạn phải đồng ý với chính sách và điều khoản.';
//       return;
//     }
    

//     // if (email !== "test@example.com" || password !== "12345678") {
//     //     errorMessageDiv.textContent = "Email hoặc Mật khẩu không đúng";
//     //     return;
//     //   }

//       // Nếu đăng nhập thành công, lưu trạng thái đăng nhập vào localStorage
//       // localStorage.setItem("isLoggedIn", "true");

//       // Chuyển hướng sang trang Dashboard
      
    


    
//   });











// document.addEventListener("DOMContentLoaded", function() {
//   // Lắng nghe sự kiện submit trên form đăng nhập
//   document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Ngăn gửi form mặc định

//     // Lấy giá trị từ các trường nhập liệu
//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value;
//     const termsChecked = document.getElementById('terms').checked;
//     const errorMessageDiv = document.getElementById('errorMessage');

//     // Xóa thông báo lỗi cũ
//     errorMessageDiv.textContent = '';

//     // Kiểm tra các điều kiện
//     if (!email) {
//       errorMessageDiv.textContent = 'Email không được để trống.';
//       return;
//     }
//     if (!password) {
//       errorMessageDiv.textContent = 'Mật khẩu không được để trống.';
//       return;
//     }
//     if (!termsChecked) {
//       errorMessageDiv.textContent = 'Bạn phải đồng ý với chính sách và điều khoản.';
//       return;
//     }

//     // Kiểm tra thông tin đăng nhập (ví dụ: so sánh với dữ liệu mẫu)
//     if (email !== "test@example.com" || password !== "12345678") {
//       errorMessageDiv.textContent = "Email hoặc Mật khẩu không đúng.";
//       return;
//     }

//     // Nếu đăng nhập thành công, có thể lưu trạng thái đăng nhập (tuỳ chọn)
//     localStorage.setItem("isLoggedIn", "true");

//     // 
//     window.location.href = "dashboard.html";
//   });
// });







// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();  // Ngăn submit mặc định

//     // Lấy giá trị từ các trường nhập liệu
//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value;
//     const termsChecked = document.getElementById('terms').checked;
//     const errorMessageDiv = document.getElementById('errorMessage');

//     // Xóa thông báo lỗi cũ
//     errorMessageDiv.textContent = '';

//     // Kiểm tra các trường nhập liệu
//     if (!email) {
//       errorMessageDiv.textContent = 'Email không được để trống.';
//       return;
//     }
//     if (!password) {
//       errorMessageDiv.textContent = 'Mật khẩu không được để trống.';
//       return;
//     }
//     if (!termsChecked) {
//       errorMessageDiv.textContent = 'Bạn phải đồng ý với chính sách và điều khoản.';
//       return;
//     }

//     // Kiểm tra thông tin đăng nhập mẫu (thay thế bằng xác thực từ server nếu cần)
//     if (email !== "ngoc01072006@gmail.com" || password !== "ngoc1234") {
//       errorMessageDiv.textContent = "Email hoặc Mật khẩu không đúng.";
//       return;
//     }

//     // Nếu đăng nhập thành công, lưu trạng thái đăng nhập và thông tin email vào localStorage
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("email", email); // Lưu email người dùng

//     // Chuyển hướng sang trang chủ, ví dụ: dashboard.html
//     window.location.href = "./";
//   });
// });





// document.addEventListener("DOMContentLoaded", () => {
//   // Kiểm tra sự tồn tại của form đăng nhập
//   const loginForm = document.getElementById('loginForm');
//   const errorMessageDiv = document.getElementById('errorMessage');

//   if (!loginForm || !errorMessageDiv) {
//     console.error("Không tìm thấy phần tử loginForm hoặc errorMessage.");
//     return;
//   }

//   loginForm.addEventListener('submit', (event) => {
//     event.preventDefault();  // Ngăn gửi form mặc định

//     // Lấy các phần tử input cần thiết
//     const emailInput = document.getElementById('email');
//     const passwordInput = document.getElementById('password');
//     const termsCheckbox = document.getElementById('terms');

//     // Kiểm tra các phần tử có tồn tại hay không
//     if (!emailInput || !passwordInput || !termsCheckbox) {
//       console.error("Thiếu một hoặc nhiều phần tử cần thiết trong form (email, password, terms).");
//       return;
//     }

//     // Lấy giá trị từ các trường nhập liệu
//     const email = emailInput.value.trim();
//     const password = passwordInput.value;
//     const termsChecked = termsCheckbox.checked;

//     // Xóa thông báo lỗi cũ
//     errorMessageDiv.textContent = '';

//     // Kiểm tra các trường nhập liệu
//     if (!email) {
//       errorMessageDiv.textContent = 'Email không được để trống.';
//       return;
//     }
//     if (!password) {
//       errorMessageDiv.textContent = 'Mật khẩu không được để trống.';
//       return;
//     }
//     if (!termsChecked) {
//       errorMessageDiv.textContent = 'Bạn phải đồng ý với chính sách và điều khoản.';
//       return;
//     }

//     // Kiểm tra thông tin đăng nhập mẫu (thay thế bằng xác thực từ server nếu cần)
//     if (email !== "ngoc01072006@gmail.com" || password !== "ngoc1234") {
//       errorMessageDiv.textContent = "Email hoặc Mật khẩu không đúng.";
//       return;
//     }

//     // Nếu đăng nhập thành công, lưu trạng thái đăng nhập và thông tin email vào localStorage
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("email", email); // Lưu email người dùng

//     // Chuyển hướng sang trang chủ, ví dụ: dashboard.html hoặc trang gốc
//     window.location.href = "dashboard.html";
//   });
// });











































































// document.addEventListener("DOMContentLoaded", () => {
//   // Lấy phần tử form đăng nhập và div hiển thị lỗi
//   const loginForm = document.getElementById('loginForm');
//   const errorMessageDiv = document.getElementById('errorMessage');

//   // Kiểm tra các phần tử có tồn tại không
//   if (!loginForm || !errorMessageDiv) {
//     console.error("Không tìm thấy phần tử 'loginForm' hoặc 'errorMessage'. Vui lòng kiểm tra lại HTML.");
//     return;
//   }

//   loginForm.addEventListener('submit', (event) => {
//     event.preventDefault();  // Ngăn submit form mặc định

//     // Lấy các phần tử input cần thiết
//     const emailInput = document.getElementById('email');
//     const passwordInput = document.getElementById('password');
//     const termsCheckbox = document.getElementById('terms');

//     // Kiểm tra sự tồn tại của các phần tử input
//     if (!emailInput || !passwordInput || !termsCheckbox) {
//       console.error("Thiếu một hoặc nhiều phần tử cần thiết: email, password, hoặc terms.");
//       return;
//     }

//     // Lấy giá trị từ các trường nhập liệu
//     const email = emailInput.value.trim();
//     const password = passwordInput.value;
//     const termsChecked = termsCheckbox.checked;

//     // Xóa thông báo lỗi cũ
//     errorMessageDiv.textContent = '';

//     // Kiểm tra dữ liệu nhập
//     if (!email) {
//       errorMessageDiv.textContent = 'Email không được để trống.';
//       return;
//     }
//     if (!password) {
//       errorMessageDiv.textContent = 'Mật khẩu không được để trống.';
//       return;
//     }
//     if (!termsChecked) {
//       errorMessageDiv.textContent = 'Bạn phải đồng ý với chính sách và điều khoản.';
//       return;
//     }

//     // Xác thực thông tin đăng nhập mẫu (thay đổi lại theo yêu cầu thực tế)
//     if (email !== "ngoc01072006@gmail.com" || password !== "ngoc1234") {
//       errorMessageDiv.textContent = "Email hoặc Mật khẩu không đúng.";
//       return;
//     }

//     // Nếu đăng nhập thành công, lưu trạng thái và email vào localStorage
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("email", email);

//     // Chuyển hướng sang trang dashboard
//     window.location.href = "./dashboard.html";
//   });
// });








document.addEventListener("DOMContentLoaded", () => {
  // Lấy phần tử form đăng nhập và div hiển thị lỗi///
  const loginForm = document.getElementById('loginForm');
  const errorMessageDiv = document.getElementById('errorMessage');  
 console.log("loginForm", loginForm); 
 console.log("errorMessageDiv", errorMessageDiv); 
 




{
}
  //Kiểm tra các phần tử có tồn tại không///
  if (!loginForm || !errorMessageDiv) {     
  console.error("Không tìm thấy phần tử 'loginForm' hoặc 'errorMessage'. Vui lòng kiểm tra lại HTML."); 
  return;
  }

  loginForm.addEventListener('click', (event) => {  
    event.preventDefault();  // Ngăn submit form mặc định///
    console.log("Đang xử lý đăng nhập..."); 
    
    // Lấy các phần tử input cần thiết
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const termsCheckbox = document.getElementById('terms');

    // Kiểm tra sự tồn tại của các phần tử input
    if (!emailInput || !passwordInput || !termsCheckbox) {
      console.error("Thiếu một hoặc nhiều phần tử cần thiết: email, password, hoặc terms.");
      return;
    }

    // Lấy giá trị từ các trường nhập liệu
    const email = emailInput.value.trim();  
    const password = passwordInput.value; 
    const termsChecked = termsCheckbox.checked; 

    // Xóa thông báo lỗi cũ
    errorMessageDiv.textContent = '';

    // Kiểm tra dữ liệu nhập
    if (!email) {
      errorMessageDiv.textContent = 'Email không được để trống.';
      return;
    }
    if (!password) {
      errorMessageDiv.textContent = 'Mật khẩu không được để trống.';  
      return;
    }
    if (!termsChecked) {  
      errorMessageDiv.textContent = 'Bạn phải đồng ý với chính sách và điều khoản.';
      return;
    }

    // Xác thực thông tin đăng nhập mẫu (thay đổi lại theo yêu cầu thực tế)
    if (email !== "ngoc01072006@gmail.com" || password !== "12345678") {  
      errorMessageDiv.textContent = "Email hoặc Mật khẩu không đúng.";  
      return; 
    }

    // Nếu đăng nhập thành công, hiển thị SweetAlert2 thông báo thành công
    // Swal.fire({
    //   icon: "success",
    //   title: "Đăng nhập thành công!",
    //   text: "Bạn đã đăng nhập thành công.",
    //   confirmButtonText: "OK"
    // }).then(result => {
    //   if (result.isConfirmed) {


    // Nếu đăng nhập thành công, lưu trạng thái và email vào localStorage
    localStorage.setItem("isLoggedIn", "true"); // Lưu trạng thái đăng nhập
    localStorage.setItem("email", email); // Lưu email người dùng

    // Chuyển hướng sang trang dashboard
    window.location.href = "./category-manager.html"; // Chuyển hướng đến trang dashboard.html
      // }
    // });
  });
});