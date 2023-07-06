import { useQuery } from "react-query";
import { AxiosResponse } from "axios";

import { axios } from "lib/axios";
import { Hero } from "../types";
import { populateConfig } from "config";

const getHero = (): Promise<Hero> => {
	return axios
		.get<Hero>(`/api/hero?populate=${populateConfig}`)
		.then((response: AxiosResponse) => {
			return response.data.data;
		});
};

export const useHero = () => {
	return useQuery<Hero, Error>(["hero"], getHero);
};
