const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://github.com/sany13372?tab=repositories', {waitUntil: 'load'})
    let set = await page.evaluate(() => {
        let elem = Array.from(document.querySelectorAll('[itemprop]'), el => el.href )
        return elem
    })

    console.log('set',set)

})();