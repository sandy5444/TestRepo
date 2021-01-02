import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Developer at Synechron, Mississauga, Canada <span> March 2020-present</span></h2>
                        <p>Clients have existing applications to secure the internal confidential details. Application tracks the email sent outside the internal domain. It sends notifications to the supervisor who takes appropriate action against it.</p>
                        <ul>
                          <li>Prototyped middle tier and database tier, created stored procedures, functions.</li>
                          <li>Led a program of workload management between infrastructure and operations support team by introducing new processes like ServiceNow tickets, remedy.</li>
                          <li>Participated as senior developer in design and implementation of end to end application using .Net technologies.</li>
                        <li>Developed small utilities to reduce manual repetitive work for data backfilling using ASP.Net and C#.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technology Analyst at Infosys Limited, Sudbury Canada <span> Feb 2012-Marc 2020</span></h2>
                        <p>Client do not have the hardware to be able to track people, equipment, high-value assets, or consumables within their operations that are enabled with LTE. Location tracking solution was required for Safety for underground mines. As part of this project tracking solution was developed using smart IoT devices and LTE networks for location tracking.</p>
                        <ul>
                          <li>Led a team of 5-6 developers working on application enhancements with a focus on coding and debugging.</li>
                          <li>Developed end to end web applications using ASP.Net MVC, HTML5, CSS33 and JQuery.</li>
                          <li>Conceptualized & implemented the code logic, developed the database structure and ensured regular maintenance 3rd party API integration.</li>
                          <li>Played a key role in application and database windows server upgrade from 2005/2008 to 2012/2016.</li>
                          <li>Experience in management modules like Change Management, Visual Source Safe, VSTS, Incident management and Problem management.</li>
                          <li>Experience in production support (24X7) for over 100 .net related applications in a critical client environment.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>System Engineer at Nihilent Technologies, Pune, India <span> Sept. 2009-Feb 2012</span></h2>
                        <p>This was a full lifecycle Dot Net project. End-to-end re-engineering of two existing systems I3MS and Infinity, which caters to day-to-day operation requirements for individual and group life insurance products. Project includes reverse engineering, re-architecture, data modeling, data migration, code migration, forward engineering, testing.</p>
                        <ul>
                          <li>Developed middle tier and database tier. Created stored procedures, functions.</li>
                          <li>Responsible for proactively working on the Analysis, Design, Coding and deployment Phases right from the beginning in agile methodology.</li>
                          <li>Participated in reverse engineering of an existing legacy system.</li>
                          <li>Developed task scheduler, windows service, web services and WCF services and deployed it on IIS.</li>
                          </ul> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
