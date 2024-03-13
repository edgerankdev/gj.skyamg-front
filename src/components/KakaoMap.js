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
          style={{ width: "100%", height: "100%", minHeight: "400px" }}
          // onClick={() => setIsZoomable(!isZoomable)}
        >
          <div id="map" style={{ width: "100%", height: "100%" }}></div>
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
