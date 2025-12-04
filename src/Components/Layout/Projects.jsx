import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects-card">
      <h2 className="title">Projects</h2>
      <p className="subtitle">✔️ 30 done this month</p>

      <div className="projects-header">
        <span>Projects</span>
        <span>Views</span>
        <span>Liked by</span>
      </div>

      <div className="project-row">
        <div className="project-info">
          <img src="/icons/xd.png" alt="xd" className="icon" />
          <span>Art mentor app</span>
        </div>
        <span className="views">14,000</span>
        <div className="progress-group">
          <span>60%</span>
          <div className="progress">
            <div className="progress-fill" style={{ width: "60%" }}></div>
          </div>
        </div>
      </div>

      <div className="project-row">
        <div className="project-info">
          <img src="/icons/atlassian.png" alt="atl" className="icon" />
          <span>Art mentor app</span>
        </div>
        <span className="views">3,000</span>
        <div className="progress-group">
          <span>100%</span>
          <div className="progress">
            <div className="progress-fill" style={{ width: "100%" }}></div>
          </div>
        </div>
      </div>

      <div className="project-row">
        <div className="project-info">
          <img src="/icons/slack.png" alt="slack" className="icon" />
          <span>Art mentor app</span>
        </div>
        <span className="views">100</span>
        <div className="progress-group">
          <span>100%</span>
          <div className="progress">
            <div className="progress-fill" style={{ width: "100%" }}></div>
          </div>
        </div>
      </div>

      <div className="project-row">
        <div className="project-info">
          <img src="/icons/spotify.png" alt="spotify" className="icon" />
          <span>Art mentor app</span>
        </div>
        <span className="views">1000</span>
        <div className="progress-group">
          <span>100%</span>
          <div className="progress">
            <div className="progress-fill" style={{ width: "100%" }}></div>
          </div>
        </div>
      </div>

      <div className="project-row">
        <div className="project-info">
          <img src="/icons/jira.png" alt="jira" className="icon" />
          <span>Art mentor app</span>
        </div>
        <span className="views">400</span>
        <div className="progress-group">
          <span>25%</span>
          <div className="progress">
            <div className="progress-fill" style={{ width: "25%" }}></div>
          </div>
        </div>
      </div>

      <div className="project-row">
        <div className="project-info">
          <img src="/icons/invision.png" alt="inv" className="icon" />
          <span>Art mentor app</span>
        </div>
        <span className="views">600</span>
        <div className="progress-group">
          <span>40%</span>
          <div className="progress">
            <div className="progress-fill" style={{ width: "40%" }}></div>
          </div>
        </div>
      </div>

    </div>
  );
}
