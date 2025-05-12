"use client";
import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

type MapComponentProps ={ 
  googleMapsUrl: string;
  width?: string;
  height?: string;
  zoomOffset?: number;
  onLocationSelect?: (location: { lat: number; lng: number }) => void;
}

const LocationMap: React.FC<MapComponentProps> = ({
  googleMapsUrl,
  width = "100%",
  height = "300px",
  onLocationSelect,
}) => {
  const containerStyle = {
    width,
    height,
  };

  const parseDMSCoordinates = (url: string) => {
    try {
      const decodedUrl = decodeURIComponent(url);
            const finalCoordsMatch = decodedUrl.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
      if (finalCoordsMatch && finalCoordsMatch[1] && finalCoordsMatch[2]) {
        return {
          lat: parseFloat(String(finalCoordsMatch[1])),
          lng: parseFloat(String(finalCoordsMatch[2]))
        };
      }
      const coordsMatch = decodedUrl.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
      if (coordsMatch && coordsMatch[1] && coordsMatch[2]) {
        return {
          lat: parseFloat(String(coordsMatch[1])),
          lng: parseFloat(String(coordsMatch[2]))
        };
      }
      const dmsMatch = decodedUrl.match(/place\/(\d+)°(\d+)'(\d+\.\d+)"([NS])\+(\d+)°(\d+)'(\d+\.\d+)"([EW])/);
      if (dmsMatch && dmsMatch.length >= 9) {
        const latDeg = String(dmsMatch[1]);
        const latMin = String(dmsMatch[2]);
        const latSec = String(dmsMatch[3]);
        const latDir = String(dmsMatch[4]);
        const lonDeg = String(dmsMatch[5]);
        const lonMin = String(dmsMatch[6]);
        const lonSec = String(dmsMatch[7]);
        const lonDir = String(dmsMatch[8]);
        let lat = Number(latDeg) + Number(latMin)/60 + Number(latSec)/3600;
        let lng = Number(lonDeg) + Number(lonMin)/60 + Number(lonSec)/3600;
        if (latDir === 'S') lat = -lat;
        if (lonDir === 'W') lng = -lng;
        return { lat, lng };
      }
      return null;
    } catch (error) {
      console.error('Error parsing coordinates:', error);
      return null;
    }
  };
  const coordinates = parseDMSCoordinates(googleMapsUrl);
  const center = coordinates || { lat: 36.7420545, lng: 3.1912555 }; // Using exact coordinates as fallback
  const zoom = 17; // default zoom level
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [, setMap] = React.useState<google.maps.Map | null>(null);
  const [, setSelectedLocation] = React.useState<google.maps.LatLng | null>(null);

  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  const handleMapClick = React.useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setSelectedLocation(e.latLng);
      onLocationSelect?.({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    }
  }, [onLocationSelect]);

  // Custom style
  const customStyle = [
    { elementType: "geometry", stylers: [{ color: "#EFF0F0" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#99B9EF" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#dfb25d" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#E57B00" }],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#FFF3E5" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#16418D" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#DFE0E2" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#081631" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#C6D7F6" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#EFF0F0" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#c2c2c2" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#6D9AE9" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#417BE2" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#194BA2" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#DFE0E2" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#dfb25d" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#99B9EF" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#4b7477" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#99B9EF" }],
    },
  ];

  const mapOptions: google.maps.MapOptions  = {
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    draggable: false,
    clickableIcons: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapId:"9ab9a2bd7e747ffd",
    zoom,
    center,
    mapTypeId: 'roadmap',
    styles: [
      ...customStyle,
    ],
  };

  return isLoaded ? (

    <GoogleMap
      mapContainerStyle={{...containerStyle,  borderRadius:20, boxShadow:"0 1px 2px 0 rgb(0 0 0 / 0.15)", borderWidth:"2px", borderColor:"#EFF0F0"}}
      options={mapOptions}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={handleMapClick}
      >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <div style={containerStyle} className="bg-neutral-100/50 border shadow-sm rounded animate-pulse"></div>
  );
};

export default React.memo(LocationMap);