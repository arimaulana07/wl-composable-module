import type { OutletDeparture, OutletDestination } from '../interface'

interface GroupedOutlets {
  kota: string | null;
  items: OutletDeparture[] | null;
}

export const groupBy = (data: OutletDeparture[]) => {
  return data.reduce<GroupedOutlets[]>((curr, outlet) => {
    const current: GroupedOutlets[] = curr;

    if (!curr.find(item => item.kota === outlet.kota)) {
      current.push({ kota: outlet.kota, items: [outlet] })
    } else {
      current
        .find((item) => item.kota === outlet.kota)
        ?.items?.push(outlet)
    }
    
    return current

  }, [])
}