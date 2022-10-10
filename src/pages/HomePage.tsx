// import { Box, Flex, Text } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function LocationMarkerUser() {
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
      <Popup>Esta é a sua localização</Popup>
    </Marker>
  );
}

interface LocationMarkerNgoProps {
  lat: number;
  lon: number;
}

function LocationMarkerNgo({ lat, lon }: LocationMarkerNgoProps) {
  return (
    <Marker position={[lat, lon]}>
      <Popup>Esta é uma ONG!</Popup>
    </Marker>
  );
}

interface INgo {
  type: string;
  id: number;
  lat: number;
  lon: number;
  tags: object;
}

export default function HomePage() {
  const [ngo, setNgo] = useState<INgo[] | null>(null);

  useEffect(() => {
    fetch("./ngo.json", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((res) => setNgo(res.elements));
  }, []);

  return (
    <>
      {" "}
      <Show above="lg">
        <MapContainer
          style={{ height: "calc(100% - 56px)", margin: "56px 0 0 240px" }}
          center={[-8.52795743904315, -55.91004811864883]}
          zoom={18}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarkerUser />
          {!ngo
            ? ""
            : ngo.map((el) => (
                <LocationMarkerNgo key={el.id} lat={el.lat} lon={el.lon} />
              ))}
        </MapContainer>
      </Show>
      <Show below="lg">
        <MapContainer
          style={{ height: "calc(100% - 67px)", margin: "0 0 67px" }}
          center={[-8.52795743904315, -55.91004811864883]}
          zoom={18}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarkerUser />
          {!ngo
            ? ""
            : ngo.map((el) => (
                <LocationMarkerNgo key={el.id} lat={el.lat} lon={el.lon} />
              ))}
        </MapContainer>
      </Show>
    </>
  );
}
