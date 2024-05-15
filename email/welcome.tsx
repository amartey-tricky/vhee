import { Html, Button, Tailwind } from "@react-email/components"

export default function Welcome() {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Html>
      <Button href="vheeworld.org" className="bg-black text-white" target="_blank">
        Click Me
      </Button>
    </Html>
    </Tailwind>
  )
}