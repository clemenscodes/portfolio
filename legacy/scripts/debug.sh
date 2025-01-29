#!/bin/sh

bun failed build  --parallel "$1"
bun failed lint --parallel "$1"
bun failed test --parallel "$1"
bun failed e2e --parallel 1
