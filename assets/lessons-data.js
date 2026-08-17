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
  // Phase 1: Foundational Concepts
  { id: '0001', title: 'React Native', file: '0001-react-native.html', phase: 'Foundational Concepts' },
  { id: '0002', title: 'JavaScript & TypeScript', file: '0002-javascript-typescript.html', phase: 'Foundational Concepts' },
  { id: '0003', title: 'JSX', file: '0003-jsx.html', phase: 'Foundational Concepts' },
  { id: '0004', title: 'Components', file: '0004-components.html', phase: 'Foundational Concepts' },
  { id: '0005', title: 'Props', file: '0005-props.html', phase: 'Foundational Concepts' },
  { id: '0006', title: 'State', file: '0006-state.html', phase: 'Foundational Concepts' },
  { id: '0007', title: 'Hooks', file: '0007-hooks.html', phase: 'Foundational Concepts' },
  { id: '0008', title: 'Platform API', file: '0008-platform-api.html', phase: 'Foundational Concepts' },
  // Phase 2: Core Concepts
  { id: '0009', title: 'View', file: '0009-view.html', phase: 'Core Concepts' },
  { id: '0010', title: 'Text', file: '0010-text.html', phase: 'Core Concepts' },
  { id: '0011', title: 'Pressable', file: '0011-pressable.html', phase: 'Core Concepts' },
  { id: '0012', title: 'ScrollView', file: '0012-scrollview.html', phase: 'Core Concepts' },
  { id: '0013', title: 'StyleSheet', file: '0013-stylesheet.html', phase: 'Core Concepts' },
  { id: '0014', title: 'Flexbox', file: '0014-flexbox.html', phase: 'Core Concepts' },
  { id: '0015', title: 'useState', file: '0015-usestate.html', phase: 'Core Concepts' },
  { id: '0016', title: 'useEffect', file: '0016-useeffect.html', phase: 'Core Concepts' },
  { id: '0017', title: 'useRef', file: '0017-useref.html', phase: 'Core Concepts' },
  { id: '0018', title: 'Platform.select', file: '0018-platform-select.html', phase: 'Core Concepts' },
  // Phase 3: Implementation Concepts
  { id: '0019', title: 'Expo', file: '0019-expo.html', phase: 'Implementation Concepts' },
  { id: '0020', title: 'React Native CLI', file: '0020-react-native-cli.html', phase: 'Implementation Concepts' },
  { id: '0021', title: 'Navigation Container', file: '0021-navigation-container.html', phase: 'Implementation Concepts' },
  { id: '0022', title: 'Stack Navigator', file: '0022-stack-navigator.html', phase: 'Implementation Concepts' },
  { id: '0023', title: 'Tab Navigator', file: '0023-tab-navigator.html', phase: 'Implementation Concepts' },
  { id: '0024', title: 'FlatList', file: '0024-flatlist.html', phase: 'Implementation Concepts' },
  { id: '0025', title: 'SectionList', file: '0025-sectionlist.html', phase: 'Implementation Concepts' },
  { id: '0026', title: 'Image', file: '0026-image.html', phase: 'Implementation Concepts' },
  { id: '0027', title: 'TextInput', file: '0027-textinput.html', phase: 'Implementation Concepts' },
  { id: '0028', title: 'Dimensions', file: '0028-dimensions.html', phase: 'Implementation Concepts' },
  // Phase 4: Integration Concepts
  { id: '0029', title: 'React Navigation', file: '0029-react-navigation.html', phase: 'Integration Concepts' },
  { id: '0030', title: 'Gesture Handler', file: '0030-gesture-handler.html', phase: 'Integration Concepts' },
  { id: '0031', title: 'Safe Area Context', file: '0031-safe-area-context.html', phase: 'Integration Concepts' },
  { id: '0032', title: 'Context API', file: '0032-context-api.html', phase: 'Integration Concepts' },
  { id: '0033', title: 'Async Storage', file: '0033-async-storage.html', phase: 'Integration Concepts' },
  { id: '0034', title: 'Fetch API', file: '0034-fetch-api.html', phase: 'Integration Concepts' },
  { id: '0035', title: 'Error Boundaries', file: '0035-error-boundaries.html', phase: 'Integration Concepts' },
  { id: '0036', title: 'Linking', file: '0036-linking.html', phase: 'Integration Concepts' },
  // Phase 5: Architectural Concepts
  { id: '0037', title: 'Redux Toolkit', file: '0037-redux-toolkit.html', phase: 'Architectural Concepts' },
  { id: '0038', title: 'Zustand', file: '0038-zustand.html', phase: 'Architectural Concepts' },
  { id: '0039', title: 'React Query', file: '0039-react-query.html', phase: 'Architectural Concepts' },
  { id: '0040', title: 'MMKV', file: '0040-mmkv.html', phase: 'Architectural Concepts' },
  { id: '0041', title: 'SQLite', file: '0041-sqlite.html', phase: 'Architectural Concepts' },
  { id: '0042', title: 'File System', file: '0042-file-system.html', phase: 'Architectural Concepts' },
  { id: '0043', title: 'Native Modules', file: '0043-native-modules.html', phase: 'Architectural Concepts' },
  { id: '0044', title: 'Turbo Modules', file: '0044-turbo-modules.html', phase: 'Architectural Concepts' },
  // Phase 6: Design Concepts
  { id: '0045', title: 'Theming', file: '0045-theming.html', phase: 'Design Concepts' },
  { id: '0046', title: 'Dark Mode', file: '0046-dark-mode.html', phase: 'Design Concepts' },
  { id: '0047', title: 'Responsive Design', file: '0047-responsive-design.html', phase: 'Design Concepts' },
  { id: '0048', title: 'Breakpoints', file: '0048-breakpoints.html', phase: 'Design Concepts' },
  { id: '0049', title: 'Orientation', file: '0049-orientation.html', phase: 'Design Concepts' },
  { id: '0050', title: 'Animations', file: '0050-animations.html', phase: 'Design Concepts' },
  { id: '0051', title: 'Reanimated', file: '0051-reanimated.html', phase: 'Design Concepts' },
  { id: '0052', title: 'SVG', file: '0052-svg.html', phase: 'Design Concepts' },
  { id: '0053', title: 'WebView', file: '0053-webview.html', phase: 'Design Concepts' },
  // Phase 7: Advanced Concepts
  { id: '0054', title: 'Memoization', file: '0054-memoization.html', phase: 'Advanced Concepts' },
  { id: '0055', title: 'useCallback', file: '0055-use-callback.html', phase: 'Advanced Concepts' },
  { id: '0056', title: 'Lazy Loading', file: '0056-lazy-loading.html', phase: 'Advanced Concepts' },
  { id: '0057', title: 'Image Caching', file: '0057-image-caching.html', phase: 'Advanced Concepts' },
  { id: '0058', title: 'List Virtualization', file: '0058-list-virtualization.html', phase: 'Advanced Concepts' },
  { id: '0059', title: 'Memory Leaks', file: '0059-memory-leaks.html', phase: 'Advanced Concepts' },
  { id: '0060', title: 'Hermes Engine', file: '0060-hermes-engine.html', phase: 'Advanced Concepts' },
  { id: '0061', title: 'New Architecture', file: '0061-new-architecture.html', phase: 'Advanced Concepts' },
  // Phase 8: Production Concepts
  { id: '0062', title: 'Code Signing', file: '0062-code-signing.html', phase: 'Production Concepts' },
  { id: '0063', title: 'App Store Publishing', file: '0063-app-store-publishing.html', phase: 'Production Concepts' },
  { id: '0064', title: 'OTA Updates', file: '0064-ota-updates.html', phase: 'Production Concepts' },
  { id: '0065', title: 'Crash Reporting', file: '0065-crash-reporting.html', phase: 'Production Concepts' },
  { id: '0066', title: 'CI/CD', file: '0066-ci-cd.html', phase: 'Production Concepts' },
  { id: '0067', title: 'Version Management', file: '0067-version-management.html', phase: 'Production Concepts' },
  { id: '0068', title: 'Build Configuration', file: '0068-build-configuration.html', phase: 'Production Concepts' },
  // Phase 9: Optimization Concepts
  { id: '0069', title: 'Re-render Optimization', file: '0069-re-render-optimization.html', phase: 'Optimization Concepts' },
  { id: '0070', title: 'Bundle Size', file: '0070-bundle-size.html', phase: 'Optimization Concepts' },
  { id: '0071', title: 'Startup Performance', file: '0071-startup-performance.html', phase: 'Optimization Concepts' },
  { id: '0072', title: 'Network Optimization', file: '0072-network-optimization.html', phase: 'Optimization Concepts' },
  { id: '0073', title: 'Image Optimization', file: '0073-image-optimization.html', phase: 'Optimization Concepts' },
  { id: '0074', title: 'Memory Profiling', file: '0074-memory-profiling.html', phase: 'Optimization Concepts' },
  { id: '0075', title: 'Profiler Tool', file: '0075-profiler-tool.html', phase: 'Optimization Concepts' },
  // Phase 10: Expert/Strategic Concepts
  { id: '0076', title: 'Micro-frontends', file: '0076-micro-frontends.html', phase: 'Expert/Strategic Concepts' },
  { id: '0077', title: 'Code Push', file: '0077-code-push.html', phase: 'Expert/Strategic Concepts' },
  { id: '0078', title: 'A/B Testing', file: '0078-ab-testing.html', phase: 'Expert/Strategic Concepts' },
  { id: '0079', title: 'Analytics Integration', file: '0079-analytics-integration.html', phase: 'Expert/Strategic Concepts' },
  { id: '0080', title: 'Accessibility', file: '0080-accessibility.html', phase: 'Expert/Strategic Concepts' },
  { id: '0081', title: 'Internationalization', file: '0081-internationalization.html', phase: 'Expert/Strategic Concepts' },
  { id: '0082', title: 'Security Hardening', file: '0082-security-hardening.html', phase: 'Expert/Strategic Concepts' },
];
