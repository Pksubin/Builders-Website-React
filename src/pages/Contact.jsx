import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

function Contact() {
  return (
    <MainLayout>
      <div className="container">
        <h1>Contact Us</h1>

        <div className="cards">
          <Card title="Phone" text="+91 98765 43210" />
          <Card title="Email" text="info@buildercompany.com" />
          <Card title="Office" text="Kochi, Kerala, India" />
        </div>
      </div>
    </MainLayout>
  );
}

export default Contact;
