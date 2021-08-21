import React from "react";
import { useWindowDimensions, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { ConfirmButton } from "../../components/ConfirmButton";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";

type RootStackParamList = {
  Home: undefined;
};

type ScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  const nanigation = useNavigation<ScreenNavigationProp>();

  function handleCompleteRental() {
    nanigation.navigate("Home");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {"\n"} até a concessionária da RENTX {"\n"}
          pegar o seu autómovel.
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={handleCompleteRental} />
      </Footer>
    </Container>
  );
}
