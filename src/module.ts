import { defineNuxtModule, addPlugin, createResolver, addImports, addImportsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'wl-composable-module',
    configKey: 'wl-composable-module'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'));
    
    addImports([
      {
        name: 'useCommons',
        from: resolver.resolve('runtime/composables/useCommons')
      },
      {
        name: 'useApiData',
        from: resolver.resolve('runtime/composables/useApiData')
      },
      {
        name: 'useSelectOutlet',
        from: resolver.resolve('runtime/composables/FormReservation/useSelectOutlet')
      },
      {
        name: 'useSelectDeparture',
        from: resolver.resolve('runtime/composables/FormReservation/useSelectDeparture')
      },
      {
        name: 'useSetOutlets',
        from: resolver.resolve('runtime/composables/FormReservation/useSetOutlets')
      },
      {
        name: 'useFormReservation',
        from: resolver.resolve('runtime/composables/FormReservation/useFormReservation')
      }
    ]);
  }
})
