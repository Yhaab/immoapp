# Domains and feature documentation

The intended platform covers three domains. None has implemented business
workflows yet; this document records boundaries, not approved detailed models.

| Domain               | Intended scope                                                                               |
| -------------------- | -------------------------------------------------------------------------------------------- |
| Real estate listings | Property publication, browsing, and search                                                   |
| Property management  | Properties, rentals, leases, rent indexation, and related documents                          |
| ImmoPass             | Property lifecycle history: maintenance, renovations, repairs, works, and significant events |

## When a feature is defined

Create its documentation under `docs/domains/<domain>/<feature>.md` when there is
a concrete approved specification or implementation. Use stable descriptive
kebab-case names and link each document from this index. Add a domain index only
when navigation benefits from it.

Use these headings consistently, omitting only genuinely inapplicable sections:

1. **Status and references:** implemented, approved but pending, or proposed;
   related Issues, PRs, and owner decisions.
2. **Purpose and scope:** users, outcomes, boundaries, and explicit exclusions.
3. **Behavior and business rules:** normal, error, and boundary cases; permissions;
   approved regional requirements.
4. **Implementation and contracts:** relevant application/module locations, data
   flow, API/types, and dependencies that actually exist.
5. **Security and personal data:** affected data, authorization, validation,
   privacy and retention decisions; link shared security rules.
6. **User experience:** relevant responsive, accessibility, theme, locale, SEO,
   and performance behavior; link shared standards.
7. **Verification:** acceptance criteria, meaningful tests, and check commands.
8. **Limitations and open decisions:** separate future ideas and unresolved
   choices from current behavior.

Keep feature-specific rules here and link transversal rules instead of copying
them. Update the owning feature document with behavior or architecture changes
in the same PR. Do not fill these sections with invented decisions or create
empty feature files in anticipation of future work.
