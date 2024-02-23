import Image from 'next/image';
import {ICities, IFilter, IProfiles, searchProfiles} from '@/api';
import {ChangeEvent, useEffect, useState} from 'react';
import {TailSpin} from 'react-loader-spinner';
import router from 'next/client';
import Router from "next/router";

const LabsSelection = () => {

    const [profiles, setProfiles] = useState<Array<IProfiles>>();
    const [cities, setCities] = useState<Array<ICities>>();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [isRequiredMinLength, setIsRequiredMinLength] = useState<boolean>();

    async function findProfiles(cityId?: number) {
        try {
            setIsLoading(true);
            setCities(undefined);
            const filter: IFilter = {
                campaignId: 1
            }

            if (cityId) {
                filter.cityId = cityId;
            }

            if (!cityId) {
                navigator.geolocation.getCurrentPosition(async function (position) {
                    filter.lng = position.coords.longitude;
                    filter.lat = position.coords.latitude;
                });
            }

            const response = await searchProfiles.searchProfilesByCoords(filter);
            setProfiles(response.profiles);
        } catch (error) {
            console.warn('error');
        } finally {
            setIsLoading(false);
        }
    }

    const debouncedFunction = debounce(async () => {
        await searchCities();
    }, 1000);

    function debounce(callback: (event: ChangeEvent<HTMLInputElement>) => Promise<void>, delay: number) {
        let timeoutId: any;
        return function () {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(callback, delay);
        };
    }

    async function searchCities() {
        try {
            const search = document.getElementById('search-city') as HTMLInputElement;
            let searchValue: string = '';
            if (search) {
                searchValue = search.value;
            }
            if (searchValue.length <= 3) {
                setIsRequiredMinLength(true);
                setCities([]);
                return;
            }
            const response = await searchProfiles.searchCities(searchValue);
            setCities(response);
        } catch (error) {
            console.warn(error);
        }
    }

    useEffect(() => {
        (async () => {
            await findProfiles();
        })();
    }, [])

    return (
        <section className='bg-neutral max-w-screen min-h-[500px] py-8 lg:my-24 relative z-10'>
            <Image src='/assets/images/map.svg' fill alt='mapa'
                   className='absolute z-20'/>
            <div className='w-11/12 lg:w-3/6 m-auto flex gap-3 items-center'>
                <div className='relative w-[100px] h-[50px]'>
                    <Image src='/assets/icons/pin.svg' fill alt='alfinete'/>
                </div>
                <p className='text-lg font-bold leading-[32px] text-neutralDark'>Encontre o <br/> laboratório parceiro
                    mais próximo de você</p>
            </div>
            <div className='w-11/12 lg:w-3/6 m-auto relative z-30'>
                <input
                    onChange={() => debouncedFunction()}
                    id='search-city'
                    placeholder='Digite aqui sua cidade'
                    className='w-full h-14 px-3 mt-8 bg-white rounded-lg border-2 border-neutralLight outline-0'/>
                {
                    cities ?
                        <div
                            className='w-full absolute mt-1 p-4 bg-white rounded-lg border-2 border-neutralLight flex flex-col gap-2'>
                            {
                                cities && cities.length ?
                                    cities.map((city, index) => {
                                        return (
                                            <div key={index} className='rounded-lg p-3 bg-gray hover:bg-green'
                                                 onClick={() => findProfiles(city.id)}>
                                                <p className='text-neutralDark text-base'>{city.name}</p>
                                            </div>
                                        );
                                    })
                                    :
                                    isRequiredMinLength ?
                                        <p>Digite pelo menos 3 caracteres para buscar</p>
                                        :
                                        !cities.length ?
                                            <p>Nenhuma cidade encontrada</p>
                                            : <></>
                            }
                        </div>
                        :
                        <></>
                }

                {
                    isLoading ?
                        <div className='py-28 flex justify-center items-center'>
                            <TailSpin
                                visible={true}
                                width="96"
                                strokeWidth="5"
                                ariaLabel="rotating-lines-loading"
                            />
                        </div>
                        : (profiles && profiles.length) ?
                            profiles.map((profile, index) => {
                                return (
                                    <div key={index}
                                         className='w-full mt-4 rounded-lg flex flex-col px-6 pt-6 bg-white shadow-lg shadow-box'>
                                        <div className='flex gap-10 items-center'>
                                            <Image src={profile.logo} alt='Logo do laboratório' className='' width={80}
                                                   height={80}/>
                                            <div className='flex flex-col'>
                                                <p><span>{profile.name}</span> | <span>{profile.profile_address.city}</span>
                                                </p>
                                                <p>{profile.profile_address.address}, {profile.profile_address.address_number} - {profile.profile_address.address_district}</p>
                                            </div>
                                        </div>
                                        <p onClick={() => window.location.href = profile.url}
                                           className='text-center text-grayDark cursor-pointer underline pb-2'>Finalizar
                                            agendamento</p>
                                    </div>
                                );
                            })
                            :
                            null
                }
            </div>
        </section>
    );
}

export default LabsSelection;