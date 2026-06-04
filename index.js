const { Gateway } = require('openclaw');

const gateway = new Gateway({
    // Points directly to the openclaw.json file in your repository root
    configPath: './openclaw.json',
    allowUnconfigured: true
});

gateway.start().catch((err) => {
    console.error("Fatal: Failed to boot OpenClaw Gateway Daemon", err);
    process.exit(1);
});