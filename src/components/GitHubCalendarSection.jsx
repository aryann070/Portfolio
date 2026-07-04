"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GitHubCalendarSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            GitHub{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right,var(--gradient-start),var(--gradient-end))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Contributions
            </span>
          </h2>
        </div>

        <div
          className="rounded-xl p-6 overflow-x-auto"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          {mounted && (
            <GitHubCalendar
              username="aryann070"
              blockSize={14}
              blockMargin={5}
              fontSize={14}
              showTotalCount
            />
          )}
        </div>
      </div>
    </section>
  );
}
