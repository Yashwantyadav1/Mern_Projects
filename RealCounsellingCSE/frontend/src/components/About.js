import React from 'react';
import './AboutPage.css'; // Importing specific CSS for About Page

const About = () => {
  return (
    <div className="aboutpage-container">
      <header className="about-hero-section">
        <h1 className="about-hero-title">About RealCounselling CSE</h1>
      </header>

      <section className="about-content-section">
        <h2>Why We Started</h2>
        <p>
          At RealCounselling CSE, we believe in shaping the future of students by helping them discover their perfect Computer Science college.
          Our mission is to provide expert guidance and tailored solutions for students aiming to make informed decisions about their education.
        </p>

        <p>
          The journey to finding the right college can be overwhelming, and that's where we come in. With years of experience in counseling and 
          college admissions, we provide a roadmap to success by understanding each student's unique aspirations and guiding them towards institutions 
          that align with their dreams and goals.
        </p>

        <h2>Our Vision</h2>
        <p>
          Our vision is to bridge the gap between students and their ideal academic institution. We are committed to offering unbiased, personalized, 
          and effective counseling services, empowering students to take the right steps towards building a successful career in the ever-evolving 
          world of Computer Science.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>Integrity: We believe in transparency and honesty in all our services.</li>
          <li>Innovation: We constantly evolve with the changing landscape of education.</li>
          <li>Student-Centric: Our focus is always on the needs and goals of the students.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
