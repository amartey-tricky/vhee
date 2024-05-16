import { Button, Html, Tailwind } from "@react-email/components";

export default function Welcome() {
  return (
    <Tailwind>
      <Html>
        <Button
          href="vheeworld.org"
          className="bg-black text-white"
          target="_blank"
        >
          Click Me
        </Button>
      </Html>
    </Tailwind>
  );
}
