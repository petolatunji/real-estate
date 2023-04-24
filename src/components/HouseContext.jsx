import { useState, useEffect, createContext } from 'react'

//import data
import { housesData } from '../data'

//create context
export const HouseContext = createContext()

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('Location (any)')
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('Property type (any)')
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState('Price range (any)')
  const [loading, setLoading] = useState(false)

  //code to return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country
    })
    //remove duplicate country
    const uniquecountries = ['Location (any)', ...new Set(allCountries)]
    //set countries state
    setCountries(uniquecountries)
  }, [])

  //code to return all properties
  useEffect(() => {
    const allproperties = houses.map((house) => {
      return house.type
    })
    //remove duplicate country
    const uniquecountries = ['Property type (any)', ...new Set(allproperties)]
    //set countries state
    setProperties(uniquecountries)
  }, [])

  const handleClick = () => {
    //set Loading
    setLoading(true)

    //create a function that check if the string include any
    const isDefault = (str) => {
      return str.split(' ').includes('(any)')
    }
    //get mini price then convert to number

    const miniPrice = parseInt(price.split(' ')[0])

    //get mini price then convert to number

    const maxPrice = parseInt(price.split(' ')[2])

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price)

      //if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        house.price >= miniPrice &&
        house.price >= maxPrice
      ) {
        return house
      }
      //if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house
      }
      //if country is nt default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country
      }

      //if property is nt default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property
      }

      //if price is nt default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= miniPrice && housePrice <= maxPrice) {
          return house
        }
      }

      //if country and property is nt default
      if (!isDefault(property) && !isDefault(country) && isDefault(price)) {
        return house.type === property && house.country === country
      }

      //if country and price is nt default
      if (!isDefault(country) && !isDefault(price) && isDefault(property)) {
        if (housePrice >= miniPrice && housePrice <= maxPrice) {
          return house.country === country
        }
      }

      //if property and price is nt default
      if (!isDefault(property) && !isDefault(price) && isDefault(country)) {
        if (housePrice >= miniPrice && housePrice <= maxPrice) {
          return house.type === property
        }
      }

      //if property, country and price is nt default
      if (!isDefault(property) && !isDefault(price) && !isDefault(country)) {
        if (housePrice >= miniPrice && housePrice <= maxPrice) {
          return house.type === property && house.country === country
        }
      }
    })

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      )
    }, 1000)
  }

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        houses,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider
