import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  SVGOverlay,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const bounds = [
    [59.49, -0.08],
    [51.5, -0.06],
  ];
  return (
    <MapContainer
      center={[51.505, -0.09]}
      scrollWheelZoom={false}
      maxZoom={3}
      zoom={0}
      style={{ height: "80vh", width: "100%", marginTop: "5rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        minZoom={0}
        maxZoom={3}
        noWrap={false}
        url="../map/{z}_{x}_{y}.png"
      />
      <SVGOverlay attributes={{ stroke: "red" }} bounds={bounds}>
        <rect x="0" y="0" width="100%" height="100%" fill="blue" />
        <circle r="5" cx="10" cy="10" fill="red" />
        <text x="50%" y="50%" stroke="white">
          text
        </text>
      </SVGOverlay>
    </MapContainer>
  );
};

export default Map;
