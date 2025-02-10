import { describe, it, expect } from "vitest";
import { useApiData } from "../../src/runtime/composables/useApiData";
import { setup } from '@nuxt/test-utils/e2e';

describe('useApiData', async () => {
  await setup({
    server: true,
    host: 'http://localhost:3000',
  });

  it('Get Departure Should response with departure data', async () => {
    /* Prepare */
    const { getDeparture } = useApiData();
    const departures = await getDeparture();

    /* Assert */
    expect(departures).toHaveProperty('kota');
    expect(departures).toHaveProperty('outlet');
  });
});