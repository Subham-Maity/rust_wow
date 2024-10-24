---
sidebar_position: 0
---

import {Highlight} from "@site/src/components/highlighter";

import useBaseUrl from '@docusaurus/useBaseUrl';


# Rust in One Shot
TOC
- [What is Rust ?](#-what-is-rust-)
- [Install](#-install)
- [One Interesting Fact](#-one-interesting-fact)
- [Run Program](#-run-program)
- [What is Cargo](#-what-is-cargo-)

## ✅ Chapter 1

### 🤔 What is Rust ?
Rust is a blazing fast and memory-efficient **static compiled language with a rich type system and ownership model**


### 🤨 Install

> [Install](https://www.rust-lang.org/tools/install) 👈🏽

> - For Linux

- [check here](https://www.youtube.com/embed/iF-76CVpqMc?si=ioft8_ViQTqz8z9o)

> - For windows

- [check here](https://www.youtube.com/embed/wKziu4aw6hY?si=C3qYPdP9K_OvN6hY)


> - For Mac

- [check here](https://www.youtube.com/embed/YL8TVC83mEs?si=2WuyGLYbykzuNfr5)

### 😎 One Interesting Fact
- For doc open your terminal and hit
```bash
rustup doc  
```
### 😏 Run Program

> create a file `main.rs`

```rust
fn main() {
    println!("Hello, world!");
}
//! -> println calls rust macro! if it had called a function instead it would be entered as println(without the !)
```

Open your terminal
- mac/linux
```shell
PS \Rust_WOW> rustc main.rs
PS \Rust_WOW> .\main
Hello, world!
```
- windows
```shell
PS \Rust_WOW> rustc main.rs
PS \Rust_WOW> .\main.exe
Hello, world!
```
> - rustc is the compiler
> - The main function is special: it is always the first code that runs in every executable Rust program.
> - `rustfmt main.rs` will format the code
### 📦 What is Cargo ?

Cargo is Rust's build system and package manager. It helps you manage dependencies, compile your code, and more. 

Let's create a small project 

```bash
cargo new subham
```

you will get something like this 

```text
subham
|-src 
|  |- main.rs
|-Cargo.toml  
```
toml - Tom's obvious, Minimal Language - it is similar like package.json in nodejs 

```bash
cargo build
```

```bash
\subham>cd target/debug

subham\target\debug>subham.exe
Hello, world!
```

> You can also simplify this 

```bash
cargo run
```

```bash
 cargo run
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.01s
     Running `target\debug\subham.exe`
Hello, world!
```

You can also check your build is it ok or not
```bash
 cargo check
```
```text
 cargo check
    Checking subham v0.1.0 (C:\Github\Rust_WOW\subham)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.10s     
```