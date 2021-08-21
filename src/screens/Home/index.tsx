import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RFValue } from "react-native-responsive-fontsize";

import { Car } from "../../components/Car";

import Logo from "../../assets/logo.svg";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

type RootStackParamList = {
  CarDetails: undefined;
};

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CarDetails"
>;

export function Home() {
  const nanigation = useNavigation<ScreenNavigationProp>();
  const carData = {
    brand: "audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png",
  };

  function handleCarDetails() {
    nanigation.navigate("CarDetails");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 21 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <Car data={carData} onPress={handleCarDetails} />}
        contentContainerStyle={{
          padding: 24,
        }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
