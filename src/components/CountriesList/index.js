import './index.css'

const CountriesList = props => {
  const {countryDetails, addVisitedCountries} = props
  const {name, isVisited, id} = countryDetails

  const visitText = isVisited ? 'Visited' : 'Visit'

  const visitCountry = () => {
    addVisitedCountries(id)
  }

  return (
    <li className="country-list-item">
      <p className="country-name">{name}</p>
      {isVisited === true ? (
        <p className="para">{visitText}</p>
      ) : (
        <button type="button" data-testid="remove-button" className="button" onClick={visitCountry}>
          {visitText}
        </button>
      )}
    </li>
  )
}

export default CountriesList
