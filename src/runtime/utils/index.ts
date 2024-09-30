import fuse from "../services/fuse";
import { useDateFormat } from '@vueuse/core';

import type { GroupedOutlets, FilterDataParams, SearchDataParams } from "./type/Index";
import type { OutletDeparture } from "../composables/types/UseApiData";

export const groupBy = (data: OutletDeparture[]) => {
  if (!data || data.length === 0) return [];
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

export const group = (data: any, groupBy: any) => {
  if (!data || data.length === 0) return [];
  return data.reduce((prev: any, outlet: any) => {
    const current = prev;

    if (!prev.find((item: any) => item[groupBy] === outlet[groupBy])) {
      current.push({ [groupBy]: outlet[groupBy], items: [outlet] })
    } else {
      current
        .find((item: any) => item[groupBy] === outlet[groupBy])
        ?.items?.push(outlet)
    }
    
    return current

  }, [])
}



export const filterData = ({datas, by, keyword}: FilterDataParams) => {
  if (!datas || datas.length  === 0) return [];
  return datas.filter((data: any) => {
    if (Array.isArray(by)) {
      const firstMatch = data[by[0]].toLowerCase().includes(keyword.toLowerCase());
      const secMatch = data[by[1]].toLowerCase().includes(keyword.toLowerCase());
      return firstMatch || secMatch;
    }
    return data[by].toLowerCase().includes(keyword.toLowerCase())
  });
}

export const searchData = ({ list, keys, keyword }: SearchDataParams) => {
  return fuse({ list, keys }).search(keyword).map((result: any)  => result.item);
}

export const formatDateReadable = (date: Date) => {
  return useDateFormat(date, 'dddd, DD MMMM YYYY', { locales: 'id' });
}

export const formatNumber = (number: number) =>  new Intl.NumberFormat('id').format(number);

export const seatsLayoutRemodel = (layout: any) => {
  return  Object.entries(layout).map(([key, value]: any, index) => {
    const [row, col] = key.split('_');
    return { ...value, row: parseInt(row), col: parseInt(col), isSelected: false, index };
  })
}

export const dateToYMD = (date: Date) => {
  if (!date) return null;
  // Get the individual components of the date
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based, so add 1
  const day = String(date.getDate()).padStart(2, '0');

  // Construct the zero-based YMD string
  const ymd = `${year}-${month}-${day}`;

  return ymd;
};