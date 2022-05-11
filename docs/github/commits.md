---
lang: en-US
title: Commits on GitHub
description: How to commit to a FAIR Data Innovations Hub repository
---

# Background

All repositories on the FAIR Data Innovations Hub use a consistent commit workflow to ensure that all changes are reflected in the repository accurately.

Starting from spring 2022, we have adopted to using conventional commits for all changes to the repository. This will make the commit workflow more consistent and easier to follow and allow us to better follow the standards for code development.

## Conventional Commits

> A specification for adding human and machine readable meaning to commit messages

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with [SemVer](http://semver.org/), by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Type

A prefix for the commit message describing the type of the change.

#### Type values allowed

- `feat`: Changes which introduce a new feature
- `fix`: Changes which patch a bug
- `style`: Changes which don't affect code logic, such as white-spaces, formatting, missing semi-colons
- `refactor`: Changes which neither fix a bug nor add a feature
- `chore`: Changes which aren't user-facing such as updating dependencies, upgrading tools, file renames and moves.
- `revert`: Changes which revert a previous commit
- `perf`: Changes which improve performance
- `docs`: Changes which affect documentation
- `test`: Changes which add missing tests or correct existing
- `build`: Changes which affect CI configuration files and scripts

Here is an example of the feature type used as a prefix.

```bash
git commit -m "feat: add this new feature" -m "some description about this feature"
```

A documentation change:

```bash
git commit -m "docs: update documentation" -m "some description about this change"
```

> Commits MUST be prefixed with a type, which consists of a noun, feat, fix, etc., followed by a colon and a space.

### Scope

The standard defines use of an optional scope, which is used in additional to the required type.

> An optional scope MAY be provided after a type.
>
> A scope is a phrase describing a section of the codebase enclosed in parenthesis.
>
> e.g. ‘fix(parser):’ This would be specific to a particular project, so you cannot know the generalize scopes for all projects. The standard says you should agree in your team what the scopes would be. Perhaps based on features, projects or directories.

All dependency changes can have scope of `deps`.

Some possible examples:

```bash
git commit -m "build(deps): upgrade packages"
git commit -m "style(deps): remove whitespace in requirements.txt"
git commit -m "fix(deps): correct typo in package.json package name"
```

### Emoji

Most of the repositories in this organization have been setup to automatically add emoji to the commit message. You don't need to do this manually. Just write out your commit as usual.

For example the following commit message: `docs: update commits documentation` will be automatically converted to: `docs: 📚️ update commits documentation`