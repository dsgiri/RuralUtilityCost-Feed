export type Category = 
  | 'Feed cost'
  | 'Ration planning'
  | 'Feed comparison'
  | 'Feed conversion'
  | 'Feed storage'
  | 'Feed waste';

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: Category;
  primaryOutcome: string;
  iconName?: string;
}
