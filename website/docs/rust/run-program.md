---
sidebar_position: 3
---
import {Highlight} from "@site/src/components/highlighter";

# ▶️ Run Program

> create a file `main.rs`

```rust
fn main() {
    println!("Hello, world!");
}
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
> - <Highlight> rustc is the compiler</Highlight>
> - <Highlight>The main function is special: it is always the first code that runs in every executable Rust program.</Highlight>
> - <Highlight>`rustfmt main.rs` will format the code</Highlight>