import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/CourseDetail.css";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch course");
        }

        return response.json();
      })
      .then((data) => {
        setCourse(data.course);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Course detail fetch error:", error);
        setError("Could not load course details");
        setLoading(false);
      });
  }, [id]);

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
      <div className="course-detail-status">
        <h2>Loading course details...</h2>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="course-detail-status">
        <h2>{error || "Course not found"}</h2>
        <button onClick={() => navigate("/courses")}>
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <header className="detail-header">
        <div className="detail-brand">
          <div className="detail-brand-icon">🛡️</div>

          <div>
            <h2>KAVACH</h2>
            <p>Professional Self-Defense Training</p>
          </div>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/courses")}
        >
          ← Back to Courses
        </button>
      </header>

      <main className="detail-content">
        <section className="detail-hero-card">
          <div className="detail-course-icon">
            {getCourseIcon(course.discipline)}
          </div>

          <div className="detail-title-area">
            <div className="detail-badges">
              <span className="detail-badge level">
                {course.skillLevel}
              </span>

              <span className="detail-badge plan">
                {course.subscriptionTier}
              </span>
            </div>

            <h1>{course.title}</h1>
            <p className="detail-discipline">
              {course.discipline}
            </p>
          </div>
        </section>

        <section className="detail-grid">
          <div className="detail-main-card">
            <h2>About This Course</h2>

            <p>{course.description}</p>

            <div className="detail-info-grid">
              <div className="detail-info-box">
                <span>Duration</span>
                <strong>{course.durationWeeks} Weeks</strong>
              </div>

              <div className="detail-info-box">
                <span>Total Lessons</span>
                <strong>{course.totalLessons} Lessons</strong>
              </div>

              <div className="detail-info-box">
                <span>Skill Level</span>
                <strong>{course.skillLevel}</strong>
              </div>

              <div className="detail-info-box">
                <span>Access Plan</span>
                <strong>{course.subscriptionTier}</strong>
              </div>
            </div>
          </div>

          <aside className="detail-side-card">
            <h3>Ready to Begin?</h3>

            <p>
              Start your structured training journey and build practical
              martial arts skills.
            </p>

            <button className="enroll-btn">
              Enroll in Course
            </button>

            <div className="course-access-note">
              🛡️ Structured KAVACH Training
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default CourseDetail;