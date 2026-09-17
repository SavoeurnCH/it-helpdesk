export const tickets = [
  { id: 'HD-1024', title: 'Cannot connect to Student_WiFi', category: 'Network', priority: 'High', status: 'Open', requester: 'Sokha Lim', room: 'Lab 2', updated: '10 min ago', description: 'The laptop can see Student_WiFi but cannot obtain an IP address.' },
  { id: 'HD-1023', title: 'Printer prints blank pages', category: 'Hardware', priority: 'Medium', status: 'Pending', requester: 'Dara Kim', room: 'Office 1', updated: '32 min ago', description: 'Epson printer is online but printed pages are blank.' },
  { id: 'HD-1022', title: 'Student account password reset', category: 'Account', priority: 'Low', status: 'Resolved', requester: 'Pisey Chan', room: 'Class A', updated: '1 hr ago', description: 'User forgot their Google Workspace password.' },
  { id: 'HD-1021', title: 'Projector has no display', category: 'Hardware', priority: 'High', status: 'Open', requester: 'Vannak Chea', room: 'Lab 1', updated: '2 hrs ago', description: 'Projector powers on but HDMI input shows no signal.' },
  { id: 'HD-1020', title: 'Cannot access Moodle course', category: 'Software', priority: 'Medium', status: 'Resolved', requester: 'Rithy Sok', room: 'Class B', updated: '3 hrs ago', description: 'Student cannot see the assigned course after login.' },
  { id: 'HD-1019', title: 'PC is running very slowly', category: 'Hardware', priority: 'Low', status: 'Pending', requester: 'Sreymom Keo', room: 'Lab 3', updated: '5 hrs ago', description: 'Windows PC takes several minutes to start applications.' }
]
export const computers = [
  { name: 'LAB1-PC-01', user: 'Student Lab 1', ip: '192.168.10.21', os: 'Windows 11', status: 'Online' },
  { name: 'LAB1-PC-02', user: 'Student Lab 1', ip: '192.168.10.22', os: 'Windows 11', status: 'Online' },
  { name: 'LAB2-PC-01', user: 'Student Lab 2', ip: '192.168.10.41', os: 'Ubuntu 24.04', status: 'Online' },
  { name: 'LAB2-PC-02', user: 'Student Lab 2', ip: '192.168.10.42', os: 'Ubuntu 24.04', status: 'Offline' },
  { name: 'OFFICE-ADMIN-01', user: 'IT Admin', ip: '192.168.20.11', os: 'Windows 11', status: 'Online' }
]
export const users = [
  { name: 'Sokha Lim', role: 'Student', email: 'sokha@example.edu', tickets: 4 },
  { name: 'Dara Kim', role: 'Trainer', email: 'dara@example.edu', tickets: 2 },
  { name: 'Pisey Chan', role: 'Student', email: 'pisey@example.edu', tickets: 3 },
  { name: 'Vannak Chea', role: 'Trainer', email: 'vannak@example.edu', tickets: 1 }
]
