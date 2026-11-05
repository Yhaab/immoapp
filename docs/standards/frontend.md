# Frontend requirements

These requirements apply to new and changed interfaces in web and admin; current
placeholder pages are not evidence of conformance.

## Responsive and accessible interfaces

Design for phones, tablets, and desktops. Verify relevant viewport sizes,
orientation, content wrapping, zoom, and touch interaction.

Target WCAG 2.2 level AA from design onward. Provide semantic structure,
accessible names, complete keyboard operation, visible focus, adequate contrast,
screen-reader compatibility, and accessible forms with associated labels,
instructions, errors, and feedback. Avoid relying on color alone.

Choose appropriate automated checks and manual keyboard/screen-reader checks for
the affected interaction. A Lighthouse accessibility score alone does not establish
WCAG conformance. Document actual verification and remaining limitations.

Follow the [component organization](../architecture/monorepo.md#module-organization)
and official Next.js/React conventions.

## Theme behavior

Support light, dark, and system modes. Default to system preference when there
is no saved explicit choice. Let users change modes and persist their preference.
An explicit light or dark choice takes precedence over system changes; system
mode follows the system.

Do not force a theme that contradicts the user's selected preference. Verify
readability, focus, controls, and contrast in both themes. The implementation and
storage mechanism must be defined in the relevant scoped Issue.

See [localization and SEO](localization-seo.md) and
[performance](performance.md) for the other frontend requirements.
