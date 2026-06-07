import { Tool } from './types';

export const TOOLS: Tool[] = [
  {
    id: 'feed-cost-calc',
    title: 'Feed Cost Calculator',
    description: 'Calculate the total cost of feed batches and individual rations.',
    category: 'Feed cost',
    primaryOutcome: 'Cost per batch & per ton',
    iconName: 'DollarSign'
  },
  {
    id: 'ration-compare',
    title: 'Ration Comparison Tool',
    description: 'Compare nutritional value and cost across different ration blends.',
    category: 'Ration planning',
    primaryOutcome: 'Best value ration',
    iconName: 'Scale'
  },
  {
    id: 'feed-conversion',
    title: 'Feed Conversion Estimator',
    description: 'Estimate feed conversion ratios (FCR) for your livestock.',
    category: 'Feed conversion',
    primaryOutcome: 'FCR & efficiency metrics',
    iconName: 'LineChart'
  },
  {
    id: 'feed-storage',
    title: 'Feed Storage Capacity Calculator',
    description: 'Determine how much feed your bins, bunkers, or silos can hold.',
    category: 'Feed storage',
    primaryOutcome: 'Tons of capacity',
    iconName: 'Database'
  },
  {
    id: 'feed-waste',
    title: 'Feed Waste Reduction Planner',
    description: 'Identify where feed waste occurs and calculate lost value.',
    category: 'Feed waste',
    primaryOutcome: 'Cost of waste & savings',
    iconName: 'Trash2'
  },
  {
    id: 'cost-per-head',
    title: 'Cost per Head / per Day Calculator',
    description: 'Break down aggregate feed costs to a per-animal daily basis.',
    category: 'Feed cost',
    primaryOutcome: 'Daily cost per animal',
    iconName: 'Users'
  },
  {
    id: 'feed-budget',
    title: 'Feed Budget Planner',
    description: 'Forecast long-term feed requirements and budget for the year.',
    category: 'Feed cost',
    primaryOutcome: 'Annual feed budget',
    iconName: 'Calendar'
  },
  {
    id: 'dry-matter-intake',
    title: 'Dry Matter Intake Estimator',
    description: 'Estimate daily dry matter intake based on animal weight and type.',
    category: 'Ration planning',
    primaryOutcome: 'Required intake in lbs/kg',
    iconName: 'Activity'
  }
];
