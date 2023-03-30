---
lang: en-US
title: Mermaid diagrams
description: How to use mermaid diagrams in markdown files
---

# Mermaid diagrams

Mermaid diagrams are a way to create diagrams using markdown syntax. This is a great way to create diagrams that are easy to maintain and can be used in multiple places. This is especially useful for diagrams that are used in multiple places.

## How to use

To use mermaid diagrams, you can use the following syntax:

````markdown
```mermaid
graph TD
    A[Client] --> B[Load Balancer]
    B --> C[Server1]
    B --> D[Server2]
```
````

This will render the following diagram:

```mermaid
graph TD
    A[Client] --> B[Load Balancer]
    B --> C[Server1]
    B --> D[Server2]
```

## Examples

### Flowchart

```mermaid
graph LR
    A[Client] --> B[Load Balancer]
    B --> C[Server1]
    B --> D[Server2]
```

### Sequence diagram

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

### Gantt diagram

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title Adding GANTT diagram functionality to mermaid

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2               :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after section1, 3d
    Add gantt diagram to demo page      : 20h
    Add another diagram to demo page    : 48h
```
