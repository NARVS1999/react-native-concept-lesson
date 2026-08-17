# React Native Glossary

Core terminology for the React Native learning path.

## Framework

**React Native (RN)**:
A cross-platform mobile framework that lets you write JavaScript/TypeScript to build iOS and Android apps from a single codebase.

**Expo**:
A managed workflow platform built on top of React Native that simplifies setup, builds, and deployment without requiring native code access.

**React Native CLI**:
The bare workflow toolchain that gives full access to native iOS/Android projects for custom native code.

**Hermes**:
A JavaScript engine optimized for React Native that improves startup time, reduces memory usage, and enables smaller app bundles.

## Components

**Component**:
A reusable UI building block that returns JSX to describe what should render on screen.

**JSX**:
A syntax extension that lets you write HTML-like code inside JavaScript to describe UI structure.

**Props**:
Data passed from a parent component to a child component. Props are read-only and cannot be modified by the child.

**State**:
Mutable data owned by a component that controls its behavior and triggers re-renders when changed.

## Architecture

**Bridge**:
The communication layer between JavaScript and native code in React Native's old architecture.

**Fabric**:
React Native's new rendering system that enables synchronous native updates and better performance.

**Turbo Module**:
A lazy-loaded native module system in React Native's new architecture that reduces startup overhead.

**Thread**:
React Native runs JavaScript on a background thread, UI updates on the main thread, and optionally a shadow thread for layout calculations.

## Navigation

**Navigation Container**:
The root component that wraps the entire navigation tree and manages state.

**Stack Navigator**:
A navigation pattern that pushes and pops screens like a stack of cards.

**Tab Navigator**:
A navigation pattern that displays multiple screens as tabs at the top or bottom of the screen.

**Deep Linking**:
The ability to navigate to a specific screen within an app using a URL scheme.

## State Management

**Context API**:
A React feature that lets you pass data down the component tree without manually threading props.

**Redux**:
A predictable state container that centralizes application state in a single store.

**Zustand**:
A lightweight state management library that uses hooks for simple, boilerplate-free state.

**React Query (TanStack Query)**:
A server-state management library that handles fetching, caching, and synchronizing server data.

## Performance

**Memoization**:
Caching the result of expensive computations or component renders to avoid redundant work.

**Virtualization**:
Rendering only the visible items in a list (plus a small buffer) instead of all items at once.

**Lazy Loading**:
Deferring the loading of non-critical resources until they are needed.

**Re-render**:
When a component's state or props change, React re-executes the component function and diffs the output.

## Storage

**Async Storage**:
A simple, unencrypted key-value storage system for persisting small amounts of data locally.

**MMKV**:
A fast, synchronous key-value storage that is significantly quicker than Async Storage.

**SQLite**:
A relational database engine for storing structured data with SQL query support.

## Design

**Flexbox**:
A CSS layout model that distributes space along a single axis, used for arranging React Native components.

**StyleSheet**:
A React Native API for creating optimized, declarative style objects similar to CSS.

**Theming**:
A system of design tokens (colors, spacing, typography) that ensures visual consistency across an app.

**Reanimated**:
An animation library that runs animations on the native UI thread for smooth 60fps performance.
