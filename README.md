# passGen

A lightweight front-end **Password Generator** built using **HTML, CSS, and JavaScript**. This project generates strong random passwords, allows one-click copying to clipboard, prevents reuse of previously copied passwords using browser storage, and includes basic responsive behavior.

## Overview

This project was developed as a small complete project suitable for internship demonstration. It focuses on core JavaScript functionality, DOM manipulation, browser APIs, and simple responsive UI design.

## Features

* Generate random passwords dynamically
* Password length randomized between **16 to 50 characters**
* Uses:

  * Uppercase letters
  * Lowercase letters
  * Numbers
  * Special characters (`!@#$%`)
* Copy generated password to clipboard
* Detects and prevents reuse of copied passwords
* Stores previously used passwords using **localStorage**
* Visual feedback messages:

  * "copied" success message
  * "password already used" warning
* Basic responsive layout handling for smaller screens
* Simple clean UI with hover effects

## Tech Stack

* HTML5 fileciteturn0file1
* CSS3 fileciteturn0file2
* Vanilla JavaScript fileciteturn0file0 fileciteturn0file1
* Browser APIs:

  * Clipboard API
  * Local Storage API
  * Window Resize Events

## Project Structure

```bash
passGen/
│
├── pass.html          # Main UI and password generation logic
├── pass.css           # Styling
├── resolution.js      # Responsive behavior
└── README.md
```

## How It Works

### Password Generation

A random password is created by:

* Selecting characters from a predefined character set
* Randomly choosing password length between 16 and 50
* Building the password one character at a time

## Copy Functionality

Generated passwords can be copied using:

```javascript
navigator.clipboard.writeText(text)
```

## Reuse Detection

Before saving a copied password:

* Check localStorage for existing used passwords
* If already used:

  * Show warning
* If new:

  * Save password
  * Show success feedback

## Responsive Support

Includes JavaScript-based resizing behavior for smaller devices:

* Adjusts container width
* Switches layout to centered column
* Optimizes form layout for narrow screens

Implemented using:

```javascript
window.onresize
```

## UI Highlights

* Purple themed interface
* Centered layout
* Button hover scaling effect
* Minimalist form structure
* Lightweight implementation without frameworks

## Installation

Clone or download the project:

```bash
git clone https://github.com/yourusername/passGen.git
```

Move into project folder:

```bash
cd passGen
```

Run by opening:

```bash
pass.html
```

in your browser.

## Usage

1. Click **Generate Password**
2. A strong random password appears
3. Click **Copy**
4. Password is copied to clipboard
5. Duplicate copied passwords are detected automatically

## Example Output

```text
xK9@fD#72LmQ!s8T
```

## Learning Concepts Demonstrated

This project demonstrates:

* DOM Manipulation
* Event Handling
* Randomization Logic
* Clipboard API usage
* Local Storage handling
* Responsive Design Basics
* User Feedback Systems

 

 

This project is open for educational and demonstration use.
