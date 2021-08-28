import React from "react";

import LottieView from "lottie-react-native";

import LoadCar from "../../assets/loadCar.json";
import { Container } from "./styles";

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={LoadCar}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
