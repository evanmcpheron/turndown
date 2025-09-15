// eventBus.ts

import { TurndownObject } from "./types";

export interface PublishOptions {
  // Not used in RN (no DOM), kept for API compatibility
  bubbles?: boolean;
  cancelable?: boolean;
}

type Listener<T> = (data: T) => void;

const listenerMap: Record<string, Map<symbol, Listener<any>>> = {};

/**
 * Returns true if at least one listener is registered for the channel.
 */
export const isChannelActive = (eventName: string) => {
  return !!listenerMap[eventName] && listenerMap[eventName]!.size > 0;
};

/**
 * Subscribe to a channel. Returns a unique listener id.
 * In RN we don't have DOM events, so we keep an internal bus.
 */
export const subscribeToChannel = async <T = TurndownObject>(
  channelName: string,
  onMessage: ((data: T) => void) | null
): Promise<symbol> => {
  const uniqueListenerId = Symbol();

  if (!listenerMap[channelName]) {
    listenerMap[channelName] = new Map();
  }

  if (onMessage) {
    // store the original callback directly
    listenerMap[channelName].set(uniqueListenerId, onMessage as Listener<any>);
  }

  return uniqueListenerId;
};

/**
 * Remove a previously registered listener from a channel.
 */
export const disposeChannel = async (
  channelName: string,
  listenerId: symbol
) => {
  const channelListeners = listenerMap[channelName];
  if (!channelListeners) return;

  try {
    if (channelListeners.has(listenerId)) {
      channelListeners.delete(listenerId);
    }

    if (channelListeners.size === 0) {
      delete listenerMap[channelName];
    }
  } catch {
    /** noop */
  }
};

/**
 * Publish data to every subscriber on a channel.
 * `PublishOptions` are kept for API parity but have no effect in RN.
 */
export const publishOnChannel = async <T = TurndownObject>(
  channelName: string,
  data: T,
  _options?: PublishOptions
) => {
  const channelListeners = listenerMap[channelName];
  if (!channelListeners) return;

  for (const [, listener] of channelListeners) {
    try {
      (listener as Listener<T>)(data);
    } catch {
      // isolate listener failures
    }
  }
};
