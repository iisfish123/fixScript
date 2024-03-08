const path = require('path')
const fs = require('fs')
const JsYaml = require('js-yaml')
const CronJob = require('cron').CronJob

function jobCallback() {
  const root = path.join('/Users/lkz/.config/clash/iggfeed.yaml')
  // const root = path.join('./iggfeed.yaml') // dev
  try {
    const doc = JsYaml.load(fs.readFileSync(root, 'utf8'))
    const rules = doc.rules || []
    if (rules.length == 0 || rules.find(item => item.includes('fuse'))) return
    const lastIndex = rules.findIndex(item => {
      return item.includes('XLLiveUD')
    })
    if (lastIndex > -1) {
      rules.splice(lastIndex + 1, 0, 'DOMAIN-KEYWORD,fuse,🎯 本地直连', 'DOMAIN-KEYWORD,fuseinsurtech.com,🎯 本地直连')
    }
    // fs.writeFileSync('./test.yaml', JsYaml.dump(doc)) // dev
    fs.writeFileSync(root, JsYaml.dump(doc))
  } catch (e) {
    console.log(e)
  }
}

const job = new CronJob(
  '10 * * * * *',
  jobCallback,
  null,
  true,
  'Asia/Shanghai'
)
job.start()
