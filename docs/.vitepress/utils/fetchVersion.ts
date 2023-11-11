// 读取规则：https://raw.githubusercontent.com/<username>/<repo>/<branch>/<file>
export function fetchVersion() {
  return fetch(
    'https://raw.githubusercontent.com/themusecatcher/vue-amazing-ui/master/package.json'
  )
    .then((res) => res.json())
    .then((json) => json.version ?? '')
    .then((version) => {
      if (!version) return
      const tagLineParagragh = document.querySelector(
        'div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline'
      )
      const docsVersionSpan = document.createElement('samp')
      docsVersionSpan.classList.add('version-tag')
      docsVersionSpan.innerText = version
      tagLineParagragh?.appendChild(docsVersionSpan)
    })
}
