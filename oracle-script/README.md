## Compiling the Oracle Script
To compile the oracle script, the following command can be run:
```bash
RUSTFLAGS='-C link-arg=-s' cargo build --release --target wasm32-unknown-unknown
```
After the compilation is complete, the .wasm file can be found in the sub-directory: ./target/wasm32-unknown-unknown/release/*.wasm.

Node:
- After installing Rust you can check the current version by typing rustc --version or rustc -V on your terminal to verify the success of the installation. It should be <= 1.69.0. If it is not, you can downgrade the version by running the command below.
    ```bash
    rustup install 1.69
    rustup default 1.69
    ```

- If wasm32-unknown-unknown hasn't been added as a target, you can add it using the command below.
    ```bash
    rustup target add wasm32-unknown-unknown
    ```