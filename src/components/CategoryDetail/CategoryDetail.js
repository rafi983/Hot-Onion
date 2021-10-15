import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import useFoodItems from "../../hooks/useFoodItems";
import "./CategoryDetail.css";

SwiperCore.use([Navigation]);

const CategoryDetail = () => {
  const { catId, category } = useParams();
  const { foods, images } = useFoodItems();
  const [catDetail, setCatDetail] = useState({});
  const [foodImg, setFoodImg] = useState([]);

  useEffect(() => {
    const singleCatDetail = foods?.find((food) => food.id === Number(catId));
    setCatDetail(singleCatDetail);
  }, [foods, catId]);

  useEffect(() => {
    const restImages = images?.filter(
      (img) => img.id !== Number(catId) && img.category === category
    );
    setFoodImg(restImages);
  }, [images, catId, category]);

  return (
    <div className="detail">
      <div className="container">
        <div className="row d-flex mt-4 align-items-center">
          <div className="col-md-6 mt-4">
            <h1>{catDetail?.title}</h1>
            <p className="w-75">{catDetail?.mealDetail}</p>
            <p className="fs-1 fw-bold">${catDetail?.price}</p>
            <button className="btn btn-danger px-4">
              <i className="fas fa-shopping-cart"></i>Add
            </button>

            <div className="row">
              <div className="col-md-10 mt-5 ">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={10}
                  slidesPerView={2}
                  navigation
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {foodImg.map((ig) => (
                    <SwiperSlide>
                      <img src={ig?.image} className="carousel-img" alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={catDetail?.image} className="meal-img img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
