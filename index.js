const { Gateway } = require('openclaw');

const gateway = new Gateway({
    configPath: process.env.OPENCLAW_CONFIG_PATH || './openclaw.json',
    // Bypasses the initial setup prompt requirement for cloud hosting
    allowUnconfigured: true
});

gateway.start().catch((err) => {
    console.error("Fatal: Failed to boot OpenClaw Gateway Daemon", err);
    process.exit(1);
});