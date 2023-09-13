---
lang: en-US
title: Commits on GitHub
description: How to commit to a FAIR Data Innovations Hub repository
---

# Conventional Commits

All repositories on the FAIR Data Innovations Hub use a consistent commit workflow to ensure that all changes are reflected in the repository accurately.

Starting from Spring 2022, we have adopted to using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for all changes to our projects. This will make the commit workflow more consistent and easier to follow and allow us to better follow the standards for code development.

## Git hooks

All repositories on the FAIR Data Innovations Hub use git hooks to ensure that certain actions are handled on the developer side before being pushed into the repository.

We currently use [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky) to handle this portion of the workflow. Please verify that these are installed and configured correctly.

## Summary

> A specification for adding human and machine readable meaning to commit messages

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with [SemVer](http://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```xml
<type>[optional scope]: <description>
```

The commit contains the following structural elements, to communicate intent to all developers:

1. **fix**: a commit of the _type_ `fix` patches a bug in your codebase (this correlates with [PATCH](https://semver.org/#spec-item-6) in Semantic Versioning).
2. **feat**: a commit of the _type_ `feat` adds a new feature to your codebase (this correlates with [MINOR](https://semver.org/#spec-item-7) in Semantic Versioning).
3. **BREAKING CHANGE**: a commit that appends a `!` after the type/scope, introduces a breaking change (correlating with [MAJOR](https://semver.org/#spec-item-8) in Semantic Versioning). A BREAKING CHANGE can be part of commits of any _type_.
4. _types_ other than `fix:` and `feat:` are allowed., Refer to the [Type values allowed](#type-values-allowed) for more information.

#### Examples

Simple commit message:

```bash
git commit -m "docs: correct spelling of CHANGELOG"
```

Commit message with scope

```bash
git commit -m "feat(lang): add Polish language"
```

Commit message with `!` to draw attention to breaking change

```bash
git commit -m "feat!: send an email to the customer when a product is shipped"
```

Commit message with `scope` and `!` to draw attention to breaking change

```bash
git commit -m "feat(api)!: send an email to the customer when a product is shipped"
```

## Type

A prefix for the commit message describing the type of the change.

:::tip
The allowed types are provided as part of the [@fairdataihub/config](https://www.npmjs.com/package/@fairdataihub/config) library. To learn more about this module please refer to the [config](/general/config) documentation.
:::

### Type values allowed

- `feat`: :sparkles: Changes which introduce a new feature
- `breaking`: :boom: Changes which break compatibility
- `fix`: :bug: Changes which patch a bug
- `typo`: :pencil2: Changes which fix a typo
- `style`: :art: Changes which don't affect code logic, such as white-spaces, formatting, missing semi-colons
- `refactor`: :recycle: Changes which neither introduce a new feature nor fix a bug
- `chore`: :wrench: Changes which aren't user-facing. Primarily used for maintenance tasks.
- `wip`: :construction: Work in progress
- `docs`: :memo: Changes which affect documentation
- `ci`: :construction_worker: Updates to the continuous integration system and scripts
- `build`: :package: Changes which affect the build process
- `dx`: :technologist: Changes which improve developer experience
- `ux`: :children_crossing: Changes which improve user experience/usability
- `release`: :rocket: Code deployment or publishing to external repositories
- `add`: :heavy_plus_sign: Changes which add new files
- `perf`: :zap: Changes which improve performance
- `test`: :alembic: Changes which add missing tests or correct existing
- `revert`: :rewind: Changes which revert a previous commit
- `merge`: :twisted_rightwards_arrows: Merges a branch into another
- `security`: :lock: Fixing security issues
- `initial`: :tada: Begin a project.Initial commit
- `remove`: :fire: Changes which remove files
- `i18n`: :globe_with_meridians: Changes which affect internationalization

Here is an example of the feature type used as a prefix.

```bash
git commit -m "feat: add this new feature" -m "some description about this feature"
```

A documentation change:

```bash
git commit -m "docs: update documentation" -m "some description about this change"
```

> Commits MUST be prefixed with a type, which consists of a noun, feat, fix, etc., followed by a colon and a space.

## Scope

The standard defines use of an optional scope, which is used in additional to the required type.

> An optional scope MAY be provided after a type.
>
> A scope is a phrase describing a section of the codebase enclosed in parenthesis.
>
> e.g. ‘fix(parser):’ This would be specific to a particular part of the project.

All dependency changes can have scope of `deps`.

### Scope values allowed

- `deps`: Dependency changes

Some possible examples:

```bash
git commit -m "build(deps): upgrade packages"
```

```bash
git commit -m "style(deps): remove whitespace in requirements.txt"
```

```bash
git commit -m "fix(deps): correct typo in package.json package name"
```

## Emoji

Most of the repositories in this organization have been setup to automatically add emoji to the commit message. You don't need to do this manually. Just write out your commit as usual.

For example the following commit message: `docs: update commits documentation` will be automatically converted to: `docs: 📄 update commits documentation`

All emoji based commits are created through git hooks using the [devmoji](https://github.com/folke/devmoji) library.
