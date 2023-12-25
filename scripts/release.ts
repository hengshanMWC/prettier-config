import { execSync } from 'node:child_process'
import colors from 'colors'
import { commandPublish, commandVersion } from '@abmao/pkgs'

console.log(`${colors.cyan.bold('release: start')} 🏗`);
(async function () {
  execSync('npm run build', { stdio: 'inherit' })
  await commandVersion()
  await commandPublish()
})()
console.log(`${colors.cyan.bold('release: success')} 🎉🎉🎉🎉🎊`)
