import { currentYear, productUrls, yearsOfExperience } from "@/config";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero grid-bg">
        <div className="inner">
          <div className="reg-mark reg-tl" aria-hidden="true"></div>
          <div className="reg-mark reg-br" aria-hidden="true"></div>
          <div className="hero-annot reveal">
            <span>
              DWG NO. <b>ADEEL&#8209;{currentYear}</b>
            </span>
            <span>
              SCALE <b>NOT TO SCALE</b>
            </span>
            <span>
              SHEET <b>1 OF 1</b>
            </span>
          </div>
          <h1 className="headline reveal">
            Five disciplines,
            <br />
            one build <em>process.</em>
          </h1>
          <p className="sub reveal">
            Agents, interfaces, mobile apps, games, and the servers underneath —
            designed and shipped end to end under CodeGinx.
          </p>
          <a href="#work" className="cta reveal">
            View the bill of materials ↓
          </a>
        </div>
      </section>

      <section className="bom" id="work">
        <div className="inner">
          <div className="bom-head reveal">
            <h2>Bill of materials</h2>
            <p>5 items — click through to each build</p>
          </div>
          <div className="table-wrap reveal">
            <table className="bom-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Description</th>
                  <th>Detail</th>
                  <th style={{ textAlign: "right" }}>Path</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="item-no">01</td>
                  <td className="item-name">AI agent systems</td>
                  <td className="item-desc">
                    Autonomous agents, tool orchestration, LLM pipelines
                  </td>
                  <td className="item-link">
                    <Link className="row-link" href="/ai">
                      /ai <span className="arrow">→</span>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="item-no">02</td>
                  <td className="item-name">Frontend, React</td>
                  <td className="item-desc">
                    State-driven interfaces built for production
                  </td>
                  <td className="item-link">
                    <Link className="row-link" href="/web">
                      /web <span className="arrow">→</span>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="item-no">03</td>
                  <td className="item-name">Mobile apps</td>
                  <td className="item-desc">
                    Capacitor / Cordova builds shipped to iOS and Android
                  </td>
                  <td className="item-link">
                    <Link className="row-link" href="/mobile">
                      /mobile <span className="arrow">→</span>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="item-no">04</td>
                  <td className="item-name">2D games</td>
                  <td className="item-desc">
                    Canvas games built on HTML5 and EaselJS
                  </td>
                  <td className="item-link">
                    <Link className="row-link" href="/games">
                      /games <span className="arrow">→</span>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="item-no">05</td>
                  <td className="item-name">Backend + MCP</td>
                  <td className="item-desc">
                    APIs, services, and MCP servers wiring it together
                  </td>
                  <td className="item-link">
                    <Link className="row-link" href="/mcp">
                      /mcp <span className="arrow">→</span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="inner">
          <div className="bom-head reveal">
            <h2>Products</h2>
            <p>Built to run on their own</p>
          </div>
          <div className="table-wrap reveal">
            <table className="bom-table products-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th style={{ textAlign: "right" }}>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="item-name">Status monitor</td>
                  <td className="item-desc">
                    Site and API uptime monitoring, built to sell
                  </td>
                  <td>
                    <span className="status-tag dev">In development</span>
                  </td>
                  <td className="item-link">
                    <a className="row-link" href={productUrls.status.href}>
                      {productUrls.status.label}{" "}
                      <span className="arrow">→</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="item-name">MobilesLog</td>
                  <td className="item-desc">
                    Standalone site — separate brand, own domain
                  </td>
                  <td>
                    <span className="status-tag live">Live</span>
                  </td>
                  <td className="item-link">
                    <a className="row-link" href={productUrls.mobileslog.href}>
                      {productUrls.mobileslog.label}{" "}
                      <span className="arrow">→</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="item-name">PSX Investment tracker</td>
                  <td className="item-desc">Portfolio tracking, PSX-focused</td>
                  <td>
                    <span className="status-tag live">Live</span>
                  </td>
                  <td className="item-link">
                    <a
                      className="row-link"
                      href={productUrls.psx.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {productUrls.psx.label} <span className="arrow">→</span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="item-name">VoltFlow</td>
                  <td className="item-desc">EV charging network platform</td>
                  <td>
                    <span className="status-tag live">Live</span>
                  </td>
                  <td className="item-link">
                    <a
                      className="row-link"
                      href={productUrls.ev.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {productUrls.ev.label} <span className="arrow">→</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="revisions" id="experience">
        <div className="inner">
          <div className="rev-head reveal">
            <h2>Revision history</h2>
            <p>{yearsOfExperience}+ years, four engagements</p>
          </div>
          <div className="table-wrap reveal">
            <table className="rev-table">
              <thead>
                <tr>
                  <th>Rev</th>
                  <th>Period</th>
                  <th>Role</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="rev-id">A</td>
                  <td className="rev-period">2013 – 2014</td>
                  <td>Software Engineer</td>
                  <td className="rev-company">
                    <a
                      href="https://eastwestin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      East West Infiniti
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="rev-id">B</td>
                  <td className="rev-period">2014 – 2021</td>
                  <td>
                    Game Developer → Mobile App Developer → Lead Software
                    Engineer
                  </td>
                  <td className="rev-company">
                    <a
                      href="http://knowledgeplatform.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Knowledge Platform Pte Ltd
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="rev-id">C</td>
                  <td className="rev-period">2021 – Present</td>
                  <td>Lead Web Developer (Remote)</td>
                  <td className="rev-company">
                    <a
                      href="https://achievetestprep.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Achieve Test Prep
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="rev-id">D</td>
                  <td className="rev-period">2023 – 2026</td>
                  <td>Lead Frontend Engineer (Remote)</td>
                  <td className="rev-company">
                    <a
                      href="https://www.powerfulweb.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Powerfulweb
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="inner">
          <div className="label reveal">About</div>
          <p className="reveal">
            Adeel runs <b>CodeGinx</b>, a development and consulting practice
            built on 14+ years shipping games, mobile apps, and web platforms —
            now focused on agents, interfaces, and the infrastructure that
            connects them.
          </p>
        </div>
      </section>
    </>
  );
}
