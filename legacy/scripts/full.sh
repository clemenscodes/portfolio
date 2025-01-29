#!/bin/sh

bun run nx format --libs-and-apps
bun all build --parallel "$1"
bun all lint --parallel "$1"
bun all test --parallel "$1"
bun all e2e --parallel 1
