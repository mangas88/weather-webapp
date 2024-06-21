import { useSearchParams } from "react-router-dom"
import SelectedCity from './../components/selected-city/SelectedCity';

export default function SelectedCityRoute() {
  const [params] = useSearchParams();
  const lat = params.get('lat');
  const lon = params.get('lon');

  return(
    <SelectedCity coords={{lat,lon}}/>
  )
}