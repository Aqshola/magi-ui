# MAGI-UI Project Rules and Conventions

## Project Overview
MAGI-UI is a React + TypeScript component library built with Vite, utilizing shadcn/ui components with Tailwind CSS v4 and Radix UI primitives.

## Technology Stack
- **Framework**: React 19.1.1 with TypeScript 5.8.3
- **Build Tool**: Vite 7.1.2 with SWC for fast refresh
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Library**: shadcn/ui (New York style) with Radix UI primitives
- **Icons**: Lucide React
- **Package Manager**: Bun (based on bun.lock presence)
- **Linting**: ESLint with TypeScript and React plugins

## Project Structure

### Directory Organization
```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   └── additional/   # Custom components extending shadcn
├── show/            # Component showcase/demo files
├── lib/             # Utility functions
└── assets/          # Static assets
```

### File Naming Conventions
- **Components**: Use kebab-case for files (e.g., `alert-dialog.tsx`, `custom-progress-bar.tsx`)
- **Showcase files**: Use kebab-case with `-showcase` suffix (e.g., `button-showcase.tsx`)
- **Export names**: Use PascalCase for component exports (e.g., `ButtonShowCase`, `CustomProgressBar`)

## Component Development Rules

### shadcn/ui Components (`src/components/ui/`)
1. **Follow shadcn/ui patterns**: Use the established shadcn/ui component structure
2. **Use Radix UI primitives**: All interactive components should be built on Radix UI
3. **Implement proper TypeScript**: Use `React.ComponentProps<typeof Component>` for prop inheritance
4. **Include data-slot attributes**: Add `data-slot` attributes for styling hooks
5. **Use className merging**: Always use the `cn()` utility for className composition
6. **Support variant props**: Use `class-variance-authority` (cva) for component variants
7. **Forward refs properly**: Use `React.forwardRef` when necessary

### Custom Components (`src/components/additional/`)
1. **Extend, don't replace**: Build upon existing shadcn/ui components
2. **Use Radix primitives**: Leverage Radix UI primitives directly when needed
3. **Follow TypeScript patterns**: Define proper interfaces for props
4. **Maintain consistency**: Follow the same styling and structure patterns as shadcn components

### Showcase Components (`src/show/`)
1. **Demonstrate all variants**: Show all available component variants and states
2. **Use descriptive examples**: Provide meaningful examples that show real-world usage
3. **Keep it simple**: Focus on component demonstration, not complex logic
4. **Export as default**: Use default exports with descriptive names

## Styling Guidelines

### Tailwind CSS v4 Usage
1. **Use CSS variables**: Leverage the custom CSS variable system defined in `index.css`
2. **Follow design tokens**: Use predefined color tokens (primary, secondary, muted, etc.)
3. **Responsive design**: Use responsive utilities (md:, lg:, etc.)
4. **Dark mode support**: Use the custom `dark` variant for dark mode styles
5. **Custom properties**: Use CSS custom properties for dynamic values (e.g., `--cell-size`)

### Component Styling Patterns
1. **Use cn() utility**: Always merge classNames using the `cn()` function from `@/lib/utils`
2. **Conditional styling**: Use object syntax for conditional classes
3. **Variant-based styling**: Use `class-variance-authority` for component variants
4. **Focus states**: Include proper focus-visible states for accessibility
5. **Disabled states**: Handle disabled states with appropriate opacity and pointer-events

## TypeScript Configuration

### Import Aliases
- Use `@/` for all internal imports (configured in tsconfig and vite.config)
- Examples: `@/components/ui/button`, `@/lib/utils`

### Type Safety Rules
1. **Strict mode enabled**: All TypeScript strict checks are enforced
2. **No unused variables**: `noUnusedLocals` and `noUnusedParameters` are enabled
3. **Proper prop typing**: Use `React.ComponentProps<>` for extending component props
4. **Interface over type**: Prefer interfaces for component props

## Development Workflow

### Scripts
- `bun dev`: Start development server
- `bun build`: Build for production (TypeScript check + Vite build)
- `bun lint`: Run ESLint
- `bun preview`: Preview production build

### Code Quality
1. **ESLint compliance**: All code must pass ESLint checks
2. **TypeScript compilation**: No TypeScript errors allowed
3. **React best practices**: Follow React hooks rules and refresh patterns
4. **Import organization**: Group imports logically (React, third-party, internal)

## Component API Design

### Props Patterns
1. **Extend native props**: Use `React.ComponentProps<'element'>` for HTML elements
2. **Variant props**: Use union types for variant options
3. **Optional props**: Make props optional with sensible defaults
4. **Forwarded props**: Use spread operator for forwarding props

### Example Component Structure
```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

interface ComponentProps extends React.ComponentProps<'div'> {
  variant?: 'default' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

function Component({ className, variant = 'default', ...props }: ComponentProps) {
  return (
    <div
      data-slot="component"
      className={cn("base-styles", variantStyles[variant], className)}
      {...props}
    />
  )
}

export { Component }
```

## Accessibility Requirements
1. **Keyboard navigation**: All interactive components must be keyboard accessible
2. **ARIA attributes**: Use appropriate ARIA attributes from Radix UI
3. **Focus management**: Implement proper focus states and management
4. **Screen reader support**: Ensure components work with screen readers

## Performance Guidelines
1. **Tree shaking**: Use named exports for better tree shaking
2. **Lazy loading**: Consider lazy loading for large showcase components
3. **Minimal re-renders**: Use React.memo and useMemo when appropriate
4. **Bundle optimization**: Keep dependencies minimal and focused

## Documentation Standards
1. **Component showcases**: Every UI component should have a corresponding showcase
2. **TypeScript documentation**: Use JSDoc comments for complex components
3. **README updates**: Keep README.md updated with project changes
4. **Example usage**: Provide clear examples in showcase files

## Git and Version Control
1. **Ignore patterns**: Follow the established .gitignore patterns
2. **Commit messages**: Use descriptive commit messages
3. **Branch naming**: Use descriptive branch names for features
4. **Code review**: All changes should be reviewed before merging

## Dependencies Management
1. **Peer dependencies**: Keep React and related packages as peer dependencies
2. **Version pinning**: Pin exact versions for critical dependencies
3. **Regular updates**: Keep dependencies updated for security and features
4. **Bundle analysis**: Monitor bundle size impact of new dependencies

---

*This document should be updated as the project evolves and new patterns emerge.*