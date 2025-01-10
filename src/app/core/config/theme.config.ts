import { AuraBased } from '@core/constants';
import { PrimeNGConfigType } from 'primeng/config';

export const themeConfig: PrimeNGConfigType = {
  theme: {
    preset: AuraBased,
    options: {
      cssLayer: {
        order: 'tailwind-base, primeng, tailwind-utilities',
      },
    },
  },
};
