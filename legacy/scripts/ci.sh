#!/bin/sh

bun run nx format --libs-and-apps &&
bun affected build --nx-bail --output-style=stream --parallel "$1" &&
bun affected lint --nx-bail --output-style=stream --parallel "$1" &&
bun affected test --nx-bail  --output-style=stream --parallel "$1" &&
bun affected e2e --output-style=stream  --parallel 1
