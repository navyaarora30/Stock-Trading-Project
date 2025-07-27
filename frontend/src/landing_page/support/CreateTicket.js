import React from "react";

const ACCORDION_DATA = [
  {
    title: "Account Opening",
    icon: "fa-solid fa-circle-plus",
    links: [
      { name: "Resident individual", url: "#" },
      { name: "Minor", url: "#" },
      { name: "Non Resident Indian (NRI)", url: "#" },
      { name: "Company, Partnership, HUF and LLP", url: "#" },
      { name: "Glossary", url: "#" },
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fas fa-circle-user",
    links: [
      { name: "Your Profile", url: "#" },
      { name: "Account modification", url: "#" },
      {
        name: "Client Master Report (CMR) and Depository Participant (DP)",
        url: "#",
      },
      { name: "Nomination", url: "#" },
      { name: "Transfer and conversion of securities", url: "#" },
    ],
  },
  {
    title: "Kite",
    icon: "fa-solid fa-lines-leaning",
    links: [
      { name: "IPO", url: "#" },
      { name: "Trading FAQs", url: "#" },
      { name: "Margin Trading Facility (MTF) and Margins", url: "#" },
      { name: "Charts and orders", url: "#" },
      { name: "Alerts and Nudges", url: "#" },
      { name: "General", url: "#" },
    ],
  },
  {
    title: "Funds",
    icon: "fa-solid fa-sack-dollar",
    links: [
      { name: "Add money", url: "#" },
      { name: "Withdraw money", url: "#" },
      { name: "Add bank accounts", url: "#" },
      { name: "eMandates", url: "#" },
    ],
  },
  {
    title: "Console",
    icon: "fa-solid fa-user-tie",
    links: [
      { name: "Portfolio", url: "#" },
      { name: "Corporate actions", url: "#" },
      { name: "Funds statement", url: "#" },
      { name: "Reports", url: "#" },
      { name: "Profile", url: "#" },
      { name: "Segments", url: "#" },
    ],
  },
  {
    title: "Coin",
    icon: "fa-solid fa-coins",
    links: [
      { name: "Mutual funds", url: "#" },
      { name: "National Pension Scheme (NPS)", url: "#" },
      { name: "Fixed Deposit (FD)", url: "#" },
      { name: "Features on Coin", url: "#" },
      { name: "Payments and Orders", url: "#" },
      { name: "General", url: "#" },
    ],
  },
];

const NOTICES = [
  {
    text: "Quarterly Settlement of Funds - July 2025",
    url: "#",
  },
  {
    text: "Exclusion of F&O contracts on 8 securities from August 29, 2025",
    url: "#",
  },
];

const QUICK_LINKS = [
  { text: "Track account opening", url: "#" },
  { text: "Track segment activation", url: "#" },
  { text: "Intraday margins", url: "#" },
  { text: "Kite user manual", url: "#" },
];

function SupportPortal() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Left: Accordion Sections */}
        <div className="col-lg-8">
          <div className="accordion" id="supportAccordion">
            {ACCORDION_DATA.map((section, idx) => (
              <div className="accordion-item border-0 mb-3" key={section.title}>
                <h2 className="accordion-header" id={`heading${idx}`}>
                  <button
                    className={`accordion-button fw-bold${
                      idx !== 0 ? " collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${idx}`}
                    aria-expanded={idx === 0 ? "true" : "false"}
                    aria-controls={`collapse${idx}`}
                    style={{ background: "white", border: "none" }}
                  >
                    <span
                      className="me-3"
                      style={{ color: "#1976d2", fontSize: 22 }}
                    >
                      <i className={section.icon}></i>
                    </span>
                    {section.title}
                  </button>
                </h2>
                <div
                  id={`collapse${idx}`}
                  className={`accordion-collapse collapse${
                    idx === 0 ? " show" : ""
                  }`}
                  aria-labelledby={`heading${idx}`}
                  data-bs-parent="#supportAccordion"
                >
                  <div className="accordion-body">
                    <ul
                      className="mb-0"
                      style={{ listStyle: "disc", paddingLeft: 20 }}
                    >
                      {section.links.map((link) => (
                        <li key={link.name} className="mb-2">
                          <a
                            href={link.url}
                            className="text-primary text-decoration-none"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Notices and Quick Links */}
        <div className="col-lg-4">
          {/* Notices */}
          <div
            className="p-3 mb-3 fs-6"
            style={{
              background: "#fdf6ee",
              borderLeft: "8px solid orange",
              borderRadius: "3px",
            }}
          >
            <ul className="mb-0" style={{ paddingLeft: 17 }}>
              {NOTICES.map((notice) => (
                <li key={notice.text} style={{ marginBottom: ".5em" }}>
                  <a
                    href={notice.url}
                    className="text-primary text-decoration-underline"
                  >
                    {notice.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Quick Links */}
          <div className="card">
            <div className="card-header bg-light border fw-bold">
              Quick links
            </div>
            <div className="card-body p-0">
              <ol className="list-group list-group-flush border mb-0">
                {QUICK_LINKS.map((link, idx) => (
                  <li
                    key={link.text}
                    className="list-group-item px-3 py-2 border"
                  >
                    <a
                      href={link.url}
                      className="text-primary text-decoration-none"
                    >
                      {`${idx + 1}. ${link.text}`}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportPortal;
