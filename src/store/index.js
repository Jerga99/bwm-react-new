
import { rentalData } from './data';

const store = {
  rentals: () => {
    return rentalData;
  },
  data1: () => ['1','2','3'],
  data2: () => ['a', 'b', 'c']
}

export default store;