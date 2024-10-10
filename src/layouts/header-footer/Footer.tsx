import React from "react";

function Footer(){
    return (
        <footer className="bg-dark text-white pt-4">
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <h5>BookStore.vn</h5>
                        <p>Chào mừng bạn đến với BookStore.vn, nơi cung cấp các loại sách chất lượng và dịch vụ tuyệt vời
                            nhất cho bạn.</p>
                    </div>


                    <div className="col-md-4">
                        <h5>Liên kết nhanh</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Trang chủ</a></li>
                            <li><a href="#" className="text-white">Thể loại sách</a></li>
                            <li><a href="#" className="text-white">Quy định và chính sách</a></li>
                            <li><a href="#" className="text-white">Liên hệ</a></li>
                        </ul>
                    </div>


                    <div className="col-md-4">
                        <h5>Liên hệ</h5>
                        <p><i className="fas fa-map-marker-alt"></i> Địa chỉ: 123 Đường Sách, Hà Nội</p>
                        <p><i className="fas fa-phone"></i> Điện thoại: +84 123 456 789</p>
                        <p><i className="fas fa-envelope"></i> Email: contact@titv.vn</p>
                    </div>
                </div>


                <div className="text-center py-3">
                    © 2024 BookStore.vn | Đã đăng ký bản quyền
                </div>
            </div>
        </footer>
    );
}

export default Footer;