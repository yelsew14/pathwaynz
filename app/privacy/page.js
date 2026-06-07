export default function PrivacyPolicy() {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "60px 24px",
        fontFamily: "Inter, sans-serif",
        color: "#1a1a2e",
        lineHeight: 1.8,
      }}
    >
      <h1
        style={{
          fontSize: 36,
          fontWeight: 800,
          color: "#0f2744",
          marginBottom: 8,
        }}
      >
        Privacy Policy
      </h1>
      <p style={{ color: "#94a3b8", fontSize: 14, marginBottom: 40 }}>
        Last updated: June 2026
      </p>

      <p style={{ marginBottom: 24, color: "#5a6a7a" }}>
        This Privacy Policy explains how PathwayNZ (
        <strong>pathway.wesstech.xyz</strong>) collects, uses, and protects your
        information when you visit our website.
      </p>

      <Section title="1. Information We Collect">
        <p>
          PathwayNZ is a static informational website. We do{" "}
          <strong>not</strong> collect any personal information such as your
          name, email address, or contact details.
        </p>
        <p style={{ marginTop: 12 }}>
          We may collect anonymous usage data through third-party services (see
          below) to help us understand how visitors use the site.
        </p>
      </Section>

      <Section title="2. Google AdSense">
        <p>
          We use Google AdSense to display advertisements on this website.
          Google AdSense may use cookies and similar technologies to show
          relevant ads based on your browsing activity.
        </p>
        <p style={{ marginTop: 12 }}>
          Google's use of advertising cookies enables it and its partners to
          serve ads based on your visit to this site and other sites on the
          internet. You may opt out of personalised advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0d7377" }}
          >
            Google Ads Settings
          </a>
          .
        </p>
      </Section>

      <Section title="3. Third-Party Services">
        <p>This site uses the following third-party services:</p>
        <ul style={{ paddingLeft: 24, marginTop: 12, color: "#5a6a7a" }}>
          <li style={{ marginBottom: 8 }}>
            <strong>labs.bible.org</strong> — provides the daily Bible verse. No
            personal data is sent to this service.
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong>Google AdSense</strong> — displays advertisements. Google
            may collect data as described in their{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0d7377" }}
            >
              Privacy Policy
            </a>
            .
          </li>
          <li style={{ marginBottom: 8 }}>
            <strong>Google Fonts</strong> — loads website fonts. Google may log
            font requests.
          </li>
        </ul>
      </Section>

      <Section title="4. Cookies">
        <p>
          We do not set any cookies ourselves. However, Google AdSense and other
          third-party services may set cookies on your device. You can control
          cookie settings through your browser preferences.
        </p>
      </Section>

      <Section title="5. External Links">
        <p>
          PathwayNZ contains links to external websites including Immigration
          New Zealand, government sites, and community resources. We are not
          responsible for the privacy practices of those sites. We encourage you
          to read their privacy policies.
        </p>
      </Section>

      <Section title="6. Children's Privacy">
        <p>
          PathwayNZ does not knowingly collect any information from children
          under the age of 13.
        </p>
      </Section>

      <Section title="7. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated date.
        </p>
      </Section>

      <Section title="8. Contact">
        <p>
          If you have any questions about this Privacy Policy, you can contact
          us through
          <strong> wesstech.xyz</strong>.
        </p>
      </Section>

      <div
        style={{
          marginTop: 48,
          paddingTop: 24,
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <a
          href="/"
          style={{
            color: "#0d7377",
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          ← Back to PathwayNZ
        </a>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#0f2744",
          marginBottom: 12,
        }}
      >
        {title}
      </h2>
      <div style={{ color: "#5a6a7a", fontSize: 15 }}>{children}</div>
    </div>
  );
}
