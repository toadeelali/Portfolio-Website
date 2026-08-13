import { email } from '@/config';

export function TitleBlock() {
  return (
    <footer className="titleblock" id="contact">
      <div className="inner">
        <div className="tb-grid">
          <div className="tb-cell reveal">
            <span className="k">Drawn by</span>
            <span className="v">Adeel</span>
          </div>
          <div className="tb-cell reveal">
            <span className="k">Firm</span>
            <a className="v" href="https://codeginx.com" target="_blank" rel="noopener noreferrer">
              CodeGinx
            </a>
          </div>
          <div className="tb-cell reveal">
            <span className="k">Rev</span>
            <span className="v">2026.08</span>
          </div>
          <div className="tb-cell reveal">
            <span className="k">Email</span>
            <a className="v" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <div className="tb-cell reveal">
            <span className="k">GitHub</span>
            <a className="v" href="https://github.com/toadeelali" target="_blank" rel="noopener noreferrer">
              github.com/toadeelali
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
