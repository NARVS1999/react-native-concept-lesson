// ============================================================
// SINGLE SOURCE OF TRUTH — All lessons in order
//
// Edit this file to add, remove, or reorder lessons.
// The sidebar, prev/next nav, and sequence tracker
// all derive from this list automatically.
//
// Each entry:
//   id     — unique prefix (used as the filename prefix and ID)
//   title  — display name in sidebar / nav
//   file   — filename of the lesson HTML (no directory prefix)
//   phase  — grouping category for collapsible sidebar sections
//
// IMPORTANT: Do NOT include a "lessons/" directory prefix in `file`.
// The sidebar.js and lesson-nav.js scripts derive the correct path
// automatically from the current page location.
// ============================================================
window.LESSONS = [
  { id: '0001', title: 'What is React Native?', file: '0001-what-is-react-native.html', phase: 'Foundational Concepts' },
  { id: '0002', title: 'JSX and Components', file: '0002-jsx-and-components.html', phase: 'Foundational Concepts' },
  { id: '0003', title: 'Props, State, and Hooks', file: '0003-props-state-hooks.html', phase: 'Foundational Concepts' },
  { id: '0004', title: 'Building UI with Core Components', file: '0004-building-ui.html', phase: 'Core Concepts' },
  { id: '0005', title: 'Styling and Flexbox', file: '0005-styling-and-flexbox.html', phase: 'Core Concepts' },
  { id: '0006', title: 'Component Lifecycle with Hooks', file: '0006-component-lifecycle.html', phase: 'Core Concepts' },
  { id: '0007', title: 'Navigation Setup', file: '0007-navigation-setup.html', phase: 'Implementation Concepts' },
  { id: '0008', title: 'Lists and Input', file: '0008-lists-and-input.html', phase: 'Implementation Concepts' },
  { id: '0009', title: 'Platform-Specific Code', file: '0009-platform-specific.html', phase: 'Implementation Concepts' },
  { id: '0010', title: 'State Sharing with Context API', file: '0010-state-sharing.html', phase: 'Integration Concepts' },
  { id: '0011', title: 'Networking and Error Handling', file: '0011-networking-errors.html', phase: 'Integration Concepts' },
  { id: '0012', title: 'Gestures and Safe Areas', file: '0012-gestures-safe-areas.html', phase: 'Integration Concepts' },
  { id: '0013', title: 'Global State Management', file: '0013-global-state.html', phase: 'Architectural Concepts' },
  { id: '0014', title: 'Server State and Storage', file: '0014-server-state-storage.html', phase: 'Architectural Concepts' },
  { id: '0015', title: 'Native Bridge and Modules', file: '0015-native-bridge.html', phase: 'Architectural Concepts' },
  { id: '0016', title: 'Theming and Dark Mode', file: '0016-theming-dark-mode.html', phase: 'Design Concepts' },
  { id: '0017', title: 'Responsive Layouts', file: '0017-responsive-layouts.html', phase: 'Design Concepts' },
  { id: '0018', title: 'Motion and Graphics', file: '0018-motion-graphics.html', phase: 'Design Concepts' },
  { id: '0019', title: 'Performance Patterns', file: '0019-performance-patterns.html', phase: 'Advanced Concepts' },
  { id: '0020', title: 'List and Image Performance', file: '0020-list-image-perf.html', phase: 'Advanced Concepts' },
  { id: '0021', title: 'Engine and Architecture', file: '0021-engine-architecture.html', phase: 'Advanced Concepts' },
  { id: '0022', title: 'Ship Your App', file: '0022-ship-your-app.html', phase: 'Production Concepts' },
  { id: '0023', title: 'DevOps and Monitoring', file: '0023-devops-monitoring.html', phase: 'Production Concepts' },
  { id: '0024', title: 'App Performance', file: '0024-app-performance.html', phase: 'Optimization Concepts' },
  { id: '0025', title: 'Network and Memory', file: '0025-network-memory.html', phase: 'Optimization Concepts' },
  { id: '0026', title: 'Scaling and Deployment', file: '0026-scaling-deployment.html', phase: 'Expert/Strategic Concepts' },
  { id: '0027', title: 'Inclusive and Secure Apps', file: '0027-inclusive-secure.html', phase: 'Expert/Strategic Concepts' },
];
