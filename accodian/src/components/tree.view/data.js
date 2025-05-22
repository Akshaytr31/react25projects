const treeData = [
    {
      id: 1,
      label: 'Profile',
      children: [
        {
          id: 2,
          label: 'Personal Info',
        },
        {
          id: 3,
          label: 'Activity Logs',
        },
        {
          id: 4,
          label: 'Security',
          children: [
            { id: 5, label: 'Change Password' },
            { id: 6, label: 'Two-Factor Auth' },
          ],
        },
      ],
    },
    {
      id: 7,
      label: 'Settings',
      children: [
        {
          id: 8,
          label: 'Preferences',
        },
        {
          id: 9,
          label: 'Notifications',
          children: [
            { id: 10, label: 'Email Alerts' },
            { id: 11, label: 'Push Notifications' },
          ],
        },
        {
          id: 12,
          label: 'Account Management',
        },
      ],
    },
  ];
  
  export default treeData;
  