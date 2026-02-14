export type Role = 'guest' | 'user' | 'admin';
export type PageStatus = 'draft' | 'pending' | 'published' | 'unpublished';
export type Plan = 'free' | 'starter' | 'business';
export type DomainStatus = 'pending_dns' | 'verifying' | 'verified' | 'ssl_pending' | 'live' | 'failed';

export interface User {
  uid: string;
  name: string;
  email: string;
  role: Exclude<Role, 'guest'>;
  status: 'active' | 'suspended';
  createdAt: string;
}

export interface PageSEO {
  title: string;
  description: string;
  ogImageUrl: string;
  tags: string[];
}

export type SectionType =
  | 'hero'
  | 'features'
  | 'testimonials'
  | 'pricing'
  | 'faq'
  | 'gallery'
  | 'contact'
  | 'footer'
  | 'stats'
  | 'team'
  | 'process'
  | 'cta-ribbons';

export type ElementType =
  | 'heading'
  | 'paragraph'
  | 'button'
  | 'image'
  | 'video'
  | 'form'
  | 'divider'
  | 'spacer'
  | 'social-links'
  | 'map'
  | 'badges'
  | 'lists';

export interface ContentElement {
  id: string;
  type: ElementType;
  value: string | string[];
  styleToken?: string;
}

export interface ContentSection {
  id: string;
  type: SectionType;
  order: number;
  elements: ContentElement[];
}

export interface AIConfig {
  enabled: boolean;
  assistantName?: string;
  avatarUrl?: string;
  knowledgeCards: string[];
  customTraining: {
    businessOverview: string;
    services: string;
    pricingApproach: string;
    policies: string;
    contactPreference: string;
    extraInstructions: string;
  };
}

export interface Page {
  id: string;
  ownerId: string;
  title: string;
  slug: string;
  status: PageStatus;
  seo: PageSEO;
  contentSchema: ContentSection[];
  aiConfig: AIConfig;
  createdAt: string;
  updatedAt: string;
  primaryDomainId?: string;
}

export interface Domain {
  id: string;
  userId: string;
  pageId: string;
  hostname: string;
  verificationToken: string;
  verified: boolean;
  sslStatus: 'pending' | 'active' | 'failed';
  status: DomainStatus;
  connectedAt?: string;
  lastCheckedAt?: string;
}

export interface Template {
  id: string;
  name: string;
  preview: string;
  schema: ContentSection[];
  category: 'Agency' | 'eCommerce' | 'Landing' | 'Non-Profit' | 'Portfolio' | 'SaaS' | 'Services';
  plan: Plan;
}
