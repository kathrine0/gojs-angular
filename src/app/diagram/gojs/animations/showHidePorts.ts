import * as go from 'gojs';
import { portsName } from '../consts';

const VISIBLE_OPACITY = 1;

const portsAnimation = async (
  obj: go.GraphObject,
  property: string,
  fromValue: number,
  toValue: number,
  duration = 200
) => {
  const animation = new go.Animation();
  animation.duration = duration;
  animation.easing = go.Animation.EaseInOutQuad;
  animation.add(obj, property, fromValue, toValue);
  animation.start();

  return new Promise((resolve) => {
    animation.finished = resolve;
    setTimeout(() => animation.stop(), duration);
  });
};

export const showPorts = async (part: go.Part) => {
  const portsPanel = part.findObject(portsName) as go.GraphObject;
  if (!portsPanel) {
    return;
  }

  portsPanel.visible = true;
  await portsAnimation(portsPanel, 'opacity', 0, VISIBLE_OPACITY);
};

export const hidePorts = async (part: go.Part) => {
  const portsPanel = part.findObject(portsName) as go.GraphObject;
  if (!portsPanel) {
    return;
  }

  await portsAnimation(portsPanel, 'opacity', VISIBLE_OPACITY, 0);
  portsPanel.visible = false;
};
