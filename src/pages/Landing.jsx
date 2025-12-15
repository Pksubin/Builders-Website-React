import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

function Landing() {
  return (
    <MainLayout>
      <div className="container">
        <h1>Trusted Builders for Modern Construction</h1>
        <p>
          We deliver residential and commercial projects with quality,
          transparency, and on-time completion.
        </p>

        <h2>Our Services</h2>
        <div className="cards">
          <Card title="Residential Construction" text="Villas, apartments, and custom homes built to last." />
          <Card title="Commercial Buildings" text="Offices, malls, and industrial structures." />
          <Card title="Renovation" text="Modern upgrades for existing spaces." />
          <Card title="Interior Works" text="Functional and aesthetic interior solutions." />
        </div>
      </div>
    </MainLayout>
  );
}

export default Landing;
