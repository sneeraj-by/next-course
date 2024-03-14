import React, { CSSProperties } from "react";
import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-gray-500">
          <Container>
            <Text style={heading} className="font-bold text-3xl">
              Hello {name}
            </Text>
            <Link href="www.google.com">My site</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};
const heading: CSSProperties = {
  fontSize: "32px",
};
export default WelcomeTemplate;
