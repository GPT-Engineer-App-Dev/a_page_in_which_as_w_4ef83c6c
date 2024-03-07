import { Box, Container, Heading, Select, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const countriesData = {
  USA: {
    currency: "USD",
    states: {
      California: ["Los Angeles", "San Francisco"],
      Texas: ["Houston", "Dallas"],
    },
  },
  India: {
    currency: "INR",
    states: {
      Maharashtra: ["Mumbai", "Pune"],
      Karnataka: ["Bangalore", "Mysore"],
    },
  },
  // Add more countries, currencies, and states as needed
};

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState(""); // Reset state selection when country changes
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const countries = Object.keys(countriesData);
  const states = selectedCountry ? Object.keys(countriesData[selectedCountry].states) : [];
  const cities = selectedCountry && selectedState ? countriesData[selectedCountry].states[selectedState] : [];

  return (
    <Container>
      <VStack spacing={4} mt={8}>
        <Heading>Select Country</Heading>
        <Select placeholder="Select country" onChange={handleCountryChange}>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>

        {selectedCountry && (
          <>
            <Text>Currency: {countriesData[selectedCountry].currency}</Text>

            <Heading>Select State</Heading>
            <Select placeholder="Select state" onChange={handleStateChange}>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </>
        )}

        {selectedState && (
          <Box>
            <Heading>Select City</Heading>
            {cities.map((city) => (
              <Text key={city}>{city}</Text>
            ))}
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
