import { useEffect, useState } from "react";
const { kakao } = window;

function KakaoMap() {
  const [isZoomable, setIsZoomable] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && kakao) {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(35.15066798081444, 126.85810830157614),
        level: 2,
      };
      const markerPosition = new kakao.maps.LatLng(
        35.15066798081444,
        126.85810830157614
      );
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      const map = new kakao.maps.Map(container, options);

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
      marker.setMap(map);

      map.setZoomable(isZoomable);
    } else {
      console.error("Kakao Map API가 로드되지 않았습니다.");
    }
  }, [isZoomable]);

  useEffect(() => {
    console.log(isZoomable);
  }, [isZoomable]);

  return (
    <>
      {kakao ? (
        <div
          style={{ width: "100%", height: "100%" }}
          // onClick={() => setIsZoomable(!isZoomable)}
        >
          <div
            id="map"
            style={{ width: "100%", height: "100%", minHeight: "400px" }}
          ></div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Kakao Map API가 로드되지 않았습니다.
        </div>
      )}
    </>
  );
}

export default KakaoMap;
