import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";

function About() {
  return (
    <MainLayout>
      <div className="container">
        <h1>About Our Company</h1>
        <p>
          With over a decade of experience, we have completed high-quality
          construction projects across residential and commercial sectors.
        </p>

        <div className="cards">
          <Card title="10+ Years Experience" text="Proven expertise in construction management." />
          <Card title="150+ Projects" text="Successfully delivered across multiple cities." />
          <Card title="Quality First" text="We follow strict safety and quality standards." />
        </div>
      </div>
    </MainLayout>
  );
}

export default About;
