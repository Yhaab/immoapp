# Internationalization and SEO

## Supported locales

| Language and region     | Locale  |
| ----------------------- | ------- |
| French, Belgium         | `fr-BE` |
| Dutch, Belgium          | `nl-BE` |
| German, Belgium         | `de-BE` |
| English, United Kingdom | `en-GB` |

Use a supported explicit user preference when available; otherwise use a supported
user/system language preference. Fall back to `en-GB` when none is supported.
Keep manual switching and persisted preferences consistent across visits and
relevant application flows.

The locale implementation Issue must define preference sources, language-only
matching, URL behavior, and persistence before implementation; do not silently
invent routing or account-preference architecture.

Use appropriate local date, time, number, currency, and address formats. Respect
Belgian regional requirements for the relevant feature; UI language must not be
assumed to determine legal jurisdiction.

## Search visibility

Optimize public content for its intended languages, regions, and countries.
Provide localized metadata, coherent canonical URLs, `hreflang` relationships,
sitemaps, and indexing behavior. Keep locale links, canonical targets, and sitemap
entries consistent with the actual public routes and available translations.

Index only pages intended to appear in search engines. Private, administrative,
and other irrelevant pages must not be indexed. Search crawler directives are
not access controls; private content still requires authorization.

Include locale switching, supported and unsupported language preferences,
localized metadata, and intended indexability in the relevant acceptance criteria
and verification. URL structure, translation tooling, and country expansion
remain scoped implementation decisions requiring validation where significant.
