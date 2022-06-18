---
lang: en-US
title: Commenting code
description: How to add comments to code in FAIR Data Innovations Hub projects
---

# Importance

Comments are annotations in the source code of a program that are ignored by the interpreter, and therefore have no effect on the actual output of the code. Comments can be immensely helpful in explaining the intent of what your code is or should be doing.

As a developer, it can be frustrating to delve into code written by someone else that was not properly commented, and it’s remarkably easy to forget what your own code meant when you’re no longer immersed in the context of a program. Commenting your code early on will reinforce good programming habits throughout your career to avoid these issues later on.

## Editor support - VS Code

As Visual Studio Code is most widely used editor for JavaScript, let's see how it helps to write and highlight comments.

### Intellisense

In VS Code, you just need to type /\*\* and it will create the closing tag. IntelliSense works for JSDoc tags.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1599824523773/jLH7mUGf3.gif?auto=format,compress&gif-q=60&format=webm)

### Extensions

We currently recommend two extensions to help you with writing comments:

[Document This](https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis) is really helpful when you want to generate comments based on your function:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1599825129965/Q5E8RBO4d.gif?auto=format,compress&gif-q=60&format=webm)

[Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) is a great extension that helps you to highlight comments in a more readable way:

![](https://github.com/aaron-bond/better-comments/raw/master/images/better-comments.PNG)

---

# Syntax

When it comes to syntax, there are 3 types: Single line, inline and multi-line or block level comments.

## Single line

We write these comments with two forward slashes `//`:

```js
// This is a single line comment

// Print "Hello, World!" to the console
console.log('Hello, World!');
```

```python
# This is a single line comment

# Print "Hello, World!" to the console
print("Hello, World!")
```

## Inline

These are used to annotate tiny and very specific snippets of content. Inline comments are more obvious as they are related to the exact line where we write it.

```js
let s = 'Hello world!'; // assign string literal to variable s
```

```python
s = "Hello world!" # assign string literal to variable s
```

## Multi-line or Block

Multi-line or block comments are written with the following syntax:

- it starts with a blank line starting with `/**`
- each content line starts with `*`
- it ends with a blank line starting with `*/`

This will the one we will be using going forward.

```js
/**
 * This can be a description of function.
 * Which needs more space
 * and some extra lines
 */
```

With a [JSDoc](https://jsdoc.app/) style comment, we can describle our code in a better manner.

```js
/**
 * Represents a book.
 *
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @returns {Object} - The book object itself.
 * @see {@link http://github.com|GitHub}
 * @since 1.0.1
 * @constructor
 */
function Book(title, author) {}
```

---

# Dos & Don'ts

Having said that, following are some rules I believe should be followed when writing comments. These are not exhaustive, but I think they are good enough to help you to write better code.

## Preface - Keep it short

If you're including a preface, it shouldn't be long. It should summarize the description of code. It should be short, crisp and to the point.

## Level of detail

Not every time it is required to write a comment. Take a look at the example below. This instance is self documenting.

```js
let today = new Date();
```

:::tip
As a side note, the best to declare such references as constants: `const TODAY = new Date();`, because you don't want to change TODAY's value in rest of your code.
:::

## Description beyond the name

The best names for API or function are "self-documenting", meaning they tell you basically what the API does. If your comment just repeats the name, it is not providing more information.

In the ideal comment, content is beyond those words. And comment should be rewarding with some bit of information that was not immediately obvious from the API or function name.

```js
/**
 * Registers the text to display in a tool tip.   The text
 * displays when the cursor lingers over the component.
 *
 * @param text  the string to display.  If the text is null,
 *              the tool tip is turned off for this component.
 */
function setToolTipText(text) {}
```

## Required Tags

`@param` and `@return` tags should be required, even if they're redundant with the description

## Order of Tags

Include tags in the following order:

- Description, `@description` or `@desc`
- `@author`
- `@version`
- `@param` - 🚨 Required
- `@return` - 🚨 Required
- `@exception` or `@throws`
- `@see`
- `@since`
- `@deprecated`

::: details Additional information
If you would like additional info on a better comment style, refer to this [blog post](https://blog.shhdharmen.me/comments-usage-and-best-practices-in-javascript) and this [blog post](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript).
:::
