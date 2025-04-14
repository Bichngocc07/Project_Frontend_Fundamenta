document.addEventListener("DOMContentLoaded", function () { 

    const openModalBtn = document.getElementById("open-modal-btn"); 
    const modal = document.getElementById("addProductModal");   
    const closeModalBtn = document.getElementById("closeModal");    
    const cancelBtn = document.getElementById("cancelBtn");
    const addProductForm = document.getElementById("addProductForm");
    const productListBody = document.getElementById("product-list");

    products = [    
    {
        id: 1,  
        product_code:" SP001",
        product_name: "Táo",        
        category_id: 1, 
        stock: 100,
        price: 20000,
        discount: 0,
        image: "https://example.com/image.jpg",
        status: "ACTIVE",
        description: "Táo nhập khẩu từ Mỹ",
        created_at: "2021-01-01T00:00:00Z"
      },
      {
        id: 2,
        product_code: "SP002",
        product_name: "Cà chua",
        category_id: 2,
        stock: 100,
        price: 20000,
        discount: 0,
        image: "https://example.com/image.jpg",
        status: "ACTIVE",
        description: "Cà chua nhập khẩu từ Hà Lan", 
        created_at: "2021-01-01T00:00:00Z"
      }
    ];

    openModalBtn.addEventListener("click", function () {    
        modal.style.display = "flex";   
    });

    
    closeModalBtn.addEventListener("click", function () {   
        modal.style.display = "none";
        addProductForm.reset();
    });

    
    cancelBtn.addEventListener("click", function () {
        modal.style.display = "none";
        addProductForm.reset();
    });

    
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            addProductForm.reset();
        }
    });

    
    addProductForm.addEventListener("submit", function (e) {
        e.preventDefault();

        
        const productCode = document.getElementById("productCode").value.trim();
        const productName = document.getElementById("productName").value.trim();
        const categoryValue = document.getElementById("categorySelect").value;
        const status = document.querySelector('input[name="status"]:checked').value;
        const quantity = document.getElementById("quantity").value;
        const price = document.getElementById("price").value;
        const discount = document.getElementById("discount").value;
        const productDetail = document.getElementById("productDetail").value;
        
        const imageFile = document.getElementById("imageInput").files[0];
        

        
        const newRow = document.createElement("tr");
    
        newRow.innerHTML = `
        <td>${productCode}</td>
        <td>${productName}</td>
        <td>${Number(price).toLocaleString()} đ</td>
        <td>${quantity}</td>
        <td>${discount}%</td>
        <td class="${status === "active" ? "active-status1" : "inactive-status"}">
          ${status === "active" ? "🟢 Đang hoạt động" : "🔴 Ngừng hoạt động"}
        </td>
        <td>
          <i class="fas fa-edit edit"></i>
          <i class="fas fa-trash delete"></i>
        </td>
      `;
        productListBody.appendChild(newRow);

        
        modal.style.display = "none";
        addProductForm.reset();
    });
});
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("addProductModal");
const closeModal = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");


openModalBtn.addEventListener("click", () => {
   
    modal.classList.add("show");
});


function hideModal() {
    console.log("111111");
    
    modal.classList.remove("show");
}

closeModal.addEventListener("click", hideModal);
cancelBtn.addEventListener("click", hideModal);


window.addEventListener("click", (e) => {
    if (e.target === modal) {
        hideModal();
    }
});
