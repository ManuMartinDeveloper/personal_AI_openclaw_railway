const { Gateway } = require('openclaw');

// Initialize the core system control plane
const gateway = new Gateway({
    configPath: process.env.OPENCLAW_CONFIG_PATH || './openclaw.json'
});

gateway.start().catch((err) => {
    console.error("Fatal: Failed to boot OpenClaw Gateway Daemon", err);
    process.exit(1);
});