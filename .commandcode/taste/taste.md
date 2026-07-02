# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

# documentation
- When documenting language support for this project, check the LanguageSpec's `formatter` property before claiming Prettier support; if absent or no prettier config, write "Code Formatting: Not supported.". Confidence: 0.80
- Before using a `template` in LiveCodes docs, verify the template exists; if no starter template exists, use an inline config demo instead. Confidence: 0.70
- Language starter templates are located in `src/livecodes/templates/starter`. Check this directory when verifying template existence. Confidence: 0.60
- When documenting Reason/ReScript stdlib availability, state that stdlib modules (e.g. Belt, Array, List) are available directly without import paths — do not mention `./stdlib/` or other internal compiler resolution paths. Confidence: 0.65

# workflow
- Do not move to the next task/language/file until the user explicitly approves and says to continue. Wait for explicit confirmation before proceeding. Confidence: 0.90
