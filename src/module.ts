import { defineNuxtModule, addPlugin, createResolver, addImports, installModule } from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions {}

interface AddImportsProperty {
  path: string;
  type: boolean;
  names: string[];
}

const typeFormReservationImports: AddImportsProperty = {
  path: 'runtime/composables/FormReservation/type',
  type: true,
  names: [
    'UseSelectOutletParams',
    'UseSelectOutlet',
    'UseSelectDepartureParams',
    'UseSelectDepature',
    'UseSetOutletsParams',
    'UseSetOutlets',
    'OutletDeparture',
    'City',
    'Departures',
    'OutletDestination',
    'Destinations',
    'SelectedDepartureParams',
    'SelectedOutlet',
    'Form',
    'FormsCustomer',
    'FormsPassenger',
  ]
};

const typeUseApiData: AddImportsProperty = {
  path: 'runtime/composables/types/UseApiData',
  type: true,
  names: [
    'requestTokenBody',
    'GetScheduleParams',
    'GetSeatsParams',
    'GetCalculatePriceParams',
    'GetBookingParams',
    'BookingDetailParams',
    'OutletDeparture',
    'City',
    'Departures',
    'OutletDestination',
    'Destinations',
    'Booking',
    'CalculatePrice',
    'ListKursi',
    'ListHarga',
    'DetailBooking',
    'PaymentData',
    'DetailTiket',
    'ListTransit',
    'Penumpang',
    'PaymentData2',
    'ListPayment',
    'Schedule',
    'Promo',
    'ListTransit',
    'ListTransitConnecting',
    'Seats',
    'Petalayout',
    'PetaLayoutItem',
  ],
};

const typeUtilsImports: AddImportsProperty = {
  names: [
    'GroupedOutlets',
    'FilterDataParams',
    'SearchDataParams'
  ],
  path: 'runtime/utils/type/Index',
  type: true
};

const utilsImports: AddImportsProperty = {
  path: 'runtime/utils/index',
  type: false,
  names: [
    'groupBy',
    'group',
    'filterData',
    'searchData',
    'formatDateReadable',
    'formatNumber',
    'seatsLayoutRemodel',
    'dateToYMD'
  ],
};


export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'wl-composable-module',
    configKey: 'wl-composable-module'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'));

    /* Single Composable Imports */
    addImports([
      {
        name: 'useWlFetch',
        from: resolver.resolve('runtime/composables/useCommons')
      },
      {
        name: 'useApiData',
        from: resolver.resolve('runtime/composables/useApiData')
      },
      {
        name: 'useExpandElement',
        from: resolver.resolve('runtime/composables/useExpandElement')
      },
      {
        name: 'useModal',
        from: resolver.resolve('runtime/composables/useModal')
      },
      {
        name: 'useSearchOutlet',
        from: resolver.resolve('runtime/composables/FormReservation/useSearchOutlet')
      },
      {
        name: 'useStoredReservationData',
        from: resolver.resolve('runtime/composables/useStoredReservationData')
      },

      /* Type Use Commons */
      {
        name: 'ApiCallPayload',
        type: true,
        from: resolver.resolve('runtime/composables/types/UseCommons')
      },
      {
        name: 'ApiResponseWrapper',
        type: true,
        from: resolver.resolve('runtime/composables/types/UseCommons')
      },

      /* Form Reservation */
      {
        name: 'useSelectOutlet',
        from: resolver.resolve('runtime/composables/FormReservation/useSelectOutlet')
      },
      {
        name: 'useSetOutlets',
        from: resolver.resolve('runtime/composables/FormReservation/useSetOutlets')
      },
      {
        name: 'useFormReservation',
        from: resolver.resolve('runtime/composables/FormReservation/useFormReservation')
      },

      /* Pinia Store */
      {
        name: 'useStore',
        from: resolver.resolve('runtime/store/store'),
        
      },

    ]);

    /* Multiple Composable Imports */
    typeFormReservationImports.names.forEach(name => {
      addImports({
        from: resolver.resolve(typeFormReservationImports.path),
        name,
        type: typeFormReservationImports.type
      })
    });

    typeUtilsImports.names.forEach(name => {
      addImports({
        from: resolver.resolve(typeUtilsImports.path),
        name,
        type: typeUtilsImports.type
      })
    });

    utilsImports.names.forEach(name => {
      addImports({
        from: resolver.resolve(utilsImports.path),
        name,
        type: utilsImports.type
      })
    });

    typeUseApiData.names.forEach(name => {
      addImports({
        from: resolver.resolve(typeUseApiData.path),
        name,
        type: typeUseApiData.type
      })
    });

    await installModule('@pinia/nuxt');
    await installModule('@vueuse/nuxt');
  }
})
