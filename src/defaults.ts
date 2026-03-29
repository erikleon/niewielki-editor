import type { SanitizePolicy } from './types';

export const DEFAULT_POLICY: SanitizePolicy = {
  tags: {
    p: [],
    br: [],
    strong: [],
    em: [],
    a: ['href', 'title', 'target'],
    h1: [],
    h2: [],
    h3: [],
    ul: [],
    ol: [],
    li: [],
    blockquote: [],
    pre: [],
    code: [],
  },
  strip: true,
  maxDepth: 10,
  maxLength: 100_000,
  protocols: ['https', 'http', 'mailto'],
};
