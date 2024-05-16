interface ContactFormEmailProps {
  name: string
  email: string
  subject: string
  message: string
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  subject,
  message
}) => (
  <div>
    <h1>Contact Form Submission</h1>
    <p>from: <strong>{name}</strong> at {email}</p>
    <h2>Message: </h2>
    <p>{message}</p>
  </div>
)