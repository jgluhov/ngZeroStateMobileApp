# ngZeroStateMobileApp

# Cordova browser-sync run
cmd: "cordova run -- --live-reload --ignore=lib/**/*.*"

# Weinre
## Content-Security-Policy
content="default-src *; style-src 'self' 'unsafe-inline';"
## Cmd to run
cmd: "weinre --boundHost -all-"

