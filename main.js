let heartIcons = document.querySelectorAll('.product-block #heartIcon');
let body = document.querySelector('body');
let listCard = document.querySelector('.list-cart');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

// thêm sự kiện onlick vào hình trái tim
// forEach để lặp qua tất cả các phần tử
// sử dụng around function
heartIcons.forEach((heartIcon) => {
  heartIcon.addEventListener('click', function () {
    // kiểm tra nếu có class "active" thì xóa nó thì và ngược lại chưa có thì add vào
    if (heartIcon.classList.contains('active')) {
      heartIcon.classList.remove('active');
    }
    else {
      heartIcon.classList.add('active');
    }
  });
})

// card
// Lấy tất cả các phần tử "Thêm vào giỏ hàng"
var addToCartButtons = document.querySelectorAll('.addCart-span');

// Lặp qua tất cả các phần tử "Thêm vào giỏ hàng" và gán sự kiện cho mỗi phần tử
addToCartButtons.forEach(function (button) {
  button.addEventListener('click', () => {
    // Thêm class "open" vào phần tử body
    body.classList.add('open');
  });
});

// Lấy phần tử "icon-close"
var closeButton = document.querySelector('.icon-close');

// Thêm event listener cho biểu tượng "icon-close" và xóa class "open"
closeButton.addEventListener('click', () => {
  // Xóa class "open" khỏi phần tử body
  body.classList.remove('open');
});

// khai báo mảng list sản phẩm
let products = [
  {
    id: 1,
    name: '5 MÀU PHẤN NƯỚC ICONIC PERFECTION CUSHION',
    image: 'spbc1.webp',
    price: 499000
  },
  {
    id: 2,
    name: '3 MÀU PHẤN NƯỚC PREMIUM BABY SKIN CUSHION',
    image: 'spbc2r.webp',
    price: 599000
  },
  {
    id: 3,
    name: '2 MÀU PHẤN MÁ HỒNG M.O.I PHIÊN BẢN GIỚI HẠN',
    image: 'spbc3.webp',
    price: 399000
  },
  {
    id: 4,
    name: '3 MÀU CHÌ KẺ MÀY PERFECT SHAPE EYEBROW M.O.I',
    image: 'spbc4.webp',
    price: 189000
  }
  , {
    id: 5,
    name: '6 MÀU SON THỎI THE STARS PHIÊN BẢN GIỚI HẠN MÙA LỄ HỘI',
    image: 'spbc6.webp',
    price: 399000
  },
  {
    id: 6,
    name: '5 MÀU PHẤN NƯỚC BABY SKIN CUSHION',
    image: 'spbc7.webp',
    price: 399000
  },
  {
    id: 7,
    name: 'COMBO PHẤN PHỦ + PHẤN NƯỚC MOI [TẶNG VÍ HOẶC COMBO DA]',
    image: 'spbc8.webp',
    price: 898000
  },
  {
    id: 8,
    name: 'SET NO.1 SON KEM NHUNG LÌ SGIRLS BY M.O.I SPECIAL EDITION [TẶNG BALO M.O.I]',
    image: 'spkm1.webp',
    price: 679000
  },
  {
    id: 9,
    name: 'SET NO.2 SON KEM NHUNG LÌ SGIRLS BY M.O.I SPECIAL EDITION [TẶNG BALO M.O.I]',
    image: 'spkm2.webp',
    price: 679000
  },
  {
    id: 10,
    name: 'COMBO PHẤN PHỦ + PHẤN NƯỚC MOI [TẶNG VÍ HOẶC COMBO DA]',
    image: 'spkm3.webp',
    price: 899000
  },
  {
    id: 11,
    name: 'MẶT NẠ BƠ TINH KHIẾT HYDROGEL DA BY M.O.I [MUA 1 TẶNG 1]',
    image: 'spkm4.webp',
    price: 199000
  },
  {
    id: 12,
    name: 'SỮA RỬA MẶT 2 TRONG 1 DẠNG GEL DA BY M.O.I',
    image: 'spkm6.webp',
    price: 479000
  },
  {
    id: 13,
    name: 'NƯỚC THẦN 5 TRONG 1 DA BY M.O.I',
    image: 'spkm7.webp',
    price: 499000
  },
  {
    id: 14,
    name: 'BỘ ĐÔI CHĂM SÓC DA DA BY M.O.I',
    image: 'spkm8.webp',
    price: 499000
  }
]

let listCards = [];

function addToCard2(key) {
  if (key >= 0 && key < products.length) {
    /*
    dùng để lấy sản phẩm từ mảng products dựa trên giá trị key
    */
    const product = products[key];

    // kiem tra xem sp co trong gio hang k
    const existingProduct = listCards.find((item) => item.id === product.id);

    if (existingProduct) {
      // neu da co sp thi tang so luong  sp len
      existingProduct.quantity++;
      // tính tiền sản phẩm đã có mà mua thêm thì lấy:
      // tiền sp * số lượng sản phẩm.
      existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
    }
    else {
      // khong ton tai vao danh sach san pham -> them
      product.quantity = 1;
      // lưu trữ tổng tiền 
      product.totalPrice = product.price;
      listCards.push(product);
    }
  }

  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = '';

  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    count += value.quantity;
    /*
        cập nhật tính toán của totalPrice bằng cách sử dụng value.totalPrice thay vì value.price.
    */
    totalPrice += value.totalPrice;

    let newDiv = document.createElement('li');

    newDiv.innerHTML = `
      <div>
        <img width = "100px" src = "./img/${value.image}">
      </div>

      <div class="nameCard">
        ${value.name};

        <div class="count">
          <span>${value.quantity}</span>
        </div>
      </div>
    `;
    listCard.appendChild(newDiv);
  })

  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}