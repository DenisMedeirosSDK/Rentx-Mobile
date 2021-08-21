import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RFValue } from "react-native-responsive-fontsize";

import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

import { Load } from "../../components/Load";
import { Car } from "../../components/Car";

import Logo from "../../assets/logo.svg";
import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars,
  MyCarsButton,
} from "./styles";
import { useTheme } from "styled-components";

type RootStackParamList = {
  CarDetails: undefined;
};

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CarDetails"
>;

export function Home() {
  const nanigation = useNavigation<ScreenNavigationProp>();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  function handleCarDetails(car: CarDTO) {
    nanigation.navigate("CarDetails", { car });
  }

  function handleOpenMyCars() {
    nanigation.navigate("MyCars");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Header>
          <HeaderContent>
            <Logo width={RFValue(108)} height={RFValue(12)} />
            <TotalCars>Total de {cars.length} carros</TotalCars>
          </HeaderContent>
        </Header>
        {isLoading ? (
          <Load />
        ) : (
          <CarList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Car data={item} onPress={() => handleCarDetails(item)} />
            )}
            contentContainerStyle={{
              padding: 24,
            }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Container>
      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
      </MyCarsButton>
    </>
  );
}
