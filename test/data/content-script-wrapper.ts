// IDEA: could use Rollup API to bundle this file
//  - that would probably be overkill

export const code = `
// This is a MOCK bundle from ${__filename}

const importPath = /*@__PURE__*/JSON.parse('%PATH%')

import(chrome.runtime.getURL(importPath))
`.trim()