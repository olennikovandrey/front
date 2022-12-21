import { urls } from "../../../../../constants/constants";
import { doFetch } from "../../../../../services/services";

export const updateCinemaFetch = async updatedCinema => {
  return doFetch(urls.updateCinema, {
    method: "put",
    body: {
      updatedCinema
    }
  });
};
