/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getComponentName
 * @flow
 */

'use strict'

function getComponentName(instanceOrFiber) {
  if (typeof instanceOrFiber.getName === 'function') {
    // Stack reconciler
    return instanceOrFiber.getName()
  }
  if (typeof instanceOrFiber.tag === 'number') {
    // Fiber reconciler
    var type = instanceOrFiber.type
    if (typeof type === 'string') {
      return type
    }
    if (typeof type === 'function') {
      return type.displayName || type.name
    }
  }
  return null
}

export default getComponentName
