import { execSync } from 'child_process'
import colors from 'colors'
console.log(`${colors.cyan.bold('release: start')} 🏗`);
(async function () {
  // 为了防止每次子包没有更新到pnpm-lock，报frozen-lockfile
  execSync('pnpm i', { stdio: 'inherit' })
  execSync('npm run test', { stdio: 'inherit' })
  execSync('npm run build', { stdio: 'inherit' })
  execSync('npm publish', { stdio: 'inherit' })
})()
console.log(`${colors.cyan.bold('release: success')} 🎉🎉🎉🎉🎊`)
