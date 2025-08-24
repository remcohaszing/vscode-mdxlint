# mdxlint

The Visual Studio Code extension for [mdxlint](https://github.com/remcohaszing/mdxlint).

## Table of Contents

- [Installation](#installation)
- [Settings](#settings)
- [Configuration file](#configuration-file)
- [Compatibility](#compatibility)
- [Related projects](#related-projects)
- [Sponsoring](#sponsoring)
- [License](#license)

## Installation

Use <kbd>Ctrl</kbd> + <kbd>P</kbd> to open the command palette. Then type the following and press
<kbd>Enter</kbd>:

```
ext install remcohaszing.vscode-mdxlint
```

## Settings

The mdxlint extension supports the following settings:

- `mdxlint.requireConfig` (`boolean`, default: `false`) — If true, only perform actions if a
  [configuration file](#configuration-file) is found.

## Configuration file

The mdxlint CLI loads one the following configuration files:

- The `mdxlint` key in `package.json`
- `.mdxlintrc`
- `.mdxlintrc.json`
- `.mdxlintrc.js`
- `.mdxlintrc.cjs`
- `.mdxlintrc.mjs`
- `.mdxlintrc.yml`
- `.mdxlintrc.yaml`

For examples, see the [mdxlint examples](https://github.com/remcohaszing/mdxlint#examples). Ignore
patterns can be specified in `.mdxlintignore`.

## Compatibility

This project is compatible with Visual Studio Code 1.103 or greater.

## Related projects

- [`mdxlint`](https://github.com/remcohaszing/mdxlint) provides the CLI.
- [`mdxlint-language-server`](https://github.com/remcohaszing/mdxlint-language-server) provides the
  language server.

## Sponsoring

If you like this project, consider sponsoring me via
[GitHub Sponsors](https://github.com/sponsors/remcohaszing).

## License

[MIT](LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing)
