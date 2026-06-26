// Home.jsx — Main dashboard page for KAVACH

import React from "react";
import StatCard from "../components/StatCard";
import ContinueLearningCard from "../components/ContinueLearningCard";
import ProgramCard from "../components/ProgramCard";
import QuickAccessCard from "../components/QuickAccessCard";
import "../styles/Home.css";

// ─── Dummy Data ──────────────────────────────────────────────────────────────

const stats = [
  {
    icon: "🔥",
    label: "Streak",
    value: "7",
    sublabel: "days in a row",
    variant: "red",
  },
  {
    icon: "⏱️",
    label: "Training Time",
    value: "12h",
    sublabel: "total hours",
    variant: "dark",
  },
  {
    icon: "📚",
    label: "Lessons",
    value: "28",
    sublabel: "completed",
    variant: "green",
  },
  {
    icon: "🏅",
    label: "Level",
    value: "Intermediate",
    sublabel: "keep it up!",
    variant: "orange",
  },
];

const currentProgram = {
  title: "Karate",
  description: "Strike with precision and power",
  progress: 35,
  tag: "Beginner",
};

const programs = [
  {
    name: "Karate",
    description: "Strike with precision and power",
    weeks: "12 weeks",
    lessons: 24,
    badge: "Beginner",
    iconBg: "#e74c3c",
    icon: "🥋",
    progress: 35,
  },
  {
    name: "Muay Thai",
    description: "Master the art of eight limbs",
    weeks: "16 weeks",
    lessons: 32,
    badge: "Intermediate",
    iconBg: "#9b59b6",
    icon: "🥊",
    progress: 0,
  },
  {
    name: "Boxing",
    description: "Float like a butterfly, sting like a bee",
    weeks: "10 weeks",
    lessons: 20,
    badge: "Beginner",
    iconBg: "#3498db",
    icon: "🥊",
    progress: 0,
  },
  {
    name: "Brazilian Jiu-Jitsu",
    description: "Technique conquers strength",
    weeks: "20 weeks",
    lessons: 40,
    badge: "Intermediate",
    iconBg: "#27ae60",
    icon: "🤼",
    progress: 0,
  },
  {
    name: "MMA",
    description: "Be ready for anything",
    weeks: "24 weeks",
    lessons: 48,
    badge: "Advanced",
    iconBg: "#e67e22",
    icon: "🥋",
    progress: 0,
  },
  {
    name: "Krav Maga",
    description: "Practical self-defense for real threats",
    weeks: "14 weeks",
    lessons: 26,
    badge: "Beginner",
    iconBg: "#2c3e50",
    icon: "🛡️",
    progress: 0,
  },
];

const quickAccess = [
  { icon: "👤", label: "Trainers" },
  { icon: "🍽️", label: "Diet Plans" },
  { icon: "🎯", label: "Coaching" },
];

// ─── Component ───────────────────────────────────────────────────────────────

const Home = () => {
  return (
    <main className="home">
      <div className="home__container">

        {/* Welcome Banner */}
        <section className="home__welcome">
          <h1 className="home__welcome-title">Welcome back, Sarah! 👋</h1>
          <p className="home__welcome-sub">Ready to continue your training?</p>
        </section>

        {/* Stats Grid — 4 cards in 2×2 */}
        <section className="home__stats">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        {/* Continue Learning */}
        <section className="home__section">
          <div className="home__section-header">
            <h2 className="home__section-title">Continue Learning</h2>
            <a href="#" className="home__section-link">↗</a>
          </div>
          <ContinueLearningCard {...currentProgram} />
        </section>

        {/* Training Programs */}
        <section className="home__section">
          <div className="home__section-header">
            <h2 className="home__section-title">
              <span className="home__section-icon">🥋</span> Training Programs
            </h2>
          </div>
          <div className="home__programs">
            {programs.map((program) => (
              <ProgramCard key={program.name} {...program} />
            ))}
          </div>
        </section>

        {/* Quick Access */}
        <section className="home__section">
          <h2 className="home__section-title">Quick Access</h2>
          <div className="home__quick-access">
            {quickAccess.map((item) => (
              <QuickAccessCard key={item.label} {...item} />
            ))}
          </div>
        </section>

        {/* Training Tip of the Day */}
        <section className="home__tip">
          <div className="home__tip-icon">💡</div>
          <div>
            <p className="home__tip-heading">Training Tip of the Day</p>
            <p className="home__tip-body">
              Practice your basic stances daily. Good foundation is the key to mastering any martial art!
            </p>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Home;
