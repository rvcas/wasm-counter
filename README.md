# WASM Counter

A super simple React component that increments a count on an interval.
The cool part is that the function used to increment the count is written in
[zig](https://ziglang.org/). [Parcel](https://parceljs.org/) handles the instantiation of the
WebAssembly module so the DX is as simple as directly importing `.wasm` files into your JavaScript.

## Running

You'll need [yarn](https://classic.yarnpkg.com/en/docs/install) and
[zig](https://github.com/ziglang/zig/wiki/Install-Zig-from-a-Package-Manager)
installed.

* `yarn install`
* `yarn start`

