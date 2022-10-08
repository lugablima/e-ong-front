// import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function LocationMarker() {
  const map = useMap();
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        map.flyTo([position.coords.latitude, position.coords.longitude], 13);
      });
    } else {
      alert("Sem!");
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Marker position={[latitude, longitude]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

export default function HomePage() {
  return (
    <MapContainer
      style={{ height: "calc(100vh - 56px)", marginTop: "56px" }}
      center={[-8.52795743904315, -55.91004811864883]}
      zoom={18}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
}
