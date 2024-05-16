interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const VolunteerFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>Contact Form Submission</h1>
    <p>
      from: <strong>{name}</strong> at {email}
    </p>
    <p>{phone}</p>
    <h2>Message: </h2>
    <p>{message}</p>
  </div>
);
