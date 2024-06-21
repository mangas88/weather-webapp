import { useState, useEffect } from "react";

import styled from "styled-components"
import Button from '../ui/Button';
import InputForm from './../ui/InputForm';
import CityListItem from './CityListItem';

import cities from "../../mock/cities";
import { setTextFilter } from "../../features/filtersSlice";
import { removedCity } from "../../features/citiesSlice";
import { weatherApi} from "../../features/weatherApi";
import { nanoid } from 'nanoid'
import {useSelector, useDispatch } from "react-redux";


const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 10px;
`

const EmptyState = styled.div`
  text-align: center;
  padding-top: 1rem;
`

export default function CityList() {
  let dispatch = useDispatch();

  let [isInputVisible, setIsInputVisible] = useState(false);
  let filters = useSelector(state => state.filters);
  let cityList = useSelector(state => state.cities);

  useEffect(() => {
    localStorage.setItem('cityList', JSON.stringify(cityList))
  }, [cityList])

  let filteredCityList = cityList.filter(city => {
    const textMatch = city.name.toLowerCase()
      .includes(filters.toLowerCase())
    return textMatch
  })

  function handleAddCity(city) {
    let cityId =  nanoid();
    dispatch(weatherApi.endpoints.getCoordinatesByCityName.initiate({
      name: city,
      id: cityId
    }))
  }

  function handleAddPosition() {
    if('geolocation' in navigator) {
      let cityId =  nanoid();
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(weatherApi.endpoints.getCityNameByCoordinates.initiate({
          id: cityId,
          coords: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
        }))
      })
    } else {
      // alert('your browser does not support geolocation')
    }
  }

  function handleFilterCities(text) {
    dispatch(setTextFilter(text))
  }

  function handleClearInput() {
    dispatch(setTextFilter(''))
  }

  function handleDeleteCity(id) {
    dispatch(removedCity(id))
  }

  return(
    <>
      <ButtonContainer>
        <Button handleClick={() => setIsInputVisible(!isInputVisible)}>Add City</Button>
        <Button handleClick={handleAddPosition}>Add Position</Button>
      </ButtonContainer>
      {isInputVisible && (
        <InputForm 
          placeholder={'Insert city name'}
          buttonAction={handleAddCity}
          buttonText={'Add City'}
        />
      )}
      <InputForm 
        placeholder={'Filter city list'}
        buttonAction={handleClearInput}
        buttonText={'Clear filter'}

        inputValue={filters}
        inputAction={handleFilterCities}
      />
      {
			  filteredCityList && filteredCityList.length > 0 ? filteredCityList.map(city => {
          return <CityListItem city={city} key={city.id} deleteCity={handleDeleteCity}/> 
        }) : (
          <EmptyState>Add a new city or remove filters</EmptyState>
        )
      }
    </>
  )
}