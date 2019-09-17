import React from "react";
import { View } from "react-360";
import { Title, Menu, Zens } from "./components";

const HomeEnvironment = () => (
    <View>
        <Menu>
            <Title>Choose an expression</Title>
            <Zens />
        </Menu>
    </View>
);

export default HomeEnvironment;