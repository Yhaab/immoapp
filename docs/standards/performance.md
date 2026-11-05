# Performance requirements

Make performance a design requirement. Aim for excellent Google Lighthouse
results and Core Web Vitals while addressing accessibility, SEO, and best
practices alongside loading and responsiveness.

- Optimize loading, images, JavaScript payloads, other resources, and rendering.
- Avoid unnecessary requests, repeated calculations, and redundant processing.
- Use framework capabilities appropriate to installed versions.
- Measure when changes can materially affect loading, responsiveness, layout
  stability, rendering, or payload size.
- Compare relevant before/after results using representative pages and conditions.
  Record the tool, environment, scenario, and limitations in the PR.
- Distinguish Lighthouse laboratory results from real-user Core Web Vitals.
  Never claim a score or improvement without measurements.
- Never weaken security or maintainability, hide meaningful content, or alter
  measurement conditions just to inflate a score.

No numeric performance budget or guaranteed Lighthouse score is established yet.
Agree measurable acceptance criteria in performance-sensitive Issues instead of
inventing a project-wide threshold. Existing tooling does not automatically
enforce these targets.
