import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://www.travelandleisure.com/thmb/dSkuWAzDHqWCSV7_I291D7djm_Y=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/Empire-State-Building-observatory-1-ESBVIEWS1019-58c97df9db014ce59356f8f3bd9a627b.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9944191,
    },
    creator: 'u1'
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://www.travelandleisure.com/thmb/dSkuWAzDHqWCSV7_I291D7djm_Y=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/Empire-State-Building-observatory-1-ESBVIEWS1019-58c97df9db014ce59356f8f3bd9a627b.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9944191,
    },
    creator: 'u2'
  },
];

const UserPlaces = () => <PlaceList items={DUMMY_PLACES} />;

export default UserPlaces;
