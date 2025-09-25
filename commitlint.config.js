// commitlint.config.js
import { resolve } from 'path'
import { readFileSync } from 'fs'

// 动态获取 package.json 的 type 字段
const pkg = JSON.parse(readFileSync(resolve(process.cwd(), 'package.json'), 'utf-8'))

// commit
// header: <type>(scope?): <subject> 
// body: <body>
// footer: <footer>

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type不能为空
    'type-empty': [2, 'never'],
    // type的类型必须在指定范围内
    'type-enum': [2, 'always', ['build', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert', 'perf']],
    // header最大100字符
    'header-max-length': [0, 'always', 120]
  },
  // ESM 兼容配置
  parserPreset: {
    parserOpts: {
      // 解决 ESM 下的路径问题
      ...(pkg.type === 'module' ? { sourceType: 'module' } : {})
    }
  }
}
