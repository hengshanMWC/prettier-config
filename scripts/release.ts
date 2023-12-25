import colors from 'colors'
import { commandPublish, commandVersion } from '@abmao/pkgs'

console.log(`${colors.cyan.bold('release: start')} 🏗`);
(async function () {
  await commandVersion()
  await commandPublish()
})()
console.log(`${colors.cyan.bold('release: success')} 🎉🎉🎉🎉🎊`)
