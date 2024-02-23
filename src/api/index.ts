import api from '@/api/api';

async function searchProfilesByCoords(filter: IFilter): Promise<IResponseProfiles> {

    const filterCampaignId = `filter[campaign_id]=${filter.campaignId}`;

    let queryString = `?${filterCampaignId}`;

    if (filter.cityId) {
        const filterCity = `filter[city_id]=${filter.cityId}`;
        queryString += `&${filterCity}`;
    }

    if (filter.lat && filter.lng && !filter.cityId) {
        const filterLat = `filter[lat]=${filter.lat}`;
        const filterLng = `filter[lng]=${filter.lng}`;
        queryString += `&${filterLat}&${filterLng}`
    }

    const response = await api.get('/api/campaigns/profiles/search' + queryString);
    return response.data;
}

async function searchCities(search?: string): Promise<Array<ICities>> {
    let filter: string = '';

    if (search) {
        filter = `&filter[name]=${search}`
    }

    const response = await api.get('/api/client/cities?page[size]=5' + filter);
    return response.data.cities;
}

export const searchProfiles = {
    searchProfilesByCoords,
    searchCities
};

interface IResponseProfiles {
    profiles: Array<IProfiles>,
}

export interface IProfiles {
    id: number,
    name: string,
    url: string,
    logo: string,
    profile_address: {
        state: string,
        city: string,
        address: string,
        address_number: string,
        address_district: string
    }
}

export interface ICities {
    id: number,
    code: string,
    name: string,
    state: string,
    created_at: string,
    updated_at: string
}

export interface IFilter {
    campaignId: number,
    cityId?: number,
    lat?: number,
    lng?: number,
}