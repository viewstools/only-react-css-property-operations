/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDebugCurrentFiber
 * @flow
 */

'use strict'

import { ReactDebugCurrentFrame } from './ReactGlobalSharedState.js'
import getComponentName from './getComponentName.js'
import { getStackAddendumByWorkInProgressFiber } from './ReactFiberComponentTreeHook.js'

function getCurrentFiberOwnerName() {
  if (process.env.NODE_ENV === 'development') {
    const fiber = ReactDebugCurrentFiber.current
    if (fiber === null) {
      return null
    }
    if (fiber._debugOwner != null) {
      return getComponentName(fiber._debugOwner)
    }
  }
  return null
}

function getCurrentFiberStackAddendum() {
  if (process.env.NODE_ENV === 'development') {
    const fiber = ReactDebugCurrentFiber.current
    if (fiber === null) {
      return null
    }
    // Safe because if current fiber exists, we are reconciling,
    // and it is guaranteed to be the work-in-progress version.
    return getStackAddendumByWorkInProgressFiber(fiber)
  }
  return null
}

function resetCurrentFiber() {
  ReactDebugCurrentFrame.getCurrentStack = null
  ReactDebugCurrentFiber.current = null
  ReactDebugCurrentFiber.phase = null
}

function setCurrentFiber(fiber, phase) {
  ReactDebugCurrentFrame.getCurrentStack = getCurrentFiberStackAddendum
  ReactDebugCurrentFiber.current = fiber
  ReactDebugCurrentFiber.phase = phase
}

var ReactDebugCurrentFiber = {
  current: null,
  phase: null,
  resetCurrentFiber,
  setCurrentFiber,
  getCurrentFiberOwnerName,
  getCurrentFiberStackAddendum,
}

export default ReactDebugCurrentFiber
