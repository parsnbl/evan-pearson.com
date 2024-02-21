import React from 'react';

import { SerializedStyles } from '@emotion/react';
import { CSSInterpolation, ArrayCSSInterpolation } from '@emotion/serialize';
export interface Wrapped {
  children: React.ReactNode;
}

export interface StyledWrapped {
  children: React.ReactNode;
  cssStyles?: SerializedStyles | null;
}

export interface ProjectData {
  title: string;
  imageSlug: string;
  description: string[];
  tags: string[];
  web?: string;
  github?: string;
  npm?: string;
}

export interface CSSObject {
  [index: string]: string | number | CSSObject | (() => CSSObject);
}

export type FullCSSInterpolation = CSSInterpolation | ArrayCSSInterpolation;

export type SkillsData = {
  [index in SkillType] : {
    title: string,
    skills: string[]
  }
}

export type SkillType =
| 'frontend'
| 'backend'
| 'data'
| 'cloud'
| 'martech'
| 'growth'
| 'languages'
| 'collaboration';