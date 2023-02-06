let menu = document.getElementById("hienthi")

function hienthimenu(id) {
    if (id == "vp" ) {
        menu.innerHTML = `<style>
        .dv h2 {
            margin: 0px 54px 20px;
            padding: 10px 0px;
        } 
        .vp-ha {
            display: flex;
            justify-content: space-evenly; 
        }
        .dv-ha-1 button {
            width: 100px;
            height: 30px;
            font-size: 15px;
            margin: 20px 0px;
        }
        .dv-ha-1 {
            text-align: center;
        }
        .dv-ha-1 img {
            object-fit: cover;
            width: 400px;
            height: 250px;
        }
        </style>
        <div class="dv">
        <h2>Văn Phòng</h2>
        <div class="vp-ha">
            <div class="dv-ha-1">
                <img src="images/vanphong1.png" alt=""><br>
                <button>Xem thêm</button>
            </div>
            <div class="dv-ha-1">
                <img src="images/vanphong2.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
            <div class="dv-ha-1">
                <img src="images/vanphong3.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
        </div>
    </div>`
    } else if (id == "nc") {
        menu.innerHTML = `<div class="dv">
        <h2>Nhà Cửa</h2>
        <div class="nc-ha">
            <div class="nc-ha-1">
                <img src="images/nha2.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
            <div class="nc-ha-1">
                <img src="images/nha3.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
            <div class="nc-ha-1">
                <img src="images/nha4.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
        </div>
    </div>`
    } else if (id == "ch") {
        menu.innerHTML = `<div class="dv">
        <h2>Cửa Hàng</h2>
        <div class="ch-ha">
            <div class="ch-ha-1">
                <img src="images/cuahang-4.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
            <div class="ch-ha-1">
                <img src="images/cuahang-2.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
            <div class="ch-ha-1">
                <img src="images/cuahang-3.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
        </div>
    </div>`
    } else if (id == "ct") {
        menu.innerHTML = `<div class="dv">
        <h2>Cây Thông Noel</h2>
        <div class="ct-ha">
            <div class="ct-ha-1">
                <img src="images/caythong-2.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
            <div class="ct-ha-1">
                <img src="images/caythong4.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
            <div class="ct-ha-1">
                <img src="images/caythong-4.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
        </div>
    </div>`
    } else if (id == "nt") {
        menu.innerHTML = `<div class="dv">
        <h2>Nhà Thờ</h2>
        <div class="nt-ha">
            <div class="nt-ha-1">
                <img src="images/nhatho-1.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
            <div class="nt-ha-1">
                <img src="images/nhatho-3.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
            <div class="nt-ha-1">
                <img src="images/nhatho-4.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
        </div>
    </div>`
    } else if (id == "pk") {
        menu.innerHTML = `<div class="dv">
        <h2>Phụ Kiện Riêng</h2>
        <div class="pk-ha">
            <div class="pk-ha-1">
            <img src="images/phukien-4.webp" alt=""><br>
                <button>Xem thêm</button>
            </div>
            <div class="pk-ha-1">
            <img src="images/phukien-2.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
            <div class="pk-ha-1">
            <img src="images/phukien-3.jpeg" alt=""><br>
                <button>Xem thêm</button>
            </div>
        </div>
    </div>`
    }
}