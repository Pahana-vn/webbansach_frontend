import React from "react";

function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide d-flex justify-content-center" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner text-center">
                <div className="carousel-item active">
                    <img src={('./../../../images/books/b1.jpg')} className="d-block mx-auto" style={{ width: '200px', height: 'auto' }} alt="Bookstore 1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Nhà sách Tiên Phong</h5>
                        <p>Không gian rộng rãi với hàng ngàn đầu sách hấp dẫn.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={('./../../../images/books/b2.jpg')} className="d-block mx-auto" style={{ width: '200px', height: 'auto' }} alt="Bookstore 2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Góc Sách Mới</h5>
                        <p>Nơi cập nhật những đầu sách mới nhất cho mọi lứa tuổi.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={('./../../../images/books/b3.jpg')} className="d-block mx-auto" style={{ width: '200px', height: 'auto' }} alt="Bookstore 3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Khu Sách Thiếu Nhi</h5>
                        <p>Thế giới sách đầy màu sắc dành riêng cho các em nhỏ.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
