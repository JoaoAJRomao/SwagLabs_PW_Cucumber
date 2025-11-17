export default {
    default: {
        paths: [
            "src/tests/features/*.feature"
        ],
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber-report.json",
            "html:reports/cucumber-report.html"
        ],
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await"
        },
        // Use 'import' para projetos ESM
        import: [
            "src/tests/step-definitions/*.ts",
            "src/tests/support/hooks.ts",
            "src/tests/support/world.ts"
        ],
        requireModule: [
            "ts-node/register"
        ]
    }
}