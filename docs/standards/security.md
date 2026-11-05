# Security and privacy

These rules apply throughout design, implementation, testing, and review.
Do not assume planned authentication or data protection controls already exist.

- Apply secure by design and least privilege. Identify relevant threats and
  known vulnerabilities before selecting an implementation.
- Validate untrusted inputs on the server at trust boundaries. Client validation
  improves usability but does not replace server validation.
- Check authorization for sensitive operations and access to individual
  resources; authentication alone does not grant permission.
- Prevent injections, XSS, CSRF, and unauthorized access using controls appropriate
  to the framework, data flow, and authentication context. Do not assume every
  threat requires the same mechanism.
- Protect personal data and secrets in transit, storage, logs, and error paths.
  Never commit secrets or include them in logs, fixtures, or documentation.
- Return useful errors without disclosing credentials, sensitive personal data,
  internal stack traces, or implementation details to unauthorized clients.
- Apply GDPR principles, including data minimization, purpose limitation,
  appropriate retention, privacy by design/default, and access controls.
  Document affected data and controls in the owning feature specification.
- Include relevant failure and authorization cases in verification. Never ignore
  a vulnerability or weaken a control merely to make checks pass.

Decisions such as retention periods, lawful bases, external processors, and
sensitive-data access must be established for the actual feature with the owner;
do not invent legal or product policy. Report discovered security gaps and
out-of-scope issues through the [delivery workflow](../contributing/workflow.md).
