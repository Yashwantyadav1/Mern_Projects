import React from 'react';
import './SuccessStoryPage.css'; // Importing specific CSS for Success Story Page

const SuccessStories = () => {
  return (
    <div className="success-stories-container">
      <header className="success-hero-section">
        <h1 className="success-hero-title">Our Student Success Stories</h1>
      </header>

      <section className="success-content-section">
        <h2>The Journey of Freshers: From Struggles to Success</h2>
        <p>
          When we first started, we were just like you — unsure, anxious, and overwhelmed with the college admission process. Choosing the right 
          college is a big decision, and we faced our own challenges in navigating this complex journey. The stories you are about to read reflect 
          the journey of students who, like us, once stood at the crossroads of uncertainty, only to find a path that led to success.
        </p>

        <p>
          But the good news is, you don’t have to go through it alone. Our expert team at RealCounselling CSE has been there every step of the way for 
          students, guiding them with personalized advice, handpicking the best college options, and empowering them to make informed choices. 
          Let’s take a look at some of their inspiring stories.
        </p>

        <h2>Success Stories</h2>
        <div className="story">
          <h3>Story 1: A Journey from Confusion to Clarity</h3>
          <p>
            Meet Raj, a bright student from a small town who had dreams of studying Computer Science at a top-tier university. Raj felt lost in the 
            overwhelming sea of colleges, and wasn't sure which one would be the best fit for his career aspirations. With our counseling services, 
            Raj not only found a college that aligned perfectly with his goals, but also gained insights into scholarship opportunities, student life, 
            and career prospects. Today, Raj is thriving in his CS program and feels confident about his future.
          </p>
        </div>

        <div className="story">
          <h3>Story 2: From Struggling with Choices to Making Informed Decisions</h3>
          <p>
            Priya was a high achiever in high school, but when it came time to choose a college, she was overwhelmed by the sheer number of options. 
            With conflicting advice from well-meaning relatives and friends, Priya found herself stuck in indecision. Through our tailored counseling 
            sessions, we helped Priya understand her strengths, interests, and long-term goals, ultimately guiding her to the perfect college. 
            Priya is now excelling in her studies and looks forward to a promising career in the tech industry.
          </p>
        </div>

        <div className="story">
          <h3>Story 3: Overcoming the Fear of Missing Out (FOMO)</h3>
          <p>
            When Arvind first started his college search, he was constantly worried that he might miss out on the "best" colleges. He kept comparing 
            himself to others, unsure whether he was making the right choice. With our counseling approach, Arvind was able to embrace his individuality 
            and choose a college that met both his academic and personal goals. Today, Arvind is proud of the choice he made and is thriving in his new 
            academic environment.
          </p>
        </div>

        <h2>Why Choose RealCounselling CSE?</h2>
        <p>
          These are just a few of the success stories we’ve helped write. At RealCounselling CSE, we understand that every student’s journey is unique, 
          and we are committed to supporting you at every step. We offer personalized guidance, in-depth college recommendations, and help you overcome 
          the common challenges faced during the admission process. 
        </p>
        
        <p>
          You don’t have to navigate the world of college admissions alone. Let us help you take control of your future, just like we’ve helped countless 
          other students achieve their dreams. Join RealCounselling CSE and take the first step toward your success story today!
        </p>
      </section>
    </div>
  );
};

export default SuccessStories;
