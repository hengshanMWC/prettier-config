import { execSync } from 'node:child_process'
import colors from 'colors'
import { versionBump } from 'bumpp'

console.log(`${colors.cyan.bold('release: start')} 🏗`);
(async function () {
  execSync('npm run test', { stdio: 'inherit' })
  execSync('npm run build', { stdio: 'inherit' })
  await versionBump()
  execSync('npm publish --access public', { stdio: 'inherit' })
})()
console.log(`${colors.cyan.bold('release: success')} 🎉🎉🎉🎉🎊`)
