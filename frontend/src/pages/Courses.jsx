import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Courses.css";

function Courses() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        return response.json();
      })
      .then((data) => {
        setCourses(data.courses || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Course fetch error:", error);
        setError("Could not load courses");
        setLoading(false);
      });
  }, []);

  const getCourseIcon = (discipline) => {
    const icons = {
      Karate: "🥋",
      Boxing: "🥊",
      MMA: "🔥",
      "Brazilian Jiu-Jitsu": "🤼",
    };

    return icons[discipline] || "🛡️";
  };

  if (loading) {
    return (
      <div className="courses-status">
        <h2>Loading training programs...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="courses-status">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="courses-page">
      <header className="courses-header">
        <div className="courses-brand">
          <div className="brand-icon">🛡️</div>

          <div>
            <h2>KAVACH</h2>
            <p>Professional Self-Defense Training</p>
          </div>
        </div>

        <div className="header-badge">
          Martial Arts Academy
        </div>
      </header>

      <section className="courses-hero">
        <h1>
          Master Your <span>Potential</span>
        </h1>

        <p>
          Explore structured martial arts programs designed for progressive
          learning, practical skills and real-world self-defense.
        </p>
      </section>

      <main className="courses-content">
        <div className="courses-topbar">
          <h2>Training Programs</h2>

          <span className="course-count">
            {courses.length} courses available
          </span>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <article
              className="course-card"
              key={course._id}
            >
              <div className="course-card-top">
                <div className="course-icon">
                  {getCourseIcon(course.discipline)}
                </div>

                <div className="course-badges">
                  <span className="badge badge-level">
                    {course.skillLevel}
                  </span>

                  <span className="badge badge-plan">
                    {course.subscriptionTier}
                  </span>
                </div>
              </div>

              <h3>{course.title}</h3>

              <p className="course-discipline">
                {course.discipline}
              </p>

              <p className="course-description">
                {course.description}
              </p>

              <div className="course-meta">
                <div className="meta-box">
                  <span>Duration</span>
                  <strong>
                    {course.durationWeeks} Weeks
                  </strong>
                </div>

                <div className="meta-box">
                  <span>Lessons</span>
                  <strong>
                    {course.totalLessons} Lessons
                  </strong>
                </div>
              </div>

              <button
                className="view-course-btn"
                onClick={() =>
                  navigate(`/courses/${course._id}`)
                }
              >
                View Course
              </button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Courses;