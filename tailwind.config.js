/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{vue,js}'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Fredoka'
      },
      colors: {
        primary: 'rgb(var(--md-sys-color-primary))',
        surfaceTint: 'rgb(var(--md-sys-color-surface-tint))',
        onPrimary: 'rgb(var(--md-sys-color-on-primary))',
        primaryContainer: 'rgb(var(--md-sys-color-primary-container))',
        onPrimaryContainer: 'rgb(var(--md-sys-color-on-primary-container))',
        secondary: 'rgb(var(--md-sys-color-secondary))',
        onSecondary: 'rgb(var(--md-sys-color-on-secondary))',
        secondaryContainer: 'rgb(var(--md-sys-color-secondary-container))',
        onSecondaryContainer: 'rgb(var(--md-sys-color-on-secondary-container))',
        tertiary: 'rgb(var(--md-sys-color-tertiary))',
        onTertiary: 'rgb(var(--md-sys-color-on-tertiary))',
        tertiaryContainer: 'rgb(var(--md-sys-color-tertiary-container))',
        onTertiaryContainer: 'rgb(var(--md-sys-color-on-tertiary-container))',
        error: 'rgb(var(--md-sys-color-error))',
        onError: 'rgb(var(--md-sys-color-on-error))',
        errorContainer: 'rgb(var(--md-sys-color-error-container))',
        onErrorContainer: 'rgb(var(--md-sys-color-on-error-container))',
        background: 'rgb(var(--md-sys-color-background))',
        onBackground: 'rgb(var(--md-sys-color-on-background))',
        surface: 'rgb(var(--md-sys-color-surface))',
        onSurface: 'rgb(var(--md-sys-color-on-surface))',
        surfaceVariant: 'rgb(var(--md-sys-color-surface-variant))',
        onSurfaceVariant: 'rgb(var(--md-sys-color-on-surface-variant))',
        outline: 'rgb(var(--md-sys-color-outline))',
        outlineVariant: 'rgb(var(--md-sys-color-outline-variant))',
        shadow: 'rgb(var(--md-sys-color-shadow))',
        scrim: 'rgb(var(--md-sys-color-scrim))',
        inverseSurface: 'rgb(var(--md-sys-color-inverse-surface))',
        onInverseSurface: 'rgb(var(--md-sys-color-inverse-on-surface))',
        inversePrimary: 'rgb(var(--md-sys-color-inverse-primary))',
        primaryFixed: 'rgb(var(--md-sys-color-primary-fixed))',
        onPrimaryFixed: 'rgb(var(--md-sys-color-on-primary-fixed))',
        primaryFixedDim: 'rgb(var(--md-sys-color-primary-fixed-dim))',
        onPrimaryFixedVariant: 'rgb(var(--md-sys-color-on-primary-fixed-variant))',
        secondaryFixed: 'rgb(var(--md-sys-color-secondary-fixed))',
        onSecondaryFixed: 'rgb(var(--md-sys-color-on-secondary-fixed))',
        secondaryFixedDim: 'rgb(var(--md-sys-color-secondary-fixed-dim))',
        secondaryFixedVariant: 'rgb(var(--md-sys-color-on-secondary-fixed-variant))',
        tertiaryFixed: 'rgb(var(--md-sys-color-tertiary-fixed))',
        onTertiaryFixed: 'rgb(var(--md-sys-color-on-tertiary-fixed))',
        tertiaryFixedDim: 'rgb(var(--md-sys-color-tertiary-fixed-dim))',
        tertiaryFixedVariant: 'rgb(var(--md-sys-color-on-tertiary-fixed-variant))',
        surfaceDim: 'rgb(var(--md-sys-color-surface-dim))',
        surfaceBright: 'rgb(var(--md-sys-color-surface-bright))',
        surfaceContainerLowest: 'rgb(var(--md-sys-color-surface-container-lowest))',
        surfaceContainerLow: 'rgb(var(--md-sys-color-surface-container-low))',
        surfaceContainer: 'rgb(var(--md-sys-color-surface-container))',
        surfaceContainerHigh: 'rgb(var(--md-sys-color-surface-container-high))',
        surfaceContainerHighest: 'rgb(var(--md-sys-color-surface-container-highest))'
      }
    }
  },
  plugins: []
}
