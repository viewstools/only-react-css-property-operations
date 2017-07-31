import cleanup from 'rollup-plugin-cleanup'
import replace from 'rollup-plugin-replace'

export default {
  banner: `
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */`,
  entry: './CSSPropertyOperations.js',
  format: 'cjs',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    cleanup(),
  ],
}
