interface VolunteerFormEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const VolunteerFormEmail: React.FC<Readonly<VolunteerFormEmailProps>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>Volunteer Form Submission</h1>
    <p>
      from: <strong>{name}</strong> at {email}
    </p>
    <p>Phone Number: {phone}</p>
    <h2>Message: </h2>
    <p>{message}</p>
  </div>
);
