/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@CapEngage/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
  {
    id: 'Dashboard',
    title: 'Users',
    subtitle: 'Unique dashboard designs',
    type: 'collapsable',
    icon: 'heroicons_outline:user-group',
    children: [
      {
        id: 'Dashboard.Overview',
        title: 'Overview',
        type: 'basic',
        icon: 'heroicons_outline:view-grid',
        link: 'dash/users/overview',
      },
            {
        id: 'Dashboard.Users',
        title: 'List of Users',
        type: 'basic',
        icon: 'mat_outline:query_stats',
        link: `dash/users/list`,
      },
    ],
  },
  {
    id: 'Campaign',
    title: 'CAMPAIGN MANAGER',
    subtitle: 'Unique dashboard designs',
    type: 'group',
    icon: 'heroicons_outline:home',
    children: [
      {
        id: 'Campaign.project',
        title: 'Push Notification',
        type: 'basic',
        icon: 'mat_outline:notification_add',
        link: '/dash/push/overview',
      },
      {
        id: 'Campaign.analytics',
        title: 'SMS Messaging',
        type: 'basic',
        icon: 'mat_outline:sms',
        link: '/dash/sms/campaign-list',
      },
      {
        id: 'Campaign.finance',
        title: 'Email Automation',
        type: 'basic',
        icon: 'mat_outline:mark_email_unread',
        link: '/dash/email/campaign/list',
      },
      {
        id: 'Campaign.crypto',
        title: 'WhatsApp',
        type: 'basic',
        icon: 'capengage:whatsapp',
        link: '/dash/whatsapp/overview',
      },
    ],
  },
  {
    id: 'CampaignAutopilot',
    title: 'Fly On Autopilot',
    subtitle: 'Unique dashboard designs',
    type: 'group',
    icon: 'heroicons_outline:home',
    children: [
      /* {
        id: 'CampaignAutopilot.Journey',
        title: 'Journey',
        type: 'basic',
        icon: 'mat_outline:account_tree',
        link: '/dash/journeys/overview',
        badge: {
          title: '#',
          classes: 'px-1.5 bg-teal-400 text-black rounded-full',
        },
      }, */
      {
        id: 'CampaignAutopilot.Segmentation',
        title: 'Segment',
        type: 'basic',
        icon: 'mat_outline:bubble_chart',
        link: 'dash/segments/list',
        
      },
    ],
  },

 /*  {
    id: 'Analytics',
    title: 'Analytics & Insights',
    subtitle: 'Unique dashboard designs',
    type: 'group',
    icon: 'heroicons_outline:home',
    children: [
      {
        id: 'Analytics.Events',
        title: 'Events',
        type: 'basic',
        icon: 'heroicons_outline:cursor-click',
        link: '/dash/analytics/events',
      },
      {
        id: 'Analytics.Funnels',
        title: 'Funnels',
        type: 'basic',
        icon: 'heroicons_outline:filter',
        link: '/dash/analytics/funnels',
      },
      {
        id: 'Analytics.Cohorts',
        title: 'Cohorts',
        type: 'basic',
        icon: 'mat_outline:pivot_table_chart',
        link: '/dash/analytics/cohorts',
      },
    ],
  }, */
  /* {
    id: 'Data',
    title: 'Personalized Settings',
    subtitle: 'Unique dashboard designs',
    type: 'group',
    
  },
  {
    id: 'Data',
    title: 'Data Platform',
    subtitle: 'Unique dashboard designs',
    type: 'collapsable',
    icon: 'mat_outline:admin_panel_settings',
    children: [
      {
        id: 'Data.integrations',
        title: 'Integrations',
        type: 'basic',
        icon: 'mat_outline:settings_suggest',
        link: 'dash/data-platform/integrations',
      },
      {
        id: 'Data.data-management',
        title: 'Data Management',
        type: 'basic',
        icon: 'mat_outline:upload_file',
        link: 'dash/data-platform/data-management',
      },
      {
        id: 'Data.upload-events',
        title: 'Upload Event Data',
        type: 'basic',
        icon: 'mat_outline:upload_file',
        link: 'dash/data-platform/upload-events',
      },
      {
        id: 'Data.upload-users',
        title: 'Upload User Data',
        type: 'basic',
        icon: 'mat_outline:upload_file',
        link: 'dash/data-platform/upload-users',
      },
    ],
  },
  {
    id: 'Configurations',
    title: 'Configurations',
    subtitle: 'Unique dashboard designs',
    type: 'collapsable',
    icon: 'mat_outline:settings',
    children: [
        {
            id: 'configuration.dnd',
            title: 'DND',
            type: 'basic',
            icon: 'mat_outline:edit_attributes',
            link: 'dash/configuration/dnd',
          },
          {
            id: 'configuration.throttling',
            title: 'Throttling',
            type: 'basic',
            icon: 'mat_outline:edit_attributes',
            link: 'dash/configuration/throttling',
          },
          {
            id: 'configuration.frequency-capping',
            title: 'Frequency Capping',
            type: 'basic',
            icon: 'mat_outline:edit_attributes',
            link: 'dash/configuration/frequency-capping',
          },
          {
            id: 'configuration.custom-domain',
            title: 'Custom Domain',
            type: 'basic',
            icon: 'mat_outline:edit_attributes',
            link: 'dash/configuration/custom-domain',
          },
         
    ],
  }, */

 
  {
    id: 'Account',
    title: 'SETTINGS',
    subtitle: 'Unique dashboard designs',
    type: 'group',
    icon: 'heroicons_outline:home',
    children: [
      {
        id: 'Account.Setup',
        title: 'Account Setup',
        type: 'basic',
        icon: 'mat_outline:manage_accounts',
        link: '/dash/brand/',
      },
     
    ],
  },
];
export const compactNavigation: FuseNavigationItem[] = [
  {
    id: 'example',
    title: 'Example',
    type: 'basic',
    icon: 'heroicons_outline:chart-pie',
    link: '/example',
  },
];
export const futuristicNavigation: FuseNavigationItem[] = [
  {
    id: 'example',
    title: 'Example',
    type: 'basic',
    icon: 'heroicons_outline:chart-pie',
    link: '/example',
  },
];
export const horizontalNavigation: FuseNavigationItem[] = [
  {
    id: 'example',
    title: 'Example',
    type: 'basic',
    icon: 'heroicons_outline:chart-pie',
    link: '/example',
  },
];
