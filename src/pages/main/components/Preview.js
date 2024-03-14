import { useEffect, useState } from "react";
import { styled } from "styled-components";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import img1 from "../../../images/kj/대기공간.png";
import img2 from "../../../images/kj/리셉션.png";
import img3 from "../../../images/kj/수술실.png";
import img4 from "../../../images/kj/진료실내부.png";
import img5 from "../../../images/kj/진료실복도.png";
import img6 from "../../../images/kj/초음파.JPG";
import img7 from "../../../images/kj/xray.png";
import img8 from "../../../images/kj/mri_정면.png";
import img9 from "../../../images/kj/mri_측면.png";
import img10 from "../../../images/kj/ct_정면.png";
import img11 from "../../../images/kj/ct_측면.png";

function Preview() {
  const handleClick = (e) => {
    console.log(e.target.name);
  };
  const handleChange = (e) => {
    console.log(e.target);
  };
  const settings = {
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,

    nextArrow: (
      <StyledNextArrow onClick={handleClick} name="next">
        <div className="innerWrapper">
          <KeyboardArrowRightIcon
            style={{
              fontSize: "3rem",
              color: "#fff",
            }}
          />
        </div>
      </StyledNextArrow>
    ),
    prevArrow: (
      <StyledPrevArrow onClick={handleClick} name="prev">
        <div className="innerWrapper">
          <KeyboardArrowLeftIcon style={{ fontSize: "3rem", color: "#fff" }} />
        </div>
      </StyledPrevArrow>
    ),
  };
  return (
    <PreviewContainer>
      <TextWrapper>
        <div className="titleWrapper">
          <h3>
            광주SKY동물메디컬센터 시설을
            <br /> <span>미리 둘러보세요</span>
          </h3>
        </div>
        <div className="contentWrapper">
          <p>
            깔끔하고 우아한 대리석 벽에 따뜻한 컬러의 조명을 더해주어 은은한
            아름다움과 고급스러움을 느끼실 수 있으며, 밝고 깨끗한 색상과
            유리벽을 이용해서 투명하고 청결한 병원 이미지를 표현했습니다.
            진료실의 유리벽은 은은한 그라데이션으로 처리하여 환자분이 보다
            편안하게 진료받으실 수 있습니다.
          </p>
        </div>
      </TextWrapper>
      <SlideWrapper>
        <div>
          <StyledSlider onChange={handleChange} {...settings}>
            <div className="slideImg img1">
              <p>고객공간</p>
            </div>
            <div className="slideImg img2">
              <p>리셉션</p>
            </div>
            <div className="slideImg img3">
              <p>수술실</p>
            </div>
            <div className="slideImg img4">
              <p>진료실</p>
            </div>
            <div className="slideImg img5">
              <p>진료실</p>
            </div>
            <div className="slideImg img6">
              <p>초음파실</p>
            </div>
            <div className="slideImg img7">
              <p>방사선실</p>
            </div>
            <div className="slideImg img8">
              <p>MRI실</p>
            </div>
            <div className="slideImg img9">
              <p>MRI실</p>
            </div>
            <div className="slideImg img10">
              <p>CT실</p>
            </div>
            <div className="slideImg img11">
              <p>CT실</p>
            </div>
          </StyledSlider>
        </div>
      </SlideWrapper>
    </PreviewContainer>
  );
}

const PreviewContainer = styled.section`
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  * {
    margin: 0;
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 68%;
    background: #e9e9e9;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

const TextWrapper = styled.div`
  width: 70vw;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  z-index: 99;

  @media screen and (max-width: 1290px) {
    flex-direction: column;
    justify-content: flex-end;
  }

  .titleWrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 100%;
    @media screen and (max-width: 1290px) {
      width: 100%;
    }
    h3 {
      font-size: 2.5rem;
      font-weight: lighter;

      span {
        font-weight: bold;
      }

      @media screen and (max-width: 1290px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 500px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 400px) {
        font-size: 1.2rem;
      }
    }
  }
  .contentWrapper {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 1290px) {
      width: 100%;
    }

    p {
      font-size: 0.9rem;
      opacity: 0.8;
      @media screen and (max-width: 1290px) {
        padding: 0;
        margin-top: 30px;
      }
      @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        margin: 0;
        height: 90%;
      }
      @media screen and (max-width: 400px) {
        margin: 0;
        height: 80%;
      }
    }
  }
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 55%;
  /* background-color: yellowgreen; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  /* 기본 스타일 */
  .slick-slide {
    transition: transform 3s ease;
    transform: scale(0.9);
    opacity: 0.6;
  }

  /* 활성화된 슬라이드에 대한 스타일 */
  .slick-slide.slick-active {
    transform: scale(1);
    opacity: 1;
    animation: fadeInAnimation 3s forwards;
  }

  @keyframes fadeInAnimation {
    from {
      opacity: 0.6;
      scale: 1.1;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  .slick-list {
    position: relative;
    z-index: 2;
    width: 70vw;
    height: 50vh;

    /* @media screen and (max-width: 1280px) {
			width: 900px;
		}
		@media screen and (max-width: 960px) {
			width: 690px;
		} */
    @media screen and (max-width: 740px) {
      width: 85vw;
    }

    div {
      /* background-color: palegoldenrod; */
      width: 100%;
      height: 100%;
    }

    .slideImg {
      p {
        margin-top: 30px;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
      }
    }
    .img1 {
      background-image: url(${img1});
      background-size: cover;
      background-position: center;
    }
    .img2 {
      background-image: url(${img2});
      background-size: cover;
      background-position: center;
    }
    .img3 {
      background-image: url(${img3});
      background-size: cover;
      background-position: center;
    }
    .img4 {
      background-image: url(${img4});
      background-size: cover;
      background-position: center;
    }
    .img5 {
      background-image: url(${img5});
      background-size: cover;
      background-position: center;
    }
    .img6 {
      background-image: url(${img6});
      background-size: cover;
      background-position: center;
    }
    .img7 {
      background-image: url(${img7});
      background-size: cover;
      background-position: center;
    }
    .img8 {
      background-image: url(${img8});
      background-size: cover;
      background-position: center;
    }
    .img9 {
      background-image: url(${img9});
      background-size: cover;
      background-position: center;
    }
    .img10 {
      background-image: url(${img10});
      background-size: cover;
      background-position: center;
    }
    .img11 {
      background-image: url(${img11});
      background-size: cover;
      background-position: center;
    }
  }

  .slick-prev {
    /* position: absolute; */
    /* z-index: 10;
		bottom: 0;
		left: 80%; */
    &:before {
      display: none;
    }
  }
  .slick-next {
    /* position: absolute;
		z-index: 10;
		bottom: 0;
		right: 0; */
    &:before {
      display: none;
    }
  }
`;

const StyledNextArrow = styled.div`
  /* width: 50px; */
  /* height: 100%; */
  position: absolute;
  z-index: 99;
  /* top: 420px; */
  right: 30px;

  .innerWrapper {
    /* background-color: #2c3032; */
    width: 50px;
    height: 50px;
  }
`;
const StyledPrevArrow = styled.div`
  /* width: 150px;
	height: 50px; */
  position: absolute;
  z-index: 10;
  left: 0;
  /* top: 420px;
	left: 600px; */

  /* right: 300px; */
  /* @media screen and (max-width: 1280px) {
		left: 300px;
	}
	@media screen and (max-width: 960px) {
		left: 130px;
	}
	@media screen and (max-width: 740px) {
		left: 0;
	} */

  .innerWrapper {
    /* background-color: #30536f; */
    /* width: 550px;
		height: 50px; */

    /* @media screen and (max-width: 1280px) {
			width: 300px;
		}
		@media screen and (max-width: 960px) {
			width: 200px;
		} */
    /* @media screen and (max-width: 740px) {
			width: 520px;
		}
		@media screen and (max-width: 550px) {
			width: 380px;
		} */
  }
`;

export default Preview;
