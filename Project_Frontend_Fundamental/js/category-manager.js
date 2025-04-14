// document.addEventListener("DOMContentLoaded", function () {
//   const modal = document.getElementById("addCategoryModal");
//   const openModalBtn = document.getElementById("openModal");
//   const closeModalBtn = document.getElementById("closeModalBtn");
//   const cancelBtn = document.getElementById("cancelBtn");
//   const form = document.getElementById("addCategoryForm");
//   const categoryTableBody = document.querySelector("#categoryTable tbody");
//   const statusFilter = document.getElementById("statusFilter");
//   const sortOption = document.getElementById("sortOption");
//   const searchInput = document.getElementById("searchInput");

//   // Mảng dữ liệu danh mục (trong thực tế bạn sẽ fetch từ API)
//   let categoriesData = [
//     { id: 1, category_code: "DM001", category_name: "Quần áo", status: "Đang hoạt động", created_at: "2024-04-09T10:00:00Z" },
//     { id: 2, category_code: "DM002", category_name: "Kính mắt", status: "Ngừng hoạt động", created_at: "2024-04-08T15:30:00Z" },
//     { id: 3, category_code: "DM003", category_name: "Giày dép", status: "Đang hoạt động", created_at: "2024-04-09T11:15:00Z" },
//     { id: 4, category_code: "DM004", category_name: "Thời trang nam", status: "Ngừng hoạt động", created_at: "2024-04-07T09:45:00Z" },
//     { id: 5, category_code: "DM005", category_name: "Thời trang nữ", status: "Đang hoạt động", created_at: "2024-04-08T18:00:00Z" },
//     { id: 6, category_code: "DM006", category_name: "Hoa quả", status: "Ngừng hoạt động", created_at: "2024-04-06T12:00:00Z" },
//     { id: 7, category_code: "DM007", category_name: "Rau củ", status: "Đang hoạt động", created_at: "2024-04-09T08:30:00Z" },
//     { id: 8, category_code: "DM008", category_name: "Điện thoại", status: "Ngừng hoạt động", created_at: "2024-04-07T20:45:00Z" },
//   ];

//   let currentCategories = [...categoriesData]; // Bản sao để lọc và sắp xếp

//   function renderCategories(categories) {
//     categoryTableBody.innerHTML = "";
//     categories.forEach((category) => {
//       const row = categoryTableBody.insertRow();
//       row.insertCell().textContent = category.category_code;
//       row.insertCell().textContent = category.category_name;
//       const statusCell = row.insertCell();
//       const statusSpan = document.createElement("span");
//       statusSpan.textContent = category.status;
//       statusSpan.className = category.status === "Đang hoạt động" ? "status active1" : "status inactive";
//       statusCell.appendChild(statusSpan);
//       row.insertCell().textContent = new Date(category.created_at).toLocaleDateString() + " " + new Date(category.created_at).toLocaleTimeString();
//       const actionsCell = row.insertCell();
//       actionsCell.innerHTML = '<i class="fas fa-trash delete"></i> <i class="fas fa-edit edit"></i>';
//     });
//   }

//   function filterByStatus(categories, selectedStatus) {
//     if (selectedStatus === "all") {
//       return categories;
//     }
//     return categories.filter(category => category.status === (selectedStatus === "active" ? "Đang hoạt động" : "Ngừng hoạt động"));
//   }

//   function filterByName(categories, searchTerm) {
//     if (!searchTerm) {
//       return categories;
//     }
//     return categories.filter(category =>
//       category.category_name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }

//   function filterAndSortCategories() {
//     const selectedStatus = statusFilter.value;
//     const sortValue = sortOption.value;
//     const searchTerm = searchInput.value.toLowerCase();

//     let filtered = [...categoriesData];

//     // Lọc theo trạng thái
//     filtered = filterByStatus(filtered, selectedStatus);

//     // Tìm kiếm theo tên
//     filtered = filterByName(filtered, searchTerm);

//     // Sắp xếp
//     if (sortValue === "name") {
//       filtered.sort((a, b) => a.category_name.localeCompare(b.category_name));
//     } else if (sortValue === "created_at") {
//       filtered.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
//     }

//     currentCategories = filtered;
//     renderCategories(currentCategories);
//   }

//   // Sự kiện mở modal (giữ nguyên)
//   openModalBtn.addEventListener("click", function () {
//     modal.style.display = "flex";
//   });

//   // Sự kiện đóng modal (giữ nguyên)
//   closeModalBtn.addEventListener("click", function () {
//     modal.style.display = "none";
//     form.reset();
//   });

//   // Đóng modal khi bấm "Hủy" (giữ nguyên)
//   cancelBtn.addEventListener("click", function () {
//     modal.style.display = "none";
//     form.reset();
//   });

//   // Đóng modal khi click ra ngoài (giữ nguyên)
//   window.addEventListener("click", function (e) {
//     if (e.target === modal) {
//       modal.style.display = "none";
//       form.reset();
//     }
//   });

//   // // Xử lý submit form (giữ nguyên hoặc cập nhật logic thêm mới)
//   // form.addEventListener("submit", function (e) {
//   //   e.preventDefault();
//   //   const categoryCode = document.getElementById("categoryCode").value.trim();
//   //   const categoryName = document.getElementById("categoryName").value.trim();
//   //   const status = document.querySelector('input[name="status"]:checked').value;
//   //   const newCategory = {
//   //     id: Date.now(), // Tạo ID tạm thời
//   //     category_code: categoryCode,
//   //     category_name: categoryName,
//   //     status: status === "active" ? "Đang hoạt động" : "Ngừng hoạt động",
//   //     created_at: new Date().toISOString()
//   //   };
//   //   categoriesData.push(newCategory);
//   //   filterAndSortCategories(); // Cập nhật lại bảng sau khi thêm
//   //   modal.style.display = "none";
//   //   form.reset();
//   // });

//   // Lắng nghe sự kiện thay đổi của bộ lọc trạng thái
//   statusFilter.addEventListener("change", filterAndSortCategories);

//   // Lắng nghe sự kiện thay đổi của bộ lọc sắp xếp
//   sortOption.addEventListener("change", filterAndSortCategories);

//   // Lắng nghe sự kiện input của tìm kiếm
//   searchInput.addEventListener("input", filterAndSortCategories);

//   // Gọi hàm hiển thị ban đầu
//   filterAndSortCategories();

//   // -----------------------------
//   // Xử lý avatar & đăng xuất (giữ nguyên)
//   // -----------------------------
//   const avatarIcon = document.getElementById("avatarIcon");
//   const avatarDropdown = document.getElementById("avatarDropdown");
//   const logoutBtn = document.getElementById("logoutBtn");

//   if (avatarIcon && avatarDropdown && logoutBtn) {
//     avatarIcon.addEventListener("click", () => {
//       avatarDropdown.style.display = avatarDropdown.style.display === "block" ? "none" : "block";
//     });

//     logoutBtn.addEventListener("click", () => {
//       Swal.fire({
//         title: 'Bạn có chắc chắn muốn đăng xuất?',
//         icon: 'question',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Đăng xuất',
//         cancelButtonText: 'Hủy'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           window.location.href = './login.html';
//         }
//       });
//     });

//     window.addEventListener("click", (event) => {
//       if (!avatarIcon.contains(event.target) && !avatarDropdown.contains(event.target)) {
//         avatarDropdown.style.display = "none";
//       }
//     });
//   } else {
//     console.error("Không tìm thấy phần tử avatar hoặc dropdown đăng xuất. Vui lòng kiểm tra HTML.");
//   }
// });

// let userLogoutBtn = document.getElementById('logoutBtn');
// if (userLogoutBtn) {
//   userLogoutBtn.addEventListener('click', () => {
//     Swal.fire({
//       title: 'Bạn có chắc chắn muốn đăng xuất?',
//       icon: 'question',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Đăng xuất',
//       cancelButtonText: 'Hủy'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         window.location.href = './login.html';
//       }
//     });
//   });
// }


// document.addEventListener("DOMContentLoaded", () => {
//     const btnSubmit = document.querySelector(".btn-submit");
//     const btnCancel = document.querySelector(".btn-cancel");
//     const maDanhMucInput = document.getElementById("ma-danh-muc");
//     const tenDanhMucInput = document.getElementById("ten-danh-muc");
//     const dangHoatDongCheckbox = document.getElementById("dang-hoat-dong");
  
//     const maError = document.getElementById("ma-error");
//     const tenError = document.getElementById("ten-error");
  
//     function resetErrors() {
//       maError.textContent = "";
//       tenError.textContent = "";
//     }
  
//     function validateInputs(ma, ten, categories) {
//       let hasError = false;
  
//       if (!ma) {
//         maError.textContent = "Vui lòng nhập mã danh mục.";
//         hasError = true;
//       }
  
//       if (!ten) {
//         tenError.textContent = "Vui lòng nhập tên danh mục.";
//         hasError = true;
//       }
  
//       const isDuplicate = categories.some(cat => cat.code.toLowerCase() === ma.toLowerCase());
//       if (isDuplicate) {
//         maError.textContent = "Mã danh mục đã tồn tại.";
//         hasError = true;
//       }
  
//       return !hasError;
//     }
  
//     function handleSubmit() {
//       const maDanhMuc = maDanhMucInput.value.trim();
//       const tenDanhMuc = tenDanhMucInput.value.trim();
//       const trangThai = dangHoatDongCheckbox.checked ? "active" : "inactive";
  
//       resetErrors();
//       let categories = JSON.parse(localStorage.getItem("categories")) || [];



//       function renderPagination(totalItems) {
//         const pagination = document.querySelector(".pagination");
//         pagination.innerHTML = "";
//         const totalPages = Math.ceil(totalItems / itemsPerPage);
//         const prevBtn = document.createElement("button");
//         prevBtn.textContent = "←";
//         prevBtn.disabled = currentPage === 1;
//         prevBtn.onclick = () => {
//             currentPage--;
//             renderCategories();
//         };
//         pagination.appendChild(prevBtn);
//         for (let i = 1; i <= totalPages; i++) {
//             const btn = document.createElement("button");
//             btn.textContent = i;
//             if (i === currentPage) btn.classList.add("active");
//             btn.onclick = () => {
//                 currentPage = i;
//                 renderCategories();
//             };
//             pagination.appendChild(btn);
//         }
//         const nextBtn = document.createElement("button");
//         nextBtn.textContent = "→";
//         nextBtn.disabled = currentPage === totalPages;
//         nextBtn.onclick = () => {
//             currentPage++;
//             renderCategories();
//         };
//         pagination.appendChild(nextBtn);
//     }
//     function openModal() {
//         form.reset();
//         modalTitle.textContent = "Thêm danh mục";
//         modal.style.display = "block";
//     }
//     function closeModal() {
//         modal.style.display = "none";
//     }
//     form.onsubmit = function(e) {
//         e.preventDefault();
//         const ma = maInput.value.trim();
//         const ten = tenInput.value.trim();
//         const trangThai = form.trangThai.value;
//         if (!ma || !ten) return;
//         const index = categories.findIndex(c => c.ma === ma);
//         if (index >= 0) {
//             categories[index].ten = ten;
//             categories[index].trangThai = trangThai;
//         } else {
//             categories.push({ ma, ten, trangThai });
//         }
//         localStorage.setItem("categories", JSON.stringify(categories));
//         closeModal();
//         renderCategories();
//     }




//     document.querySelectorAll('.edit').forEach(item => {
//       item.addEventListener('click', function() {
//           const row = item.closest('tr');
//           const productId = row.cells[0].textContent; // Giả sử cột đầu tiên là ID sản phẩm
//           const productName = row.cells[1].textContent;
//           const productPrice = row.cells[2].textContent;
//           // Điền giá trị hiện tại vào modal
//           document.getElementById('productCode').value = productId;
//           document.getElementById('productName').value = productName;
//           document.getElementById('price').value = productPrice;
//           document.getElementById('addProductModal').style.display = 'block'; // Hiển thị modal
//       });
//   });
//     document.querySelectorAll('.delete').forEach(item => {
//       item.addEventListener('click', function() {
//           const row = item.closest('tr');
//           const productName = row.cells[1].textContent; // Giả sử cột thứ 2 là tên sản phẩm
//           Swal.fire({
//               title: `Bạn có chắc chắn muốn xóa ${productName}?`,
//               showCancelButton: true,
//               confirmButtonText: 'Có, xóa!',
//           }).then((result) => {
//               if (result.isConfirmed) {
//                   row.remove(); // Xóa dòng trong bảng
//                   Swal.fire('Đã xóa!', `${productName} đã được xóa.`, 'success');
//               }
//           });
//       });
//   });

  
//       // Đảm bảo tất cả có createdAt
//       categories = categories.map(c => {
//         if (!c.createdAt) {
//           c.createdAt = Date.now();
//         }
//         return c;
//       });
//       localStorage.setItem("categories", JSON.stringify(categories));
  
//       if (!validateInputs(maDanhMuc, tenDanhMuc, categories)) return;
  
//       const newCategory = {
//         id: Math.ceil(Math.random() * 1000000),
//         code: maDanhMuc,
//         name: tenDanhMuc,
//         status: trangThai,
//         createdAt: Date.now()
//       };
  
//       categories.push(newCategory);
//       localStorage.setItem("categories", JSON.stringify(categories));
  
//       window.location.href = "category-manager.html";
//     }
  
//     if (btnSubmit) {
//       btnSubmit.addEventListener("click", handleSubmit);
//     }
  
//     if (btnCancel) {
//       btnCancel.addEventListener("click", () => {
//         if (confirm("Bạn có chắc muốn hủy?")) {
//           window.location.href = "category-manager.html";
//         }
//       });
//     }
  
//     // Cho phép nhấn Enter để submit
//     document.addEventListener("keydown", (e) => {
//       if (e.key === "Enter") {
//         handleSubmit();
//       }
//     });
//   });



//   // ================= SẢN PHẨM =================
// (function () {
//   const productModal      = document.getElementById("productModal");
//   if (!productModal) return;                    // không phải trang sản phẩm

//   const openBtn           = document.getElementById("openProductModal");
//   const closeBtn          = document.getElementById("closeProductModal");
//   const cancelBtn         = document.getElementById("cancelProduct");
//   const form              = document.getElementById("productForm");

//   const codeInput         = document.getElementById("productCode");
//   const nameInput         = document.getElementById("productName");
//   const catSelect         = document.getElementById("productCategory");
//   const priceInput        = document.getElementById("productPrice");

//   // ---------- 1. Đổ dropdown danh mục ----------
//   const categories = JSON.parse(localStorage.getItem("categories")) || [];
//   catSelect.innerHTML = `<option value="" disabled selected>-- Chọn danh mục --</option>` +
//     categories.map(c => `<option value="${c.id}">${c.code} - ${c.name}</option>`).join("");

//   // ---------- 2. Mở / đóng modal ----------
//   openBtn.addEventListener("click", () => productModal.style.display = "flex");
//   [closeBtn, cancelBtn].forEach(btn => btn.addEventListener("click", () => {
//     productModal.style.display = "none";
//     form.reset();
//   }));
//   window.addEventListener("click", e => { if (e.target === productModal) { productModal.style.display = "none"; form.reset(); } });

//   // ---------- 3. Validate & lưu LocalStorage ----------
//   form.addEventListener("submit", e => {
//     e.preventDefault();

//     const code   = codeInput.value.trim();
//     const name   = nameInput.value.trim();
//     const catId  = +catSelect.value;
//     const price  = +priceInput.value;
//     const status = document.querySelector("input[name='pStatus']:checked").value === "active" ? "Đang hoạt động" : "Ngừng hoạt động";

//     if (!code || !name || !catId || price < 0) {
//       Swal.fire("Lỗi", "Vui lòng nhập đầy đủ & hợp lệ thông tin!", "error");
//       return;
//     }

//     let products = JSON.parse(localStorage.getItem("products")) || [];

//     // kiểm tra trùng mã
//     if (products.some(p => p.code.toLowerCase() === code.toLowerCase())) {
//       Swal.fire("Lỗi", "Mã sản phẩm đã tồn tại!", "error");
//       return;
//     }

//     products.push({
//       id: Date.now(),
//       code, name,
//       categoryId: catId,
//       price,
//       status,
//       createdAt: new Date().toISOString()
//     });

//     localStorage.setItem("products", JSON.stringify(products));
//     Swal.fire("Thành công", "Đã thêm sản phẩm!", "success");

//     productModal.style.display = "none";
//     form.reset();

//     // TODO: gọi hàm render bảng sản phẩm nếu bạn đã có
//     // renderProducts();
//   });
// })();





// let editMode = false;
// let editingId = null;

// function openAddModal() {
//   editMode = false;
//   editingId = null;
//   form.reset();
//   document.getElementById("modalTitle").textContent = "Thêm danh mục";
//   modal.style.display = "flex";
// }

// function openEditModal(category) {
//   editMode = true;
//   editingId = category.id;

//   document.getElementById("categoryCode").value = category.category_code;
//   document.getElementById("categoryName").value = category.category_name;
//   document.querySelector(`input[name="status"][value="${category.status === 'Đang hoạt động' ? 'active' : 'inactive'}"]`).checked = true;
//   document.getElementById("modalTitle").textContent = "Chỉnh sửa danh mục";
//   modal.style.display = "flex";
// }

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const categoryCode = document.getElementById("categoryCode").value.trim();
//   const categoryName = document.getElementById("categoryName").value.trim();
//   const status = document.querySelector('input[name="status"]:checked').value;
//   const statusText = status === "active" ? "Đang hoạt động" : "Ngừng hoạt động";

//   // Validate đơn giản
//   if (!categoryCode || !categoryName) {
//     Swal.fire("Lỗi", "Vui lòng nhập đầy đủ thông tin!", "warning");
//     return;
//   }

//   if (editMode) {
//     const index = categoriesData.findIndex(cat => cat.id === editingId);
//     if (index !== -1) {
//       categoriesData[index].category_code = categoryCode;
//       categoriesData[index].category_name = categoryName;
//       categoriesData[index].status = statusText;
//     }
//   } else {
//     const exists = categoriesData.some(cat => cat.category_code.toLowerCase() === categoryCode.toLowerCase());
//     if (exists) {
//       Swal.fire("Lỗi", "Mã danh mục đã tồn tại!", "error");
//       return;
//     }

//     const newCategory = {
//       id: Date.now(),
//       category_code: categoryCode,
//       category_name: categoryName,
//       status: statusText,
//       created_at: new Date().toISOString(),
//     };
//     categoriesData.push(newCategory);
//   }

//   modal.style.display = "none";
//   form.reset();
//   filterAndSortCategories();
// });
// function attachEditDeleteEvents() {
//   document.querySelectorAll(".edit").forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       const category = currentCategories[index];
//       openEditModal(category);
//     });
//   });

//   document.querySelectorAll(".delete").forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       const category = currentCategories[index];
//       Swal.fire({
//         title: `Xoá danh mục "${category.category_name}"?`,
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonText: "Xoá",
//         cancelButtonText: "Hủy",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           categoriesData = categoriesData.filter(cat => cat.id !== category.id);
//           filterAndSortCategories();
//           Swal.fire("Đã xoá!", "", "success");
//         }
//       });
//     });
//   });
// }

// // Gọi sau mỗi lần render
// function renderCategories(categories) {
//   categoryTableBody.innerHTML = "";
//   categories.forEach((category) => {
//     const row = categoryTableBody.insertRow();
//     row.insertCell().textContent = category.category_code;
//     row.insertCell().textContent = category.category_name;
//     const statusCell = row.insertCell();
//     const statusSpan = document.createElement("span");
//     statusSpan.textContent = category.status;
//     statusSpan.className = category.status === "Đang hoạt động" ? "status active1" : "status inactive";
//     statusCell.appendChild(statusSpan);
//     row.insertCell().textContent = new Date(category.created_at).toLocaleString();
//     row.insertCell().innerHTML = '<i class="fas fa-edit edit"></i> <i class="fas fa-trash delete"></i>';
//   });

//   attachEditDeleteEvents(); // 👈 Thêm dòng này
// }







































document.addEventListener("DOMContentLoaded", function () { 
  console.log("DOM loaded - đang khởi tạo trình quản lý danh mục"); // Thông báo khi DOM đã tải xong
  
  const modal = document.getElementById("addCategoryModal");  // Modal thêm danh mục
  const openModalBtn = document.getElementById("openModal");  // Nút mở modal
  const closeModalBtn = document.getElementById("closeModalBtn"); // Nút đóng modal
  const cancelBtn = document.getElementById("cancelBtn"); // Nút hủy trong modal
  const form = document.getElementById("addCategoryForm");  // Form thêm danh mục
  const categoryTableBody = document.getElementById("categoryTable"); // Thân bảng danh mục
  const statusFilter = document.getElementById("statusFilter"); // Lọc theo trạng thái
  const searchInput = document.getElementById("searchInput"); // Tìm kiếm theo tên danh mục
  const sortSelect = document.getElementById("sortSelect"); // Thay đổi cách sắp xếp
  const itemsPerPageSelect = document.getElementById("itemsPerPage"); // Thay đổi số lượng mục trên mỗi trang

  // Kiểm tra xem các phần tử đã được tìm thấy hay chưa
  console.log("Table body found:", !!categoryTableBody);  
  console.log("Status filter found:", !!statusFilter);  
  console.log("Search input found:", !!searchInput);  

  // Cài đặt phân trang
let currentPage = 1;
let itemsPerPage = 5; // Số mục mặc định trên mỗi trang
let searchTimeout = null; // Để chống dội (debounce) cho tìm kiếm

  
  // Tải danh mục từ localStorage nếu có
let savedCategories = localStorage.getItem('categories'); // Lấy danh mục từ localStorage
let categoriesData = [];  // Mảng chứa danh mục

  
  if (savedCategories) {    // Nếu có dữ liệu trong localStorage
    try { // Nếu có dữ liệu trong localStorage
      const parsedCategories = JSON.parse(savedCategories); // Phân tích cú pháp dữ liệu từ localStorage
      console.log("Loaded categories from localStorage:", parsedCategories.length); // Kiểm tra số lượng danh mục đã tải từ localStorage
      
      // Chuyển đổi sang định dạng nội bộ của chúng ta
      categoriesData = parsedCategories.map(cat => ({   // Chuyển đổi sang định dạng nội bộ của chúng ta
        id: cat.id, // Giữ nguyên ID
        category_code: cat.code,  // Chuyển đổi tên thuộc tính
        category_name: cat.name,  // Chuyển đổi tên thuộc tính
        status: cat.status, // Giữ nguyên trạng thái
        created_at: cat.created_at || new Date().toISOString() // Nếu không có created_at, sử dụng thời gian hiện tại
      }));
    } catch (e) { // Nếu có lỗi trong việc phân tích cú pháp, sử dụng dữ liệu mẫu
      console.error("Lỗi khi tải danh mục từ bộ nhớ localStorage:", e); // Nếu có lỗi trong việc phân tích cú pháp, sử dụng dữ liệu mẫu
    }
  }
  
  // Sử dụng dữ liệu mẫu nếu không có danh mục đã lưu
  if (categoriesData.length === 0) {  // Nếu không có danh mục nào được lưu trong localStorage
    console.log("Using sample category data");//Sử dụng dữ liệu mẫu nếu không có danh mục đã lưu
    categoriesData = [  // Dữ liệu mẫu
      { id: 1, category_code: "DM001", category_name: "Quần áo", status: "Đang hoạt động", created_at: "2024-04-09T10:00:00Z" },
      { id: 2, category_code: "DM002", category_name: "Kính mắt", status: "Ngừng hoạt động", created_at: "2024-04-08T15:30:00Z" },
      { id: 3, category_code: "DM003", category_name: "Giày dép", status: "Đang hoạt động", created_at: "2024-04-09T11:15:00Z" },
      { id: 4, category_code: "DM004", category_name: "Thời trang nam", status: "Ngừng hoạt động", created_at: "2024-04-07T09:45:00Z" },  
      { id: 5, category_code: "DM005", category_name: "Thời trang nữ", status: "Đang hoạt động", created_at: "2024-04-08T18:00:00Z" },
      { id: 6, category_code: "DM006", category_name: "Hoa quả", status: "Ngừng hoạt động", created_at: "2024-04-06T12:00:00Z" },
      { id: 7, category_code: "DM007", category_name: "Rau củ", status: "Đang hoạt động", created_at: "2024-04-09T08:30:00Z" },
      { id: 8, category_code: "DM008", category_name: "Điện thoại", status: "Ngừng hoạt động", created_at: "2024-04-07T20:45:00Z" },
      { id: 9, category_code: "DM009", category_name: "Laptop & Máy tính", status: "Đang hoạt động", created_at: "2024-04-05T14:20:00Z" },
      { id: 10, category_code: "DM010", category_name: "Phụ kiện điện tử", status: "Đang hoạt động", created_at: "2024-04-10T09:10:00Z" },
      { id: 11, category_code: "DM011", category_name: "Đồng hồ", status: "Đang hoạt động", created_at: "2024-04-11T11:30:00Z" },
      { id: 12, category_code: "DM012", category_name: "Trang sức", status: "Ngừng hoạt động", created_at: "2024-04-03T16:45:00Z" },
      { id: 13, category_code: "DM013", category_name: "Đồ chơi trẻ em", status: "Đang hoạt động", created_at: "2024-04-09T13:25:00Z" },
      { id: 14, category_code: "DM014", category_name: "Sách & Văn phòng phẩm", status: "Đang hoạt động", created_at: "2024-04-08T10:15:00Z" },
      { id: 15, category_code: "DM015", category_name: "Đồ gia dụng", status: "Ngừng hoạt động", created_at: "2024-04-04T08:50:00Z" }
    ];
    
    // Lưu dữ liệu ban đầu vào localStorage
    // Lưu dữ liệu ban đầu vào bộ nhớ cục bộ của trình duyệt
    saveCategoriesToLocalStorage(); // Lưu danh mục vào bộ nhớ cục bộ
  }

  let filteredCategories = [...categoriesData]; // Bản sao để lọc và sắp xếp

  // Hàm định dạng ngày tháng
  function formatDate(dateString) { // Hàm định dạng ngày tháng từ chuỗi
    const date = new Date(dateString);    // Chuyển đổi chuỗi thành đối tượng Date
    const day = date.getDate().toString().padStart(2, '0'); // Chuyển đổi thành chuỗi 2 chữ số
    const month = (date.getMonth() + 1).toString().padStart(2, '0');  // Tháng bắt đầu từ 0, nên cộng thêm 1
    const year = date.getFullYear();  // Lấy năm
    const hours = date.getHours().toString().padStart(2, '0');  // Chuyển đổi thành chuỗi 2 chữ số
    const minutes = date.getMinutes().toString().padStart(2, '0');  // Chuyển đổi thành chuỗi 2 chữ số
    
    return `${day}/${month}/${year} ${hours}:${minutes}`; // Trả về chuỗi định dạng ngày tháng
  }

  // Hiển thị danh mục với phân trang 
  function renderCategories() { // Hàm hiển thị danh mục với phân trang
    console.log("Đang hiển thị danh mục:", filteredCategories.length, "items");//filteredCategories là một mảng chứa các danh mục đã được lọc.
    //length là thuộc tính của mảng trong JavaScript, trả về số lượng phần tử trong mảng đó.
    if (!categoryTableBody) {
      console.error("Không tìm thấy phần tử thân bảng danh mục!");//Không tìm thấy phần tử tbody của bảng danh mục!
      return;
    }
    
    categoryTableBody.innerHTML = "";// Xóa nội dung hiện tại của bảng danh mục
    
    // Tính toán phân trang
    const startIndex = (currentPage - 1) * itemsPerPage;// Tính chỉ mục bắt đầu
    const endIndex = startIndex + itemsPerPage;// Tính chỉ mục kết thúc
    const paginatedCategories = filteredCategories.slice(startIndex, endIndex); // Lấy các danh mục theo phân trang
    
    // Kiểm tra nếu không có danh mục nào khớp với bộ lọc
    if (paginatedCategories.length === 0) { // Nếu không có danh mục nào được tìm thấy
      const emptyRow = document.createElement('tr'); // Tạo một dòng trống
      emptyRow.innerHTML = '<td colspan="6" class="text-center">Không tìm thấy danh mục nào</td>'; // Nội dung thông báo
      categoryTableBody.appendChild(emptyRow); // Thêm dòng trống vào bảng
      renderPagination();// Hiển thị phân trang
      updateBulkActionButtons();// Cập nhật các nút hành động hàng loạt
      return;
    }
    
    // Hiển thị từng danh mục
    paginatedCategories.forEach((category) => { // Duyệt qua từng danh mục trong danh sách đã phân trang
      const row = document.createElement('tr'); // Tạo một dòng mới trong bảng
      row.innerHTML = `
        <td><input type="checkbox" class="category-checkbox" data-id="${category.id}"></td> <!-- Ô chọn danh mục -->    
        <td>${category.category_code}</td> <!-- Mã danh mục -->   
        <td>${category.category_name}</td> <!-- Tên danh mục -->
        <td>${formatDate(category.created_at)}</td> <!-- Ngày tạo --> 
        <td><span class="status ${category.status === "Đang hoạt động" ? "active1" : "inactive"}">
          ${category.status === "Đang hoạt động" ? "🟢 Đang hoạt động" : "🔴 Ngừng hoạt động"}
        </span></td> <!-- Trạng thái -->  
        <td>
          <i class="fas fa-trash delete" data-id="${category.id}"></i> <!-- Nút xóa -->
          <i class="fas fa-edit edit" data-id="${category.id}"></i> <!-- Nút chỉnh sửa -->
        </td>
      `;
      categoryTableBody.appendChild(row);  // Thêm dòng vào bảng danh mục
    });
    
    // Thêm bộ lắng nghe sự kiện cho các nút hành động
    addActionListeners(); // Gọi hàm để thêm sự kiện cho các nút sửa và xóa
    
    // Khởi tạo checkbox chọn tất cả
    initSelectAllCheckbox();  // Khởi tạo checkbox chọn tất cả
    
    // Cập nhật phân trang
    renderPagination(); // Gọi hàm renderPagination để hiển thị phân trang
  }

  // Thêm bộ lắng nghe sự kiện cho các nút sửa và xóa
  function addActionListeners() { // Hàm thêm bộ lắng nghe sự kiện cho các nút sửa và xóa
    // Nút xóa 
    document.querySelectorAll('.delete').forEach(btn => {   
      btn.addEventListener('click', function() {    
        const categoryId = parseInt(this.getAttribute('data-id')); // Lấy ID danh mục từ thuộc tính data-id
        deleteCategory(categoryId); // Gọi hàm xóa danh mục
      });
    });
    
    // Nút sửa
    document.querySelectorAll('.edit').forEach(btn => {   
      btn.addEventListener('click', function() {      
        const categoryId = parseInt(this.getAttribute('data-id')); // Lấy ID danh mục từ thuộc tính data-id
        // Gọi hàm sửa danh mục
        editCategory(categoryId); // Gọi hàm chỉnh sửa danh mục
      });
    });
  }


  
  // Xóa danh mục
  function deleteCategory(id) { // Hàm xóa danh mục
    Swal.fire({ // Hiển thị thông báo xác nhận xóa
      title: 'Xác nhận xóa', // Tiêu đề của thông báo
      text: "Bạn có chắc chắn muốn xóa danh mục này?", // Nội dung thông báo
      icon: 'warning',// Biểu tượng cảnh báo
      showCancelButton: true,// Hiển thị nút hủy
      confirmButtonColor: '#d33',// Màu của nút xác nhận (Xóa)
      cancelButtonColor: '#3085d6',// Màu của nút hủy
      confirmButtonText: 'Xóa',// Văn bản trên nút xác nhận
      cancelButtonText: 'Hủy' // Văn bản trên nút hủy
    }).then((result) => { // Xử lý kết quả của thông báo
      if (result.isConfirmed) { // Kiểm tra nếu người dùng xác nhận
        // Xóa khỏi mảng
        categoriesData = categoriesData.filter(category => category.id !== id); // Lọc danh mục không có ID cần xóa
        
        // Cập nhật localStorage
        localStorage.setItem('categories', JSON.stringify(categoriesData.map(cat => ({  // Lưu danh mục vào localStorage
          id: cat.id,   
          code: cat.category_code,      
          name: cat.category_name,      
          status: cat.status    
        }))));
        
        // Làm mới bảng
        filterAndSortCategories();  // Gọi hàm lọc và sắp xếp danh mục để cập nhật bảng

        Swal.fire(  // Hiển thị thông báo thành công
          'Đã xóa!', // Tiêu đề thông báo thành công
          'Danh mục đã được xóa thành công.', // Nội dung thông báo thành công
          'success' // Biểu tượng thành công
        );
      }
    });
  }

  // Chỉnh sửa danh mục
  function editCategory(id) { // Hàm chỉnh sửa danh mục
    console.log("Đang chỉnh sửa danh mục với ID:", id); // Hiển thị ID danh mục trong console
    const category = categoriesData.find(cat => cat.id === id); // Tìm danh mục theo ID
    if (!category) {
      console.error("Không tìm thấy danh mục với ID:", id); // Nếu không tìm thấy danh mục, hiển thị lỗi
      return;
    }
    
    console.log("Đã tìm thấy danh mục để chỉnh sửa:", category);  // Hiển thị thông tin danh mục trong console
    
    // Điền dữ liệu vào form
    document.getElementById("categoryCode").value = category.category_code; // Điền mã danh mục
    document.getElementById("categoryName").value = category.category_name; // Điền tên danh mục
    
    // Chọn radio button dựa trên trạng thái
    if (category.status === "Đang hoạt động") { // Nếu trạng thái là "Đang hoạt động"
      document.querySelector('input[name="status"][value="active"]').checked = true; // Tên trạng thái 
    } else {
      document.querySelector('input[name="status"][value="inactive"]').checked = true;  // Tên danh mục
  
    }
    
    // Thay đổi chế độ của form thành chỉnh sửa
    form.setAttribute('data-mode', 'edit'); // Đặt chế độ của form thành chỉnh sửa
    form.setAttribute('data-id', id); // Lưu ID danh mục vào thuộc tính data-id của form
    
    // Thay đổi tiêu đề của modal
    const modalTitle = modal.querySelector('h2'); // Tìm tiêu đề modal
    if (modalTitle) modalTitle.textContent = 'Chỉnh sửa danh mục';  // Thay đổi tiêu đề modal thành "Chỉnh sửa danh mục"
    
    // Thay đổi văn bản nút submit
    const submitBtn = form.querySelector('.btn-submit'); // Tìm nút submit trong form
    if (submitBtn) submitBtn.textContent = 'Cập nhật';  // Thay đổi văn bản nút submit thành "Cập nhật"
    
    // Hiển thị modal
    modal.style.display = "flex"; // Hiển thị modal chỉnh sửa danh mục
  }

  // Hiển thị các điều khiển phân trang
  function renderPagination() {     // Hàm hiển thị các điều khiển phân trang
    const paginationContainer = document.querySelector('.pagination'); // Tìm phần tử phân trang
    if (!paginationContainer) { // Nếu không tìm thấy phần tử phân trang, hiển thị lỗi
      console.error("Không tìm thấy container phân trang!");  // Không tìm thấy phần tử phân trang
      return; // Thoát hàm
    }
    
    paginationContainer.innerHTML = ''; // Xóa nội dung của container phân trang
    
    const totalPages = Math.ceil(filteredCategories.length / itemsPerPage); // Tính tổng số trang
    console.log("Tính tổng số trang:", totalPages); // Tính tổng số trang
    
    // Nút Previous (Trước)
    const prevButton = document.createElement('button');  // Tạo nút "Previous"
    prevButton.innerHTML = '&laquo;';  // Thêm ký tự mũi tên trái vào nút
    prevButton.disabled = currentPage === 1; // Vô hiệu hóa nút nếu đang ở trang đầu tiên
    prevButton.addEventListener('click', () => { // Lắng nghe sự kiện click
      if (currentPage > 1) { // Nếu không phải trang đầu tiên
        currentPage--; // Giảm số trang hiện tại
        renderCategories();  // Hiển thị lại các danh mục
      }
    });
    paginationContainer.appendChild(prevButton);  // Thêm nút "Previous" vào container phân trang
    
    // Các nút trang
    const maxVisiblePages = 5; // Số lượng trang tối đa hiển thị cùng một lúc
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2)); // Tính trang bắt đầu để hiển thị
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);  // Tính trang kết thúc
    // Điều chỉnh lại startPage nếu số trang hiển thị ít hơn số trang tối đa
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1); // Đảm bảo không vượt quá tổng số trang
    }
    
    // Trang đầu tiên
    if (startPage > 1) {  // Nếu trang bắt đầu lớn hơn 1
      const firstPageBtn = document.createElement('button');  // Tạo nút trang đầu tiên
      firstPageBtn.textContent = "1";// Tạo nút trang đầu tiên
      firstPageBtn.addEventListener('click', () => { // Lắng nghe sự kiện click
        currentPage = 1; // Đặt lại trang hiện tại về 1
        renderCategories(); // Hiển thị lại các danh mục
      });
      paginationContainer.appendChild(firstPageBtn); // Thêm nút trang đầu vào container phân trang
      // Nếu trang bắt đầu lớn hơn 2, thêm dấu ba chấm (...)
      if (startPage > 2) {  // Nếu trang bắt đầu lớn hơn 2
        const ellipsis = document.createElement('button');  // Tạo nút dấu ba chấm
        ellipsis.textContent = "..."; // Tạo nút dấu ba chấm
        ellipsis.disabled = true;// Vô hiệu hóa dấu ba chấm (không thể click vào)
        paginationContainer.appendChild(ellipsis); // Thêm dấu ba chấm vào container phân trang
      }
    }
    
    // Các nút trang
    for (let i = startPage; i <= endPage; i++) {  // Lặp qua các trang từ startPage đến endPage
      const pageButton = document.createElement('button');  // Tạo nút trang
      pageButton.textContent = i; // Tạo nút trang với số trang
      if (i === currentPage) {  // Nếu trang là trang hiện tại
        pageButton.classList.add('active'); // Nếu trang là trang hiện tại, thêm lớp 'active'
      }
      pageButton.addEventListener('click', () => { // Lắng nghe sự kiện click
        currentPage = i; // Đặt trang hiện tại thành i
        renderCategories(); // Hiển thị lại các danh mục
      });
      paginationContainer.appendChild(pageButton); // Thêm nút trang vào container phân trang
    }
    
    // Trang cuối cùng
    if (endPage < totalPages) { // Nếu trang kết thúc nhỏ hơn tổng số trang
      if (endPage < totalPages - 1) { // Nếu trang kết thúc nhỏ hơn tổng số trang - 1, thêm dấu ba chấm (...)
        const ellipsis = document.createElement('button');  // Tạo nút dấu ba chấm
        ellipsis.textContent = "..."; // Tạo nút dấu ba chấm
        ellipsis.disabled = true; // Vô hiệu hóa dấu ba chấm (không thể click vào)
        paginationContainer.appendChild(ellipsis); // Thêm dấu ba chấm vào container phân trang
      }
      
      const lastPageBtn = document.createElement('button'); // Tạo nút trang cuối cùng
      lastPageBtn.textContent = totalPages; // Tạo nút trang cuối cùng
      lastPageBtn.addEventListener('click', () => { // Lắng nghe sự kiện click
        currentPage = totalPages; // Đặt trang hiện tại thành trang cuối cùng
        renderCategories(); // Hiển thị lại các danh mục
      });
      paginationContainer.appendChild(lastPageBtn); // Thêm nút trang cuối cùng vào container phân trang
    }
    
    // Nút Next (Tiếp theo)
    const nextButton = document.createElement('button');  // Tạo nút "Next"
    nextButton.innerHTML = '&raquo;'; // Thêm ký tự mũi tên phải vào nút
    nextButton.disabled = currentPage === totalPages || totalPages === 0; // Vô hiệu hóa nút nếu đang ở trang cuối cùng hoặc không có danh mục nào
    nextButton.addEventListener('click', () => { // Lắng nghe sự kiện click
      if (currentPage < totalPages) { // Nếu không phải trang cuối cùng
        currentPage++;  // Tăng số trang hiện tại
        renderCategories(); // Hiển thị lại các danh mục
      }
    });
    paginationContainer.appendChild(nextButton);  // Thêm nút "Next" vào container phân trang
  }

  // Lọc theo trạng thái
  function filterByStatus(categories, selectedStatus) {   // Hàm lọc theo trạng thái
    if (selectedStatus === "all") { // Nếu trạng thái là "tất cả", không thay đổi danh sách
      return categories; // Nếu trạng thái là "tất cả", không thay đổi danh sách
    }
    return categories.filter(category =>    // Lọc danh mục theo trạng thái đã chọn
      category.status === (selectedStatus === "active" ? "Đang hoạt động" : "Ngừng hoạt động")  // Lọc danh mục theo trạng thái đã chọn
    ); // Lọc danh mục theo trạng thái đã chọn
  }

  // Tìm kiếm theo tên hoặc mã danh mục
  function searchByName(categories, searchTerm) { // Hàm tìm kiếm theo tên hoặc mã danh mục
    if (!searchTerm) {  // Nếu không có từ tìm kiếm, không thay đổi danh sách
      return categories; // Nếu không có từ tìm kiếm, không thay đổi danh sách
    }
    return categories.filter(category =>  // Lọc danh mục theo từ tìm kiếm
      category.category_name.toLowerCase().includes(searchTerm.toLowerCase()) || // Tìm kiếm theo tên danh mục
      category.category_code.toLowerCase().includes(searchTerm.toLowerCase()) // Tìm kiếm theo mã danh mục
    );
  }

  // Sắp xếp danh mục theo tên, ngày tạo hoặc mã
  function sortCategories(categories, sortBy) { // Hàm sắp xếp danh mục theo tên, ngày tạo hoặc mã
    const sortedCategories = [...categories]; // Tạo một bản sao của danh sách danh mục để không làm thay đổi danh sách gốc
    
    switch(sortBy) {    // Kiểm tra giá trị sắp xếp đã chọn
      case "name-asc":    
        sortedCategories.sort((a, b) => a.category_name.localeCompare(b.category_name)); // Sắp xếp theo tên tăng dần
        break;  
      case "name-desc": 
        sortedCategories.sort((a, b) => b.category_name.localeCompare(a.category_name)); // Sắp xếp theo tên giảm dần
        break;
      case "date-new":
        sortedCategories.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Sắp xếp theo ngày tạo mới nhất
        break;  
      case "date-old":
        sortedCategories.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)); // Sắp xếp theo ngày tạo cũ nhất
        break;
      case "code":
        sortedCategories.sort((a, b) => a.category_code.localeCompare(b.category_code)); // Sắp xếp theo mã danh mục
        break;
      default:  
        // Default sort by name ascending
        sortedCategories.sort((a, b) => a.category_name.localeCompare(b.category_name)); // Sắp xếp theo tên tăng dần
    }
    
    return sortedCategories; // Trả về danh sách đã sắp xếp
  }

  // Áp dụng tất cả bộ lọc và sắp xếp
  function filterAndSortCategories() {  // Hàm áp dụng tất cả bộ lọc và sắp xếp
    const statusValue = statusFilter ? statusFilter.value : 'all'; // Lấy giá trị trạng thái đã chọn
    const searchTerm = searchInput ? searchInput.value : ''; // Lấy từ tìm kiếm
    const sortValue = sortSelect ? sortSelect.value : 'date-new'; // Lấy giá trị sắp xếp đã chọn
    
    console.log("Đang lọc với:", { status: statusValue, search: searchTerm, sort: sortValue }); // In ra các giá trị lọc và sắp xếp
    
    //  // Đặt lại về trang đầu tiên khi các bộ lọc thay đổi
    currentPage = 1;  // Đặt lại trang hiện tại về 1 khi các bộ lọc thay đổi
    
    // Áp dụng bộ lọc 
    let filtered = [...categoriesData]; // Tạo một bản sao của danh sách danh mục gốc
    filtered = filterByStatus(filtered, statusValue);  // Áp dụng bộ lọc theo trạng thái
    filtered = searchByName(filtered, searchTerm); // Áp dụng bộ lọc theo từ khóa tìm kiếm
    
    // Áp dụng sắp xếp
    filtered = sortCategories(filtered, sortValue); // Áp dụng sắp xếp theo giá trị đã chọn
    
    filteredCategories = filtered; // Cập nhật danh sách danh mục đã lọc và sắp xếp
    renderCategories(); // Hiển thị danh sách danh mục đã lọc và sắp xếp
  }

  // Xử lý khi gửi form
  form.addEventListener("submit", function (e) {  // Lắng nghe sự kiện gửi form
    e.preventDefault();  // Ngừng hành động mặc định khi gửi form
    console.log("Form đã được gửi");  // In ra thông báo khi form được gửi  
    
    const categoryCode = document.getElementById("categoryCode").value.trim(); // Lấy mã danh mục từ form
    const categoryName = document.getElementById("categoryName").value.trim(); // Lấy giá trị tên danh mục
    const status = document.querySelector('input[name="status"]:checked').value;  // Lấy giá trị trạng thái được chọn
    
    if (!categoryCode || !categoryName) { // Kiểm tra nếu mã danh mục hoặc tên danh mục bị thiếu
      Swal.fire({
        icon: 'error', // Biểu tượng lỗi
        title: 'Lỗi', // Tiêu đề thông báo lỗi
        text: 'Vui lòng điền đầy đủ thông tin danh mục!'  // Nội dung thông báo lỗi
      });
      return; // Dừng lại nếu có lỗi
    }
    
    // Kiểm tra trùng lặp mã danh mục
    const mode = form.getAttribute('data-mode'); // Lấy chế độ từ thuộc tính data-mode của form
    const editId = parseInt(form.getAttribute('data-id')) || 0; // Lấy ID danh mục từ thuộc tính data-id của form (nếu có)
    
    console.log(" Chế độ Form:", mode, "ID chỉnh sửa :", editId); // In ra chế độ và ID chỉnh sửa
    // Kiểm tra xem mã danh mục đã tồn tại hay chưa
    const isDuplicate = categoriesData.some(cat =>  // Kiểm tra xem mã danh mục đã tồn tại hay chưa
      cat.category_code.toLowerCase() === categoryCode.toLowerCase() &&   // So sánh mã danh mục (không phân biệt chữ hoa chữ thường)
      (mode !== 'edit' || cat.id !== editId) // Nếu không phải là chế độ chỉnh sửa hoặc ID không trùng khớp
    );
    
    if (isDuplicate) { // Nếu mã danh mục đã tồn tại
      Swal.fire({
        icon: 'error',  // Biểu tượng lỗi
        title: 'Lỗi', // Tiêu đề thông báo lỗi
        text: 'Mã danh mục đã tồn tại!'  // Thông báo lỗi trùng mã danh mục
      });
      return; // Dừng lại nếu có lỗi
    }
    
    if (mode === 'edit') { // Nếu đang ở chế độ chỉnh sửa
      // Cập nhật danh mục
      const index = categoriesData.findIndex(cat => cat.id === editId); // Tìm chỉ mục của danh mục cần chỉnh sửa
      if (index !== -1) { // Nếu tìm thấy danh mục
        categoriesData[index].category_code = categoryCode; // Cập nhật mã danh mục
        categoriesData[index].category_name = categoryName; // Cập nhật tên danh mục
        categoriesData[index].status = status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"; // Cập nhật trạng thái danh mục
        
        // // Lưu vào localStorage
        saveCategoriesToLocalStorage(); // Lưu danh mục vào localStorage
        
        Swal.fire({ 
          icon: 'success',  // Biểu tượng thành công
          title: 'Thành công',  // Tiêu đề thông báo thành công
          text: 'Danh mục đã được cập nhật!' // Thông báo thành công cập nhật danh mục
        });
      }
    } else { // Nếu không phải chế độ chỉnh sửa (tạo mới)
      // Thêm danh mục mới
      const newCategory = { // Tạo một đối tượng danh mục mới
        id: Date.now(), // Tạo ID mới bằng cách sử dụng timestamp 
        category_code: categoryCode, // Mã danh mục
        category_name: categoryName, // Tên danh mục
        status: status === "active" ? "Đang hoạt động" : "Ngừng hoạt động", // Trạng thái danh mục
        created_at: new Date().toISOString() // Ngày tạo danh mục
      };
      
      categoriesData.push(newCategory); // Thêm danh mục mới vào mảng danh mục
      
      // Lưu vào localStorage
      saveCategoriesToLocalStorage(); // Lưu danh mục vào localStorage
      
      Swal.fire({ 
        icon: 'success',  // Biểu tượng thành công
        title: 'Thành công',  // Tiêu đề thông báo thành công
        text: 'Danh mục mới đã được thêm!' // Thông báo thành công thêm danh mục mới
      });
    }
    
    // Đặt lại form và đóng modal
    form.reset(); // Đặt lại form về trạng thái ban đầu
    form.removeAttribute('data-mode');  // Xóa thuộc tính data-mode khỏi form
    form.removeAttribute('data-id'); // Xóa thuộc tính data-id khỏi form
    
    // Đặt lại văn bản của nút submit
    const submitBtn = form.querySelector('.btn-submit');  // Tìm nút submit trong form
    if (submitBtn) submitBtn.textContent = 'Thêm';  // Đặt lại văn bản nút submit về "Thêm"
    
    // Ẩn modal 
    modal.style.display = "none"; // Ẩn modal sau khi thêm hoặc chỉnh sửa danh mục
    
    // Làm mới bảng 
    filterAndSortCategories();  // Hiển thị lại danh sách danh mục đã lọc và sắp xếp
  });
  
  // Lưu danh mục vào localStorage
  function saveCategoriesToLocalStorage() { // Hàm lưu danh mục vào localStorage
    //Chuyển đổi danh mục sang định dạng lưu trữ trong localStorage
    const categoriesForStorage = categoriesData.map(cat => ({ // Chuyển đổi danh mục sang định dạng lưu trữ trong localStorage
      id: cat.id, // ID danh mục
      code: cat.category_code,  // Mã danh mục
      name: cat.category_name,  // Tên danh mục
      status: cat.status  // Trạng thái danh mục
    }));  
    
    localStorage.setItem('categories', JSON.stringify(categoriesForStorage)); // Lưu danh mục vào localStorage
    console.log("Danh mục đã được lưu vào localStorage:", categoriesForStorage.length, "items");  // Hiển thị số lượng danh mục đã lưu
  }

  // Xử lý sự kiện cho modal
  openModalBtn.addEventListener("click", function () {  // Khi nhấn nút thêm mới danh mục
    // Đặt lại form để thêm danh mục mới
    form.reset(); // Đặt lại form về trạng thái ban đầu
    form.removeAttribute('data-mode');  // Xóa thuộc tính data-mode khỏi form
    form.removeAttribute('data-id');  // Xóa thuộc tính data-id khỏi form
    
    // Đặt lại tiêu đề modal
    const modalTitle = modal.querySelector('h2'); // Tìm tiêu đề modal
    if (modalTitle) modalTitle.textContent = 'Thêm mới danh mục'; // Tiêu đề modal
    
    modal.style.display = "flex"; // Hiển thị modal
  });

  closeModalBtn.addEventListener("click", function () { // Khi nhấn nút đóng modal
    modal.style.display = "none"; // Ẩn modal
    form.reset(); // Đặt lại form về trạng thái ban đầu
  });

  cancelBtn.addEventListener("click", function () { // Khi nhấn nút hủy
    modal.style.display = "none"; // Ẩn modal
    form.reset(); // Đặt lại form về trạng thái ban đầu
  });

  window.addEventListener("click", function (e) { // Khi nhấp ra ngoài modal
    if (e.target === modal) { // Nếu nhấp ra ngoài modal
      modal.style.display = "none"; // Ẩn modal nếu nhấp ra ngoài
      form.reset(); // Đặt lại form về trạng thái ban đầu
    }
  });

  // Xử lý sự kiện cho các bộ lọc và sắp xếp
  if (statusFilter) {
    statusFilter.addEventListener("change", filterAndSortCategories); // Khi thay đổi trạng thái, gọi hàm lọc và sắp xếp danh sách
  }
  
  if (searchInput) {  // Nếu có ô tìm kiếm
    searchInput.addEventListener("input", function() {  // Khi người dùng nhập vào ô tìm kiếm
      //  Debounce tìm kiếm để cải thiện hiệu suất
      clearTimeout(searchTimeout);  // Xóa timeout trước đó nếu có
      searchTimeout = setTimeout(() => {  // Thời gian trễ trước khi thực hiện tìm kiếm
        filterAndSortCategories(); // Lọc và sắp xếp lại danh mục
      }, 300); // Thời gian trễ 300ms trước khi thực hiện tìm kiếm
    });
  }
  
  //  Thêm chức năng cho nút tìm kiếm
  const searchButton = document.getElementById("searchButton"); // Tìm nút tìm kiếm
  if (searchButton) { // Nếu có nút tìm kiếm
    searchButton.addEventListener("click", function() { // Khi nhấn nút tìm kiếm
      filterAndSortCategories(); // Khi bấm nút tìm kiếm, gọi hàm lọc và sắp xếp danh sách
    });
  }
  
  if (sortSelect) { // Nếu có phần tử chọn sắp xếp
    sortSelect.addEventListener("change", filterAndSortCategories); // Khi thay đổi sắp xếp, gọi hàm lọc và sắp xếp danh sách
  }
  
  if (itemsPerPageSelect) { // Nếu có phần tử chọn số mục mỗi trang
    itemsPerPageSelect.addEventListener("change", function() {  // Khi thay đổi số mục mỗi trang
      itemsPerPage = parseInt(this.value);// Cập nhật số mục hiển thị mỗi trang
      currentPage = 1;// Trở về trang đầu tiên
      renderCategories(); // Hiển thị lại danh sách
    });
  }
  
  // Nút đặt lại bộ lọc (Reset filters button)
  const resetFiltersBtn = document.getElementById("resetFilters");  // Tìm nút đặt lại bộ lọc
  if (resetFiltersBtn) {  // Nếu nút tồn tại
    resetFiltersBtn.addEventListener("click", function() {  // Khi nhấn nút đặt lại bộ lọc
     // Đặt lại tất cả bộ lọc về mặc định
      if (statusFilter) statusFilter.value = "all";// Trạng thái lọc về "tất cả"
      if (searchInput) searchInput.value = "";// Xóa nội dung ô tìm kiếm
      if (sortSelect) sortSelect.value = "date-new";// Sắp xếp về "mới nhất"
      if (itemsPerPageSelect) itemsPerPageSelect.value = "5"; // Hiển thị 5 mục mỗi trang
      
      // Đặt lại thông tin phân trang
      currentPage = 1; // Quay về trang đầu tiên
      itemsPerPage = 5; // Hiển thị 5 mục mỗi trang
      
      // Áp dụng thay đổi (sau khi reset)
      filteredCategories = [...categoriesData];// Gán lại danh sách đã lọc bằng toàn bộ dữ liệu ban đầu
      renderCategories();// Hiển thị lại danh sách danh mục
    });
  }

  // Khởi tạo bảng danh mục
  console.log("Đang khởi tạo bảng danh mục với", categoriesData.length, "items"); // In ra số lượng danh mục
  filterAndSortCategories();// Gọi hàm lọc và sắp xếp danh mục khi trang được khởi tạo
  
  // ==================== Bulk Actions ====================
  
  // Chức năng chọn tất cả checkbox
  function initSelectAllCheckbox() {  
    const selectAllCheckbox = document.getElementById('selectAll'); // Tìm checkbox "chọn tất cả"
    if (!selectAllCheckbox) return; // Nếu không có checkbox "chọn tất cả" thì thoát
    
     // Đặt lại trạng thái checkbox "chọn tất cả"
    selectAllCheckbox.checked = false;  // Đặt trạng thái checkbox "chọn tất cả" về false (không chọn)
    
   // Thêm sự kiện khi người dùng thay đổi trạng thái checkbox
    selectAllCheckbox.addEventListener('change', function() { // Khi thay đổi trạng thái checkbox "chọn tất cả"
      const checkboxes = document.querySelectorAll('.category-checkbox');// Tìm tất cả các checkbox từng dòng
      checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;// Gán trạng thái giống với checkbox "chọn tất cả"
      });
      
      updateBulkActionButtons();// Cập nhật trạng thái các nút thao tác hàng loạt
    });
    
    // Gắn sự kiện cho từng ô checkbox danh mục
      document.querySelectorAll('.category-checkbox').forEach(checkbox => { // Tìm tất cả các checkbox danh mục
        checkbox.addEventListener('change', updateBulkActionButtons); // Khi thay đổi trạng thái checkbox từng dòng
    });
    
    // Cập nhật trạng thái ban đầu của các nút hành động hàng loạt
    updateBulkActionButtons();  // Gọi hàm cập nhật trạng thái các nút hành động hàng loạt
  }
  
  // Cập nhật trạng thái của các nút hành động hàng loạt
  function updateBulkActionButtons() {  // Hàm cập nhật trạng thái của các nút hành động hàng loạt
    const checkboxes = document.querySelectorAll('.category-checkbox:checked'); // Tìm tất cả các checkbox đã được chọn
    const hasSelected = checkboxes.length > 0;  // Kiểm tra xem có checkbox nào được chọn hay không
    
    //Bật hoặc tắt (enable/disable) các nút hành động hàng loạt
    const bulkDeleteBtn = document.getElementById('bulkDelete');  // Nút xóa hàng loạt
    const bulkActivateBtn = document.getElementById('bulkActivate');  // Nút kích hoạt hàng loạt
    const bulkDeactivateBtn = document.getElementById('bulkDeactivate');  // Nút ngừng hoạt động hàng loạt
    
    if (bulkDeleteBtn) bulkDeleteBtn.disabled = !hasSelected; // Nếu không có checkbox nào được chọn thì nút xóa sẽ bị vô hiệu hóa
    if (bulkActivateBtn) bulkActivateBtn.disabled = !hasSelected; // Nếu không có checkbox nào được chọn thì nút kích hoạt sẽ bị vô hiệu hóa
    if (bulkDeactivateBtn) bulkDeactivateBtn.disabled = !hasSelected; // Nếu không có checkbox nào được chọn thì nút ngừng hoạt động sẽ bị vô hiệu hóa
  }
  
  // Chức năng xóa hàng loạt danh mục
  const bulkDeleteBtn = document.getElementById('bulkDelete');  // Nút xóa hàng loạt
  if (bulkDeleteBtn) {
    bulkDeleteBtn.addEventListener('click', function() {  // Khi nhấn nút xóa hàng loạt 
      const selectedIds = getSelectedCategoryIds(); // Lấy danh sách ID của các danh mục đã chọn
      if (selectedIds.length === 0) return; // Nếu không có danh mục nào được chọn thì thoát
      
      Swal.fire({   // Hiển thị popup xác nhận xóa
        title: 'Xác nhận xóa hàng loạt',  // Tiêu đề thông báo xác nhận
        text: `Bạn có chắc chắn muốn xóa ${selectedIds.length} danh mục đã chọn?`,  // Văn bản thông báo xác nhận
        icon: 'warning',  // Biểu tượng cảnh báo
        showCancelButton: true, // Hiển thị nút hủy
        confirmButtonColor: '#d33', // Màu của nút xác nhận (Xóa)
        cancelButtonColor: '#3085d6', // Màu của nút hủy
        confirmButtonText: 'Xóa tất cả', // Văn bản nút xác nhận
        cancelButtonText: 'Hủy' // Văn bản nút hủy
      }).then((result) => { //Sau khi người dùng tương tác với popup (SweetAlert), kiểm tra nếu họ bấm xác nhận.
        if (result.isConfirmed) { // Nếu người dùng xác nhận
          // Xoá các danh mục đã được chọn
          categoriesData = categoriesData.filter(category => !selectedIds.includes(category.id)); // Lọc danh sách danh mục để loại bỏ các danh mục đã chọn
          
          // Cập nhật localStorage
          saveCategoriesToLocalStorage(); // Lưu danh mục vào localStorage
          
          // Làm mới bảng
          filterAndSortCategories();  // Gọi hàm lọc và sắp xếp lại danh sách danh mục
          
          Swal.fire(  // Hiển thị thông báo thành công
            'Đã xóa!',  // Tiêu đề thông báo thành công
            `${selectedIds.length} danh mục đã được xóa thành công.`, // Văn bản thông báo thành công
            'success' // Biểu tượng thành công
          );
        }
      });
    });
  }
  
  // Chức năng kích hoạt hàng loạt
  const bulkActivateBtn = document.getElementById('bulkActivate');  // Nút kích hoạt hàng loạt
  if (bulkActivateBtn) {  // Nút kích hoạt hàng loạt
    bulkActivateBtn.addEventListener('click', function() {  // Khi nhấn nút kích hoạt hàng loạt
      updateBulkStatus("Đang hoạt động"); // Gọi hàm cập nhật trạng thái hàng loạt
    });
  }
  
  // Chức năng ngừng hoạt động hàng loạt
  const bulkDeactivateBtn = document.getElementById('bulkDeactivate');  // Nút ngừng hoạt động hàng loạt
  if (bulkDeactivateBtn) {  // Nút ngừng hoạt động hàng loạt
    bulkDeactivateBtn.addEventListener('click', function() {  // Khi nhấn nút ngừng hoạt động hàng loạt
      updateBulkStatus("Ngừng hoạt động");  // Gọi hàm cập nhật trạng thái hàng loạt
    });
  }
  
  // Cập nhật trạng thái hàng loạt
  function updateBulkStatus(newStatus) {  // Hàm cập nhật trạng thái hàng loạt
    const selectedIds = getSelectedCategoryIds(); // Lấy danh sách ID của các danh mục đã chọn
    if (selectedIds.length === 0) return; // Nếu không có danh mục nào được chọn thì thoát
    
    const statusText = newStatus === "Đang hoạt động" ? "kích hoạt" : "ngừng hoạt động";  // Xác định văn bản trạng thái dựa trên trạng thái mới
    
    Swal.fire({ // Hiển thị popup xác nhận
      title: `Xác nhận ${statusText} hàng loạt`,  // Tiêu đề thông báo xác nhận
      text: `Bạn có chắc chắn muốn ${statusText} ${selectedIds.length} danh mục đã chọn?`,  // Văn bản thông báo xác nhận
      icon: 'question', // Biểu tượng câu hỏi
      showCancelButton: true, // Hiển thị nút hủy
      confirmButtonColor: '#3085d6',  // Màu của nút xác nhận (Kích hoạt/Ngừng hoạt động)
      cancelButtonColor: '#d33',  // Màu của nút hủy
      confirmButtonText: 'Xác nhận',  // Văn bản nút xác nhận
      cancelButtonText: 'Hủy' // Văn bản nút hủy
    }).then((result) => { // Sau khi người dùng tương tác với popup (SweetAlert), kiểm tra nếu họ bấm xác nhận.
      if (result.isConfirmed) { // Nếu người dùng xác nhận
        // Cập nhật trạng thái của các danh mục đã chọn
        selectedIds.forEach(id => { // Duyệt qua từng ID đã chọn
          const category = categoriesData.find(cat => cat.id === id); // Tìm danh mục theo ID
          if (category) { // Nếu tìm thấy danh mục
            category.status = newStatus;  // Cập nhật trạng thái danh mục
          }
        });
        
        //  Lưu localStorage
        saveCategoriesToLocalStorage(); // Lưu danh mục vào localStorage
        
        // Làm mới bảng
        filterAndSortCategories();  // Gọi hàm lọc và sắp xếp lại danh sách danh mục
        
        Swal.fire(  // Hiển thị thông báo thành công
          'Thành công!',    // Tiêu đề thông báo thành công
          `${selectedIds.length} danh mục đã được ${statusText} thành công.`, // Văn bản thông báo thành công
          'success' // Biểu tượng thành công
        );
      }
    });
  }
  
  // Lấy danh sách ID của các danh mục đã chọn
  function getSelectedCategoryIds() { // Hàm lấy danh sách ID của các danh mục đã chọn
    const checkboxes = document.querySelectorAll('.category-checkbox:checked'); // Tìm tất cả các checkbox đã được chọn
    return Array.from(checkboxes).map(checkbox => parseInt(checkbox.getAttribute('data-id')));  // Chuyển đổi danh sách checkbox thành mảng và lấy ID từ thuộc tính data-id
  }
});

// Chức năng đăng xuất
let userLogoutBtn = document.getElementById('logoutBtn'); // Tìm nút đăng xuất
if (userLogoutBtn) {  // Nếu có nút đăng xuất
  userLogoutBtn.addEventListener('click', () => { // Khi nhấn nút đăng xuất
    Swal.fire({ // Hiển thị thông báo xác nhận đăng xuất
      title: 'Bạn có chắc chắn muốn đăng xuất?',  // Tiêu đề thông báo
      icon: 'question', // Biểu tượng câu hỏi
      showCancelButton: true, // Hiển thị nút hủy
      confirmButtonColor: '#3085d6',  // Màu của nút xác nhận (Đăng xuất)
      cancelButtonColor: '#d33',  // Màu của nút hủy
      confirmButtonText: 'Đăng xuất', // Văn bản nút xác nhận
      cancelButtonText: 'Hủy' // Văn bản nút hủy
    }).then((result) => { // Sau khi người dùng tương tác với popup (SweetAlert), kiểm tra nếu họ bấm xác nhận.
      if (result.isConfirmed) { // Nếu người dùng xác nhận
        window.location.href = './login.html';  // Chuyển hướng đến trang đăng nhập
      }
    });
  });
}

// ================= SẢN PHẨM =================
(function () {  // IIFE (Immediately Invoked Function Expression) để tránh xung đột biến toàn cục
  const productModal      = document.getElementById("productModal");  // Tìm modal sản phẩm
  if (!productModal) return;                    // không phải trang sản phẩm

  const openBtn           = document.getElementById("openProductModal");  // Tìm nút mở modal sản phẩm
  const closeBtn          = document.getElementById("closeProductModal"); // Tìm nút đóng modal sản phẩm
  const cancelBtn         = document.getElementById("cancelProduct"); // Tìm nút hủy trong modal sản phẩm
  const form              = document.getElementById("productForm"); // Tìm form sản phẩm

  const codeInput         = document.getElementById("productCode"); // Tìm ô nhập mã sản phẩm
  const nameInput         = document.getElementById("productName"); // Tìm ô nhập tên sản phẩm
  const catSelect         = document.getElementById("productCategory"); // Tìm ô chọn danh mục sản phẩm
  const priceInput        = document.getElementById("productPrice");  // Tìm ô nhập giá sản phẩm

  // ---------- 1. Đổ dropdown danh mục ----------  
  const categories = JSON.parse(localStorage.getItem("categories")) || [];  // Lấy danh sách danh mục từ localStorage
  catSelect.innerHTML = `<option value="" disabled selected>-- Chọn danh mục --</option>` + // Thêm tùy chọn mặc định
    categories.map(c => `<option value="${c.id}">${c.code} - ${c.name}</option>`).join(""); // Tạo các tùy chọn danh mục từ danh sách danh mục

  // ---------- 2. Mở / đóng modal ----------
  openBtn.addEventListener("click", () => productModal.style.display = "flex"); // Khi nhấn nút mở modal, hiển thị modal sản phẩm
  [closeBtn, cancelBtn].forEach(btn => btn.addEventListener("click", () => {  // Khi nhấn nút đóng hoặc hủy modal
    productModal.style.display = "none";  // Ẩn modal sản phẩm
    form.reset(); // Đặt lại form về trạng thái ban đầu
  }));
  window.addEventListener("click", e => { if (e.target === productModal) { productModal.style.display = "none"; form.reset(); } }); // Khi nhấn ra ngoài modal, ẩn modal sản phẩm và đặt lại form

  // ---------- 3. Validate & lưu LocalStorage ----------
  form.addEventListener("submit", e => {  // Khi gửi form sản phẩm
    e.preventDefault(); // Ngăn hành động mặc định của form

    const code   = codeInput.value.trim();  // Lấy mã sản phẩm từ ô nhập
    const name   = nameInput.value.trim();  // Lấy tên sản phẩm từ ô nhập
    const catId  = +catSelect.value;  // Lấy ID danh mục từ ô chọn
    const price  = +priceInput.value; // Lấy giá sản phẩm từ ô nhập
    const status = document.querySelector("input[name='pStatus']:checked").value === "active" ? "Đang hoạt động" : "Ngừng hoạt động"; // Lấy trạng thái sản phẩm từ ô chọn

    if (!code || !name || !catId || price < 0) {  // Kiểm tra nếu mã, tên, danh mục hoặc giá không hợp lệ
      Swal.fire("Lỗi", "Vui lòng nhập đầy đủ & hợp lệ thông tin!", "error");    // Thông báo lỗi nếu có thông tin không hợp lệ
      return; //  Dừng lại nếu có lỗi 
    } 

    let products = JSON.parse(localStorage.getItem("products")) || [];  // Lấy danh sách sản phẩm từ localStorage

    // kiểm tra trùng mã
    if (products.some(p => p.code.toLowerCase() === code.toLowerCase())) {  // Kiểm tra nếu mã sản phẩm đã tồn tại
      Swal.fire("Lỗi", "Mã sản phẩm đã tồn tại!", "error"); // Thông báo lỗi trùng mã sản phẩm
      return; // Dừng lại nếu có lỗi
    }

    products.push({ // Thêm sản phẩm mới vào danh sách sản phẩm
      id: Date.now(), // Tạo ID mới bằng cách sử dụng timestamp
      code, name, // Tạo mã sản phẩm từ ô nhập
      categoryId: catId,  // Tạo ID danh mục từ ô chọn
      price,  // Tạo giá sản phẩm từ ô nhập
      status, // Tạo trạng thái sản phẩm từ ô chọn
      createdAt: new Date().toISOString() // Ngày tạo sản phẩm
    });

    localStorage.setItem("products", JSON.stringify(products)); // Lưu danh sách sản phẩm vào localStorage
    Swal.fire("Thành công", "Đã thêm sản phẩm!", "success");  // Thông báo thành công thêm sản phẩm

    productModal.style.display = "none";  // Ẩn modal sản phẩm
    form.reset(); // Đặt lại form về trạng thái ban đầu

    // TODO: gọi hàm render bảng sản phẩm nếu bạn đã có
    // renderProducts();
  });
})();