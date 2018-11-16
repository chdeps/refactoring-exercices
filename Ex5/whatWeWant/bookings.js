import { getAppParams } from './api.js';

class BookingsStore {
  constructor() {
    getAppParams()
      .then(parameters => {
        const freeFloatingPricePerMinute = parameters.data.filter(
          param => param.description === 'freeFloatingPricePerMinute'
        )[0];
        const allowedAreaFreeFloatingMinutesBonus = parameters.data.filter(
          param => param.description === 'allowedAreaFreeFloatingMinutesBonus'
        )[0];
        const minimumNumberOfHoursBeforeBooking = parameters.data.filter(
          param => param.description === 'minimumNumberOfHoursBeforeBooking'
        )[0];
        this.minimumNumberOfHoursBeforeBooking = Number(
          minimumNumberOfHoursBeforeBooking.value
        );
        this.freeFloatingPricePerMinute = Number(
          freeFloatingPricePerMinute.value
        );
        this.allowedAreaFreeFloatingMinutesBonus = Number(
          allowedAreaFreeFloatingMinutesBonus.value
        );
        AsyncStorage.setItem(
          asyncStorageKeys.FREE_FLOATING_PRICE_PER_MINUTE,
          String(freeFloatingPricePerMinute.value)
        );
        return AsyncStorage.setItem(
          asyncStorageKeys.NEW_BOOKING_DATE_THRESHOLD,
          String(minimumNumberOfHoursBeforeBooking.value)
        );
      })
      .catch(error => {
        logger.warn('Error in setting applicationParameters', { error });
        return AsyncStorage.getItem(
          asyncStorageKeys.NEW_BOOKING_DATE_THRESHOLD
        );
      })
      .then(minimumNumberOfHoursBeforeBooking => {
        if (minimumNumberOfHoursBeforeBooking) {
          this.minimumNumberOfHoursBeforeBooking = Number(
            minimumNumberOfHoursBeforeBooking
          );
        }
        return null;
      })
      .catch(error => {
        logger.warn('Error reading booking date threshold from asyncStorage', {
          error,
        });
      });
  }
}
