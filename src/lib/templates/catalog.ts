import { Template } from '@/types/platform';

const categories = [
  ['Agency', 7],
  ['eCommerce', 8],
  ['Landing', 7],
  ['Non-Profit', 6],
  ['Portfolio', 7],
  ['SaaS', 7],
  ['Services', 8],
] as const;

const planByIndex = ['free', 'starter', 'business'] as const;

export const TEMPLATE_CATALOG: Template[] = categories.flatMap(([category, count], groupIndex) =>
  Array.from({ length: count }).map((_, index) => ({
    id: `${category.toLowerCase()}-${index + 1}`,
    name: `${category} Launch ${index + 1}`,
    preview: `/previews/${category.toLowerCase()}-${index + 1}.png`,
    category,
    plan: planByIndex[(groupIndex + index) % planByIndex.length],
    schema: [
      {
        id: `${category.toLowerCase()}-${index + 1}-hero`,
        type: 'hero',
        order: 1,
        elements: [
          { id: 'heading', type: 'heading', value: `${category} businesses in Kashmir, now live in minutes.` },
          { id: 'paragraph', type: 'paragraph', value: 'Built for speed, trust, and local growth.' },
        ],
      },
      {
        id: `${category.toLowerCase()}-${index + 1}-contact`,
        type: 'contact',
        order: 2,
        elements: [{ id: 'phone', type: 'paragraph', value: '+91 7006 000 000' }],
      },
    ],
  }))
);
