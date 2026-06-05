# 📊 Data Structure Recommender

A modern, interactive decision-making tool designed to help developers choose the perfect data structure for their specific algorithmic needs. Filter by language, data type, capacity behaviors, and exact **Big O Time Complexity** bounds.

## 🚀 Supported Ecosystems

Monitored and optimized across major modern programming languages:

<p> 
  <img width="40" height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java"/>
  <img  width="40" height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python"/>
  <img width="40" height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="c++"/>
  <img width="40" height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/>
</p>


---

## 🛠️ Core Recommender Architecture

The application filters data structures dynamically across a matrix of structural, behavioral, and performance characteristics:

### 1. Structural & Memory Constraints
* **Data Type:** Single Values vs. `Key: Value` Pairs.
* **Capacity Allocation:** Dynamic sizing vs. Static sizing.
* **Duplicate Policy:** Allow Duplicates (`Yes` / `No`).

### 2. Internal Behavior & Ordering
> 🟢 **Behavior Matrix Selected**
> * `Maintains Insertion Order (Arrays, Lists)`
> * `Unordered / Hash Table (Fastest Lookups)`
> * `Automatically Sorted (Red-Black Trees)`
> * `Priority Access / Min-Max (Heaps)`
> * `Last-In-First-Out (Stacks)`
> * `First-In-First-Out (Queues)`

### 3. Performance Thresholds (Big O)
| 🔍 Search / Find | ➕ Insert | 🗑️ Delete |
| :--- | :--- | :--- |
| `Any Complexity` | `Any Complexity` | `Any Complexity` |
| `O(1)` | `O(1)` | `O(1)` |
| `O(log n)` | `O(log n)` | `O(log n)` |
| `O(n)` | `O(n)` | `O(n)` |

---

## 👁️ Interface & Recommendation Previews

When parameters match, the app outputs clean execution cards that dynamically point directly to the corresponding engine's official documentation.

### 📦 Structure Card: Array
`JavaScript` `Insertion Order`

**Best for:** Acts as List, Stack, and Queue.

#### ⏱️ AVERAGE TIME COMPLEXITY
| 🔍 Search | ➕ Insert | 🗑️ Delete |
| :---: | :---: | :---: |
| <span style="color:#ef4444">**O(n)**</span> | <span style="color:#ef4444">**O(n)**</span> | <span style="color:#ef4444">**O(n)**</span> |

> ℹ️ `push()` and `pop()` at the end are O(1). `shift()` is O(n).
> 
> 🔗 **[Read JavaScript Array Documentation ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**

***

### 📦 Structure Card: HashMap / Dictionary
`Python` `Unordered / Hash Table`

**Best for:** Fast lookups, insertions, and deletions using unique keys.

#### ⏱️ AVERAGE TIME COMPLEXITY
| 🔍 Search | ➕ Insert | 🗑️ Delete |
| :---: | :---: | :---: |
| <span style="color:#22c55e">**O(1)**</span> | <span style="color:#22c55e">**O(1)**</span> | <span style="color:#22c55e">**O(1)**</span> |

> ℹ️ Performance degrades to O(n) in highly extreme key collision scenarios.
> 
> 🔗 **[Read Python Dict Documentation ↗](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)**

---

## 💻 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS

---

## 🛠️ Local Development Setup

Clone th
