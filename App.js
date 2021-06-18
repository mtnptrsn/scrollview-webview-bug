import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView contentContainerStyle={{ width: "100%" }}>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <WebView
            style={{ height: 500, width: "100%" }}
            source={{
              html: `
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <p>------</p>
            <p>This is a p tag inside the web view</p>
            <p>This is a p tag inside the web view</p>
            <p>This is a p tag inside the web view</p>
            <p>This is a p tag inside the web view</p>
            <p>This is a p tag inside the web view</p>
            <p>------</p>
          `,
            }}
            originWhitelist={["*"]}
          />
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
          <Text>This is a native text component</Text>
        </ScrollView>
      </View>
    </View>
  );
}
