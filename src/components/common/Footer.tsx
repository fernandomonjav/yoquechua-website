import { Container } from '../ui'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <p>YoQuechua © {new Date().getFullYear()}</p>
      </Container>
    </footer>
  )
}
