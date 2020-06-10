async function main () {
    const ESMessage = await import('./esm-module.mjs');
    const CommonMessage = await import('./common-module.js');
    
    console.log('ESM: ', ESMessage.default());
    console.log('CommonMessage: ', CommonMessage.default.message());
}

main()