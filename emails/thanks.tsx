import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ThankYouEmailProps {
  name: string;
}

export const ThankContact: React.FC<ThankYouEmailProps> = ({ name }) => (
  <Tailwind>
    <Html>
      <Container>
        <Head>
          <title>Thank you for Contacting US</title>
        </Head>
        <Body>
          <Section>
            <Heading
              as="h1"
              className="text-slate-500 font-semibold capitalize font-sans"
            >
              Dear {name}
            </Heading>
          </Section>
          <Section>
            <Text>
              Thank you for reaching out to VheeWorld Foundation. We appreciate
              your interest and taking the time to contact us.
            </Text>
            <Text>
              Your message has been received, and one of our team members will
              get back to you shortly with a response.
            </Text>
            <Text>
              We value your support and look forward to continuing our mission
              of empowering lives and transforming communities.
            </Text>
            <Text>Best regards,</Text>
            <Text>The VheeWorld Foundation Team</Text>
          </Section>
        </Body>
      </Container>
    </Html>
  </Tailwind>
);
