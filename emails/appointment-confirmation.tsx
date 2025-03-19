import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text } from "@react-email/components"
import { format } from "date-fns"

interface AppointmentConfirmationProps {
  name: string
  service: string
  date: string
  time: string
  confirmationNumber: string
}

export const AppointmentConfirmation = ({
  name,
  service,
  date,
  time,
  confirmationNumber,
}: AppointmentConfirmationProps) => {
  const formattedDate = format(new Date(date), "MMMM d, yyyy")

  return (
    <Html>
      <Head />
      <Preview>Your appointment at Serenity Spa has been confirmed!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://via.placeholder.com/150x50.png?text=Serenity+Spa"
            width="150"
            height="50"
            alt="Serenity Spa"
            style={logo}
          />
          <Heading style={heading}>Appointment Confirmation</Heading>
          <Text style={paragraph}>Hello {name},</Text>
          <Text style={paragraph}>
            Thank you for booking an appointment with Cloud 9 Massage. We're looking forward to helping you relax and
            rejuvenate.
          </Text>
          <Section style={appointmentDetails}>
            <Text style={detailsHeading}>Appointment Details:</Text>
            <Text style={detailsText}>Service: {service}</Text>
            <Text style={detailsText}>Date: {formattedDate}</Text>
            <Text style={detailsText}>Time: {time}</Text>
            <Text style={detailsText}>Confirmation Number: {confirmationNumber}</Text>
          </Section>
          <Text style={paragraph}>
            Please arrive 15 minutes before your scheduled appointment time to complete any necessary paperwork and
            prepare for your session.
          </Text>
          <Text style={paragraph}>
            If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance at
            (555) 123-4567.
          </Text>
          <Text style={paragraph}>We look forward to seeing you soon!</Text>
          <Text style={signature}>The Serenity Spa Team</Text>
          <Text style={address}>
            123 Wellness Avenue, Serenity City, SC 12345
            <br />
            (555) 123-4567 | info@serenityspa.com
          </Text>
          <Text style={footer}>
            <Link href="#" style={link}>
              Manage Appointment
            </Link>{" "}
            |{" "}
            <Link href="#" style={link}>
              View on Map
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: "#f5f8fa",
  fontFamily: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: "20px 0",
}

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e6ebf1",
  borderRadius: "6px",
  margin: "0 auto",
  maxWidth: "600px",
  padding: "30px",
}

const logo = {
  margin: "0 auto 20px",
  display: "block",
}

const heading = {
  color: "#b45309",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  textAlign: "center" as const,
}

const paragraph = {
  color: "#4a5568",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
}

const appointmentDetails = {
  backgroundColor: "#fef3c7",
  borderRadius: "6px",
  margin: "24px 0",
  padding: "20px",
}

const detailsHeading = {
  color: "#b45309",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 16px",
}

const detailsText = {
  color: "#4a5568",
  fontSize: "16px",
  margin: "8px 0",
}

const signature = {
  color: "#b45309",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "24px 0 8px",
}

const address = {
  color: "#718096",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "16px 0 24px",
}

const footer = {
  borderTop: "1px solid #e6ebf1",
  color: "#718096",
  fontSize: "14px",
  margin: "24px 0 0",
  paddingTop: "24px",
  textAlign: "center" as const,
}

const link = {
  color: "#b45309",
  textDecoration: "underline",
}

